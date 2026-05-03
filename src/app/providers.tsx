"use client";

import type { ReactNode } from "react";

import { I18nProvider } from "@/providers/I18nProvider";

export function Providers({ children }: { children: ReactNode }) {
  return <I18nProvider>{children}</I18nProvider>;
}
