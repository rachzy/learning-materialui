"use client";

import TourSearch from "@/components/organisms/TourSearch";
import TourSet from "@/components/organisms/TourSet";
import {
  ISearchValueContext,
  SearchValueContext,
} from "@/contexts/SearchValue.context";
import { TourContext } from "@/contexts/Tours.context";
import { ITour } from "@/interfaces/Tour";
import { ITourSet } from "@/interfaces/TourSet";
import { Box, Container } from "@mui/material";
import { useContext } from "react";

export default function HomeTemplate() {
  const tourSets = useContext(TourContext) as ITourSet[];

  const { value } = useContext(SearchValueContext) as ISearchValueContext;

  function renderTourSets(): JSX.Element[] {
    return tourSets.map((tourSet) => {
      return <TourSet key={tourSet.id} tourSet={tourSet} />;
    });
  }

  function renderToursBySearchValue(): JSX.Element {
    const tours: ITour[] = [];
    tourSets.forEach((tourSet) => {
      tourSet.tours.forEach(
        (tour) =>
          tour.name.toUpperCase().includes(value.toUpperCase()) &&
          tours.push(tour)
      );
    });
    return <TourSearch tours={tours} searchValue={value} />;
  }

  function renderTourValues(): React.ReactNode {
    if (value) {
      return renderToursBySearchValue();
    }
    return renderTourSets();
  }

  return (
    <Container>
      <Box marginY={10}>{renderTourValues()}</Box>
    </Container>
  );
}
