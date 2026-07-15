// next/image's `src` isn't auto-prefixed with basePath when images are
// unoptimized (required for output: "export"), so public-folder image
// paths need this prepended manually. Keep in sync with next.config.ts.
export const BASE_PATH = process.env.GITHUB_PAGES === 'true' ? '/stracks-redesign' : '';
