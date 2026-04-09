"use client";

import { useLayoutEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export const routeTrackerKeys = {
  current: "mf-current-route",
  previous: "mf-previous-route",
  firstTouch: "mf-first-touch-route",
} as const;

export function RouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.toString();

  useLayoutEffect(() => {
    const route = query ? `${pathname}?${query}` : pathname;
    const currentRoute = window.sessionStorage.getItem(routeTrackerKeys.current);
    const firstTouchRoute = window.sessionStorage.getItem(
      routeTrackerKeys.firstTouch
    );

    if (!firstTouchRoute) {
      window.sessionStorage.setItem(routeTrackerKeys.firstTouch, route);
    }

    if (currentRoute && currentRoute !== route) {
      window.sessionStorage.setItem(routeTrackerKeys.previous, currentRoute);
    }

    window.sessionStorage.setItem(routeTrackerKeys.current, route);
  }, [pathname, query]);

  return null;
}
