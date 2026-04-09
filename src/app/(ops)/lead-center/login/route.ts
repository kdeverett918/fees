import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  getLeadCenterCookieValue,
  hasLeadCenterPassword,
  isLeadCenterLocalMode,
  leadCenterCookieName,
  verifyLeadCenterPassword,
} from "@/lib/lead-center";

export async function POST(request: Request) {
  const formData = await request.formData();
  const password = String(formData.get("password") ?? "");

  if (isLeadCenterLocalMode()) {
    redirect("/lead-center");
  }

  if (!hasLeadCenterPassword()) {
    redirect("/lead-center?setup=1");
  }

  if (!verifyLeadCenterPassword(password)) {
    redirect("/lead-center?error=invalid");
  }

  const cookieStore = await cookies();
  cookieStore.set(leadCenterCookieName, getLeadCenterCookieValue(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/lead-center",
    maxAge: 60 * 60 * 10,
  });

  redirect("/lead-center");
}
