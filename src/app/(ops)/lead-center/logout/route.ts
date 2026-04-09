import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { leadCenterCookieName } from "@/lib/lead-center";

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.delete(leadCenterCookieName);
  redirect("/lead-center");
}
