"use client";

import {
  Box,
  Grid,
  Paper,
  Rating,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import { TourBoxTheme } from "@/themes/TourBox";
import { ITour } from "@/interfaces/Tour";
import Banner from "@/components/atoms/Banner";
import Link from "next/link";

export default function TourBox({ tour }: { tour: ITour }) {
  const { id, name, duration, rating, numberOfReviews, price, image } = tour;
  return (
    <Grid item xs={12} sm={6} md={3}>
      <ThemeProvider theme={TourBoxTheme}>
        <Paper elevation={4}>
          <Banner src={image} alt={name} />
          <Box paddingX={1}>
            <Link href={`/tours/${id}`}>
              <Typography variant="subtitle1" component="h2">
                {name}
              </Typography>
            </Link>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTime sx={{ width: 12 }} />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {duration} hours
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }} marginTop={3}>
              <Rating value={rating} precision={0.5} size={"small"} readOnly />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {rating}
              </Typography>
              <Typography variant="body2" component="p" marginLeft={1.5}>
                ({numberOfReviews} reviews)
              </Typography>
            </Box>
            <Typography variant="h6" component="h3">
              US$ {price}
            </Typography>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
}
