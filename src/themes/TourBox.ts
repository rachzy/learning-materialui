import { createTheme } from "@mui/material";

export const TourBoxTheme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "h6",
          },
          style: {
            fontWeight: "bold",
          },
        },
      ],
    },
  },
});
