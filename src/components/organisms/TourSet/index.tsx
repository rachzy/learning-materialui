"use client";

import Title from "@/components/atoms/Title";
import TourBox from "@/components/molecules/TourBox";
import { ITourSet } from "@/interfaces/TourSet";
import { Box, Grid } from "@mui/material";

export default function TourSet({ tourSet }: { tourSet: ITourSet }) {
  const { name, tours } = tourSet;

  function renderTours(): JSX.Element[] {
    return tours.map((tour) => {
      return <TourBox key={tour.id} tour={tour} />;
    });
  }

  return (
    <Box marginBottom={10}>
      <Title>Top {name} Tours</Title>
      <Grid container spacing={4} flexWrap={"wrap"}>
        {renderTours()}
      </Grid>
    </Box>
  );
}
