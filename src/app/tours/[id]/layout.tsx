import { Container } from "@mui/material";

export default function TourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container maxWidth={"md"}>{children}</Container>;
}
