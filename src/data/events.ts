// src/data/events.ts
export type EventType = {
  id: string;
  title: string;
  date: string;
  summary: string;
  details: string;
  image?: string;
  location?: string
};

export const EVENTS: EventType[] = [
  {
    id: "cleanup",
    title: "DTLB Community Cleanup",
    date: "March 17, 2025",
    summary: "Join neighbors for a waterfront cleanup.",
    details:
      "Come together with fellow DTLB residents for a community cleanup along the waterfront. Supplies will be provided."
  }
];
