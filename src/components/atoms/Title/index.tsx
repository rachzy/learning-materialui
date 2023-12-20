"use client";

import { Typography } from "@mui/material";

export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <Typography variant="h4" component="h1" sx={{ marginY: 3 }}>
      {children}
    </Typography>
  );
}
