'use client';

import { useEffect, useState } from 'react';

// Renders the build-time year on the server, then corrects to the visitor's
// current year after hydration — avoids a stale year on a static build
export default function Year() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <>{year}</>;
}
