import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Patrick Sherlund | Portfolio",
  description: "Senior Software Engineer portfolio featuring professional projects and case studies.",
};

export default function Page() {
  return <HomePage />;
}
