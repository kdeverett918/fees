import { existsSync, readFileSync, rmSync } from "node:fs";
import path from "node:path";
import { expect, test } from "@playwright/test";

const submissionDir = path.join(process.cwd(), "data", "submissions");
const allLeadsFile = path.join(submissionDir, "contact-leads.jsonl");
const conciergeLeadsFile = path.join(
  submissionDir,
  "contact-leads-concierge.jsonl"
);
const facilityLeadsFile = path.join(
  submissionDir,
  "contact-leads-facility.jsonl"
);

function clearSubmissionArtifacts() {
  for (const filePath of [allLeadsFile, conciergeLeadsFile, facilityLeadsFile]) {
    if (existsSync(filePath)) {
      rmSync(filePath);
    }
  }
}

function readJsonLines(filePath: string) {
  if (!existsSync(filePath)) {
    return [];
  }

  const content = readFileSync(filePath, "utf8").trim();
  if (!content) {
    return [];
  }

  return content
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line) as Record<string, string>);
}

test("homepage routes concierge patients through the portal and into the request funnel", async ({
  page,
}) => {
  await page.goto("/");

  await page.getByRole("button", { name: /Concierge Patient Portal/i }).click();
  await expect(
    page.locator("h3").filter({ hasText: "Open the Concierge Patient Portal" })
  ).toBeVisible();

  await page.getByRole("link", { name: /Open Patient Portal/i }).click();

  await expect(page).toHaveURL(/\/concierge-patient-portal/);
  await page.getByRole("link", { name: /Start Patient Request/i }).click();

  await expect(page).toHaveURL(/\/contact\?path=patient&intent=appointment/);
  await expect(
    page.getByRole("heading", { name: /Request a Consult or Appointment/i })
  ).toBeVisible();
  await expect(
    page.getByLabel(/Patient city \/ neighborhood/i)
  ).toBeVisible();
});

test.describe("contact submission routing", () => {
  test.describe.configure({ mode: "serial" });

  test("patient request funnel submits and lands in the concierge lead queue", async ({
    page,
  }) => {
    clearSubmissionArtifacts();

    await page.goto("/concierge-patient-portal");
    await page.getByRole("link", { name: /Start Patient Request/i }).click();

    await page.getByLabel(/Patient city \/ neighborhood/i).fill("Las Vegas");
    await page.getByLabel(/Requested service/i).selectOption("mobile-fees");
    await page
      .getByLabel(/Referral or order status/i)
      .selectOption("have-order");
    await page.getByLabel(/Desired timeframe/i).selectOption("this-week");
    await page.getByLabel(/Payment path/i).selectOption("self-pay");

    await page.getByRole("button", { name: /Continue/i }).click();

    await page.getByLabel(/Best contact name/i).fill("Jordan Test");
    await page.getByLabel(/Best phone number/i).fill("(702) 555-0001");
    await page.getByLabel(/Email address/i).fill("jordan@example.com");
    await page
      .getByLabel(/Anything we should know before we call/i)
      .fill("Testing the Las Vegas patient appointment funnel.");

    await page.getByRole("button", { name: /Request Next Step/i }).click();

    await expect(
      page.getByRole("heading", { name: /concierge patient request is in/i })
    ).toBeVisible();

    await expect.poll(() => readJsonLines(conciergeLeadsFile).length).toBe(1);

    const [lead] = readJsonLines(conciergeLeadsFile);
    expect(lead?.leadLane).toBe("concierge");
    expect(lead?.requestPath).toBe("patient");
    expect(lead?.pipelineStage).toBe("patient-scheduling");
    expect(lead?.sourcePage).toContain("/concierge-patient-portal");
    expect(lead?.firstTouchPage).toContain("/concierge-patient-portal");
  });

  test("facility packet funnel submits and lands in the facility lead queue", async ({
    page,
  }) => {
    clearSubmissionArtifacts();

    await page.goto("/facility-onboarding-packet");
    await page
      .getByRole("link", { name: /Request Packet Follow-Up/i })
      .click();

    await page
      .getByLabel(/Facility or practice name/i)
      .fill("Sunrise Transitional Care");
    await page.getByLabel(/Care setting/i).selectOption("snf");
    await page.getByLabel(/Needed first/i).selectOption("workflow-consult");
    await page.getByLabel(/Your role/i).selectOption("rehab-slp");
    await page.getByLabel(/Desired timeframe/i).selectOption("this-month");
    await page.getByLabel(/Expected volume/i).selectOption("3-5");
    await page
      .getByLabel(/Current billing expectation/i)
      .selectOption("facility-paid");

    await page.getByRole("button", { name: /Continue/i }).click();

    await page.getByLabel(/Best contact name/i).fill("Alex Facility");
    await page.getByLabel(/Best phone number/i).fill("(702) 555-0002");
    await page.getByLabel(/Email address/i).fill("alex@example.com");
    await page
      .getByLabel(/Anything we should know before we call/i)
      .fill("Testing the facility packet route and onboarding response path.");

    await page.getByRole("button", { name: /Request Next Step/i }).click();

    await expect(
      page.getByRole("heading", { name: /facility packet request is in/i })
    ).toBeVisible();

    await expect.poll(() => readJsonLines(facilityLeadsFile).length).toBe(1);

    const [lead] = readJsonLines(facilityLeadsFile);
    expect(lead?.leadLane).toBe("facility");
    expect(lead?.requestPath).toBe("facility");
    expect(lead?.pipelineStage).toBe("facility-packet-follow-up");
    expect(lead?.sourcePage).toContain("/facility-onboarding-packet");
    expect(lead?.firstTouchPage).toContain("/facility-onboarding-packet");
  });
});

test("lead center shows concierge and facility leads in one operational dashboard", async ({
  page,
  request,
}) => {
  clearSubmissionArtifacts();

  await request.post("/api/contact", {
    data: {
      name: "Jordan Dashboard",
      email: "jordan-dashboard@example.com",
      phone: "(702) 555-1001",
      path: "patient",
      intent: "appointment",
      service: "mobile-fees",
      city: "Las Vegas",
      timeframe: "this-week",
      referralStatus: "have-order",
      payerPath: "self-pay",
      portalSource: "concierge-patient-portal",
      sourcePage: "/concierge-patient-portal",
      firstTouchPage: "/concierge-patient-portal",
      bestContactTime: "morning",
      contactRole: "family-caregiver",
      message: "Dashboard patient lead",
    },
  });

  await request.post("/api/contact", {
    data: {
      name: "Alex Dashboard",
      email: "alex-dashboard@example.com",
      phone: "(702) 555-1002",
      path: "facility",
      intent: "packet",
      service: "workflow-consult",
      facilityName: "Sunrise Rehab",
      careSetting: "snf",
      timeframe: "this-month",
      payerPath: "facility-paid",
      monthlyVolume: "3-5",
      portalSource: "facility-onboarding-packet",
      sourcePage: "/facility-onboarding-packet",
      firstTouchPage: "/facility-onboarding-packet",
      bestContactTime: "afternoon",
      contactRole: "rehab-slp",
      message: "Dashboard facility lead",
    },
  });

  await page.goto("/lead-center");

  await expect(
    page.getByRole("heading", { name: "Lead Center", exact: true })
  ).toBeVisible();
  await expect(page.getByText("Jordan Dashboard")).toBeVisible();
  await expect(page.getByText("Alex Dashboard")).toBeVisible();
  await expect(page.getByText("Local dev access")).toBeVisible();
  await expect(page.getByText("/concierge-patient-portal").first()).toBeVisible();
  await expect(page.getByText("/facility-onboarding-packet").first()).toBeVisible();
});

test("fillable intake form persists locally through reload", async ({ page }) => {
  await page.goto("/intake");

  await page.getByLabel(/Patient Name/i).fill("Local Draft Test");
  await page.reload();

  await expect(page.getByLabel(/Patient Name/i)).toHaveValue("Local Draft Test");
});

test("concierge patient portal routes into the patient funnel", async ({
  page,
}) => {
  await page.goto("/concierge-patient-portal");

  await expect(
    page.getByRole("heading", {
      name: "Concierge Patient Portal",
      exact: true,
    })
  ).toBeVisible();

  await page.getByRole("link", { name: /Start Patient Request/i }).click();

  await expect(page).toHaveURL(/\/contact\?path=patient&intent=appointment/);
  await expect(
    page.getByRole("heading", { name: /Request a Consult or Appointment/i })
  ).toBeVisible();
});

test("facility portal routes into the facility funnel", async ({ page }) => {
  await page.goto("/facility-portal");

  await expect(
    page.getByRole("heading", {
      name: "Facility Portal",
      exact: true,
    })
  ).toBeVisible();

  await page.getByRole("link", { name: /Start Facility Request/i }).click();

  await expect(page).toHaveURL(/\/contact\?path=facility&intent=consult/);
  await expect(
    page.getByRole("heading", { name: /Request a Consult or Appointment/i })
  ).toBeVisible();
});

test("facility onboarding packet page routes into the facility packet funnel", async ({
  page,
}) => {
  await page.goto("/facility-onboarding-packet");

  await expect(
    page.getByRole("heading", {
      name: "Facility Onboarding Packet",
      exact: true,
    })
  ).toBeVisible();

  await page
    .getByRole("link", { name: /Request Packet Follow-Up/i })
    .click();

  await expect(page).toHaveURL(/\/contact\?path=facility&intent=packet/);
  await expect(
    page.getByRole("heading", { name: /Request a Consult or Appointment/i })
  ).toBeVisible();
});

test("skilled nursing facility page routes into the facility funnel", async ({
  page,
}) => {
  await page.goto("/skilled-nursing-facility-fees-las-vegas");

  await expect(
    page.getByRole("heading", {
      name: "Skilled Nursing Facility FEES in Las Vegas",
      exact: true,
    })
  ).toBeVisible();

  await page.getByRole("link", { name: /Request Facility Consult/i }).click();

  await expect(page).toHaveURL(/\/contact\?path=facility&intent=consult/);
  await expect(
    page.getByRole("heading", { name: /Request a Consult or Appointment/i })
  ).toBeVisible();
});

test("assisted living page routes into the facility funnel", async ({
  page,
}) => {
  await page.goto("/assisted-living-fees-las-vegas");

  await expect(
    page.getByRole("heading", {
      name: "Assisted Living FEES in Las Vegas",
      exact: true,
    })
  ).toBeVisible();

  await page.getByRole("link", { name: /Request Facility Consult/i }).click();

  await expect(page).toHaveURL(/\/contact\?path=facility&intent=consult/);
  await expect(
    page.getByRole("heading", { name: /Request a Consult or Appointment/i })
  ).toBeVisible();
});

test("physician referral page routes into the facility funnel", async ({
  page,
}) => {
  await page.goto("/physician-referral-fees-las-vegas");

  await expect(
    page.getByRole("heading", {
      name: "Physician Referral FEES in Las Vegas",
      exact: true,
    })
  ).toBeVisible();

  await page.getByRole("link", { name: /Request Referral Consult/i }).click();

  await expect(page).toHaveURL(/\/contact\?path=facility&intent=consult/);
  await expect(
    page.getByRole("heading", { name: /Request a Consult or Appointment/i })
  ).toBeVisible();
});

test("bedside swallow study landing page routes into the patient funnel", async ({
  page,
}) => {
  await page.goto("/bedside-swallow-study-las-vegas");

  await expect(
    page.getByRole("heading", {
      name: "Bedside Swallow Study in Las Vegas",
      exact: true,
    })
  ).toBeVisible();

  await page.getByRole("link", { name: /Request Bedside Appointment/i }).click();

  await expect(page).toHaveURL(/\/contact\?path=patient&intent=appointment/);
  await expect(
    page.getByRole("heading", { name: /Request a Consult or Appointment/i })
  ).toBeVisible();
});

test("at-home swallow evaluation landing page routes into the estimate funnel", async ({
  page,
}) => {
  await page.goto("/at-home-swallow-evaluation-las-vegas");

  await expect(
    page.getByRole("heading", { name: /At-Home Swallow Evaluation in Las Vegas/i })
  ).toBeVisible();

  await page.getByRole("link", { name: /Request Estimate/i }).click();

  await expect(page).toHaveURL(/\/contact\?path=patient&intent=estimate/);
  await expect(
    page.getByRole("heading", { name: /Request a Consult or Appointment/i })
  ).toBeVisible();
});

test("coughing during meals landing page routes into the patient funnel", async ({
  page,
}) => {
  await page.goto("/coughing-during-meals-las-vegas");

  await expect(
    page.getByRole("heading", {
      name: "Coughing During Meals in Las Vegas",
      exact: true,
    })
  ).toBeVisible();

  await page.getByRole("link", { name: /Request Swallow Evaluation/i }).click();

  await expect(page).toHaveURL(/\/contact\?path=patient&intent=appointment/);
  await expect(
    page.getByRole("heading", { name: /Request a Consult or Appointment/i })
  ).toBeVisible();
});

test("aspiration concern landing page routes into the patient funnel", async ({
  page,
}) => {
  await page.goto("/aspiration-concern-las-vegas");

  await expect(
    page.getByRole("heading", {
      name: "Aspiration Concern in Las Vegas",
      exact: true,
    })
  ).toBeVisible();

  await page.getByRole("link", { name: /Request Evaluation/i }).click();

  await expect(page).toHaveURL(/\/contact\?path=patient&intent=appointment/);
  await expect(
    page.getByRole("heading", { name: /Request a Consult or Appointment/i })
  ).toBeVisible();
});

test("stroke swallowing page routes into the patient funnel", async ({
  page,
}) => {
  await page.goto("/stroke-swallow-evaluation-las-vegas");

  await expect(
    page.getByRole("heading", {
      name: "Stroke Swallow Evaluation in Las Vegas",
      exact: true,
    })
  ).toBeVisible();

  await page.getByRole("link", { name: /Request Evaluation/i }).click();

  await expect(page).toHaveURL(/\/contact\?path=patient&intent=appointment/);
  await expect(
    page.getByRole("heading", { name: /Request a Consult or Appointment/i })
  ).toBeVisible();
});

test("parkinson's swallowing page routes into the patient funnel", async ({
  page,
}) => {
  await page.goto("/parkinsons-swallowing-evaluation-las-vegas");

  await expect(
    page.getByRole("heading", {
      name: "Parkinson's Swallowing Evaluation in Las Vegas",
      exact: true,
    })
  ).toBeVisible();

  await page.getByRole("link", { name: /Request Evaluation/i }).click();

  await expect(page).toHaveURL(/\/contact\?path=patient&intent=appointment/);
  await expect(
    page.getByRole("heading", { name: /Request a Consult or Appointment/i })
  ).toBeVisible();
});

test("recurrent pneumonia page routes into the patient funnel", async ({
  page,
}) => {
  await page.goto("/recurrent-pneumonia-swallow-evaluation-las-vegas");

  await expect(
    page.getByRole("heading", {
      name: "Recurrent Pneumonia Swallow Evaluation in Las Vegas",
      exact: true,
    })
  ).toBeVisible();

  await page.getByRole("link", { name: /Request Evaluation/i }).click();

  await expect(page).toHaveURL(/\/contact\?path=patient&intent=appointment/);
  await expect(
    page.getByRole("heading", { name: /Request a Consult or Appointment/i })
  ).toBeVisible();
});

test("difficulty swallowing pills page routes into the patient funnel", async ({
  page,
}) => {
  await page.goto("/difficulty-swallowing-pills-las-vegas");

  await expect(
    page.getByRole("heading", {
      name: "Difficulty Swallowing Pills in Las Vegas",
      exact: true,
    })
  ).toBeVisible();

  await page.getByRole("link", { name: /Request Evaluation/i }).click();

  await expect(page).toHaveURL(/\/contact\?path=patient&intent=appointment/);
  await expect(
    page.getByRole("heading", { name: /Request a Consult or Appointment/i })
  ).toBeVisible();
});

test("homebound swallow evaluation page routes into the patient funnel", async ({
  page,
}) => {
  await page.goto("/homebound-swallow-evaluation-las-vegas");

  await expect(
    page.getByRole("heading", {
      name: "Homebound Swallow Evaluation in Las Vegas",
      exact: true,
    })
  ).toBeVisible();

  await page
    .getByRole("link", { name: /Request Homebound Evaluation/i })
    .click();

  await expect(page).toHaveURL(/\/contact\?path=patient&intent=appointment/);
  await expect(
    page.getByRole("heading", { name: /Request a Consult or Appointment/i })
  ).toBeVisible();
});

test("wet voice page routes into the patient funnel", async ({ page }) => {
  await page.goto("/wet-voice-after-swallowing-las-vegas");

  await expect(
    page.getByRole("heading", {
      name: "Wet Voice After Swallowing in Las Vegas",
      exact: true,
    })
  ).toBeVisible();

  await page.getByRole("link", { name: /Request Evaluation/i }).click();

  await expect(page).toHaveURL(/\/contact\?path=patient&intent=appointment/);
  await expect(
    page.getByRole("heading", { name: /Request a Consult or Appointment/i })
  ).toBeVisible();
});

test("dementia swallowing page routes into the patient funnel", async ({
  page,
}) => {
  await page.goto("/dementia-swallowing-evaluation-las-vegas");

  await expect(
    page.getByRole("heading", {
      name: "Dementia Swallowing Evaluation in Las Vegas",
      exact: true,
    })
  ).toBeVisible();

  await page.getByRole("link", { name: /Request Evaluation/i }).click();

  await expect(page).toHaveURL(/\/contact\?path=patient&intent=appointment/);
  await expect(
    page.getByRole("heading", { name: /Request a Consult or Appointment/i })
  ).toBeVisible();
});

test("fees vs mbss after stroke page routes into the patient funnel", async ({
  page,
}) => {
  await page.goto("/fees-vs-mbss-after-stroke-las-vegas");

  await expect(
    page.getByRole("heading", {
      name: "FEES vs MBSS After Stroke in Las Vegas",
      exact: true,
    })
  ).toBeVisible();

  await page.getByRole("link", { name: /Request Evaluation/i }).click();

  await expect(page).toHaveURL(/\/contact\?path=patient&intent=appointment/);
  await expect(
    page.getByRole("heading", { name: /Request a Consult or Appointment/i })
  ).toBeVisible();
});
