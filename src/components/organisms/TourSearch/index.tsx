"use client";

import Title from "@/components/atoms/Title";
import TourBox from "@/components/molecules/TourBox";
import { ITour } from "@/interfaces/Tour";
import { Grid } from "@mui/material";

export default function TourSearch({
  tours,
  searchValue,
}: {
  tours: ITour[];
  searchValue: string;
}) {
  function renderTours(): JSX.Element[] {
    return tours.map((tour) => {
      return <TourBox key={tour.id} tour={tour} />;
    });
  }

  return (
    <>
      <Title>Displaying results for: &quot;{searchValue}&quot;</Title>
      <Grid container spacing={4}>
        {renderTours()}
      </Grid>
    </>
  );
}
