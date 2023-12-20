import { ITourSet } from "@/interfaces/TourSet";
import React, { createContext } from "react";

import tourSets from "../data/tourSets.json";

export const TourContext = createContext<null | ITourSet[]>(null);

export default function ToursContextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TourContext.Provider value={tourSets}>{children}</TourContext.Provider>
  );
}
