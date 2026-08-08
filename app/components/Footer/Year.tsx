'use client';

import { useClientValue } from '../../useClientValue';

// What the static HTML ships with, and so what hydration matches against. It
// has to be a literal: computing it at module scope would evaluate to the
// browser's year on the client and mismatch the prerendered markup.
const BUILD_YEAR = 2026;

// Renders the build-time year on the server, then corrects to the visitor's
// current year after hydration — avoids a stale year on a static build
export default function Year() {
  const year = useClientValue(() => new Date().getFullYear(), BUILD_YEAR);

  return <>{year}</>;
}
