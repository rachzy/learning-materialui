"use client";

import Banner from "@/components/atoms/Banner";
import Title from "@/components/atoms/Title";
import { TourContext } from "@/contexts/Tours.context";
import { ITour } from "@/interfaces/Tour";
import { ITourSet } from "@/interfaces/TourSet";
import { AccessTime } from "@mui/icons-material";
import { Box, Grid, Rating, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";

export default function Tour({ params }: { params: { id: string } }) {
  const { id } = params;
  const tourSets = useContext(TourContext) as ITourSet[];

  let [tour, setTour] = useState<ITour>();

  useEffect(() => {
    if (!id || !tourSets) return;

    tourSets.every((tourSet) => {
      const filteredTour = tourSet.tours.filter(
        (inTour) => inTour.id.toString() === id
      );
      if (!filteredTour || !filteredTour[0]) return true;

      setTour(filteredTour[0]);
      return false;
    });
  }, [id, tourSets]);

  if (!tour) {
    return <Title>404: Invalid Tour!</Title>;
  }

  const { name, image, rating, duration, numberOfReviews } = tour;

  return (
    <Box marginY={10}>
      <Title>{name}</Title>
      <Banner src={image} alt={name} maxHeight="15rem" />
      <Grid container rowGap={1}>
        <Grid item xs={12} sm={6} display={"flex"} alignItems={"center"}>
          <Rating readOnly value={rating} precision={0.5} />
          <Typography variant="subtitle2" component="h6">
            ({numberOfReviews} reviews)
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          display={"flex"}
          alignItems={"center"}
          columnGap={1}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              columnGap: 1,
              justifyContent: { xs: "flex-start", sm: "flex-end" },
            }}
          >
            <AccessTime sx={{ width: 20 }} />
            <Typography>{duration} hours</Typography>
          </Box>
        </Grid>
      </Grid>
      <Typography variant="h4" marginTop={4}>
        Description
      </Typography>
      <Typography component="p" marginTop={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus
        vel massa euismod tempor. Donec rhoncus, leo sit amet pellentesque
        vulputate, mauris elit molestie purus, et aliquet velit ipsum id ipsum.
        Mauris lacus odio, dignissim eu rutrum non, ultricies sit amet nibh.
        Nullam dignissim ex eu viverra rutrum. Donec bibendum iaculis elementum.
        Aenean et turpis molestie, pellentesque enim vitae, lacinia mauris. Sed
        sed justo iaculis, efficitur mauris et, molestie diam. Fusce mollis
        ipsum eget enim venenatis, ut tempus lorem rutrum. Duis sagittis est
        dignissim diam tincidunt, quis laoreet nisl lacinia. Quisque at erat
        sodales, convallis arcu non, consequat erat. Sed ut fermentum lorem.
        Morbi non dolor nulla. Nulla rutrum sed libero quis consectetur.
        Curabitur luctus risus vitae efficitur finibus. Duis non pulvinar odio.
        Sed consequat risus vitae quam consectetur aliquam. Maecenas blandit
        nulla eget volutpat fringilla. Nunc posuere tortor dui, ut fermentum
        massa sodales eu. Maecenas quis leo eget neque finibus eleifend id quis
        risus. Phasellus id placerat tortor. Praesent blandit quam et purus
        porttitor ultricies. Duis at dolor felis. Curabitur vel aliquam quam.
        Aenean vel ex ipsum. In tincidunt eros nec eros maximus, tincidunt
        sodales orci venenatis. Donec eget leo sed turpis tempor varius ut ac
        libero. Ut sed vestibulum velit. Praesent nec placerat augue. Phasellus
        blandit, ligula eu ultrices rutrum, velit augue viverra neque, ut
        commodo dolor lorem vel elit. Donec sit amet vehicula leo, id
        consectetur orci. In vestibulum lacus urna, non interdum nunc iaculis
        eget. Praesent tincidunt leo mollis varius aliquet. Mauris elementum mi
        in elit pretium semper. Sed tincidunt tempus est eu varius. Praesent at
        ex id sapien porttitor suscipit. Orci varius natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Nam non nulla sit amet
        nisi euismod aliquam.
      </Typography>
    </Box>
  );
}
