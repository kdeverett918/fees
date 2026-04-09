"use client";

import { createContext, useContext, useState, useCallback } from "react";
import type { VisitorRole } from "@/types";

const STORAGE_KEY = "fees-audience";

interface AudienceContextValue {
  audience: VisitorRole | null;
  setAudience: (role: VisitorRole) => void;
}

const AudienceContext = createContext<AudienceContextValue | undefined>(undefined);

export function AudienceProvider({ children }: { children: React.ReactNode }) {
  const [audience, setAudienceState] = useState<VisitorRole | null>(() => {
    if (typeof window === "undefined") {
      return null;
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "facility" || stored === "patient" ? stored : null;
  });

  const setAudience = useCallback((role: VisitorRole) => {
    setAudienceState(role);
    window.localStorage.setItem(STORAGE_KEY, role);
  }, []);

  return (
    <AudienceContext.Provider value={{ audience, setAudience }}>
      {children}
    </AudienceContext.Provider>
  );
}

export function useAudience() {
  const context = useContext(AudienceContext);
  if (!context) {
    throw new Error("useAudience must be used within AudienceProvider");
  }
  return context;
}
