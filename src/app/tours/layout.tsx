"use client";

import Header from "@/components/molecules/Header";
import SearchValueContextWrapper from "@/contexts/SearchValue.context";
import ToursContextWrapper from "@/contexts/Tours.context";

import React from "react";

export default function TourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToursContextWrapper>
      <SearchValueContextWrapper>
        <Header />
        {children}
      </SearchValueContextWrapper>
    </ToursContextWrapper>
  );
}
