"use client";

import { RedirectType, redirect, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export interface ISearchValueContext {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchValueContext = createContext<ISearchValueContext | null>(
  null
);

export default function SearchValueContextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [value, setValue] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!value) return;
    if (pathname === "/tours") return;
    router.replace("/tours");
  }, [value]);

  return (
    <SearchValueContext.Provider value={{ value, setValue }}>
      {children}
    </SearchValueContext.Provider>
  );
}
