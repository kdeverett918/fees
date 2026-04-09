"use client";

import { useEffect, useState } from "react";

export function usePersistedForm<T>(storageKey: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) {
        setValue(JSON.parse(stored) as T);
      }
    } catch {
      // Ignore malformed local state and fall back to the default form.
    } finally {
      setHydrated(true);
    }
  }, [storageKey]);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    window.localStorage.setItem(storageKey, JSON.stringify(value));
  }, [hydrated, storageKey, value]);

  const reset = (nextValue: T) => {
    setValue(nextValue);
    window.localStorage.removeItem(storageKey);
  };

  return {
    hydrated,
    value,
    setValue,
    reset,
  };
}
