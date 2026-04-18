import type { Metadata } from "next";
import { BishopPage } from "@/components/BishopPage";

export const metadata: Metadata = {
  title: "Bishop Case Study | Patrick Sherlund",
  description: "Bishop search and rescue video intelligence case study by Patrick Sherlund.",
};

export default function Page() {
  return <BishopPage />;
}
