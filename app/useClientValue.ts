'use client';

import { useSyncExternalStore } from 'react';

// These values are read once at hydration, not watched, so the store never
// notifies anyone. Defined at module scope: a new function identity on every
// render would make useSyncExternalStore resubscribe each time.
const noSubscribe = () => () => {};

/**
 * Reads a value only the browser can know — in practice, anything derived from
 * the current date, which a static export freezes at build time.
 *
 * The obvious way to write this is useState plus an effect that sets it on
 * mount, but that is a cascading render by definition and React's
 * set-state-in-effect rule rejects it. useSyncExternalStore says the same thing
 * declaratively: `serverValue` is what the prerendered HTML contains and what
 * hydration matches against, then React re-renders with `read()`.
 *
 * `read` must return a primitive (or a cached reference). React compares
 * snapshots with Object.is on every render, and a fresh object each call is an
 * infinite loop.
 */
export function useClientValue<T>(read: () => T, serverValue: T): T {
  return useSyncExternalStore(noSubscribe, read, () => serverValue);
}
