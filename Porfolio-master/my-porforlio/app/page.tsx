"use client";

import React, { Suspense, lazy } from "react";
import { NavbarDemo } from "../components/navbar-menu";

// Lazy loading des composants lourds avec prefetch
const AuroraBackgroundDemo = lazy(() => import("../components/arrire-plant").then(mod => ({ default: mod.AuroraBackgroundDemo })));
const Marquee = lazy(() => import("../components/marquee"));

export default function Home() {
  return (
    <div>
      <Suspense fallback={null}>
        <AuroraBackgroundDemo />
      </Suspense>
      <NavbarDemo />
      <Suspense fallback={null}>
        <Marquee />
      </Suspense>
    </div>
  );
}
