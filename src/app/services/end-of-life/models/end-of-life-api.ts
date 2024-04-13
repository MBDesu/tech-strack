export interface EndOfLifeDetails {
  cycle: number | string;
  codename?: string;
  releaseDate: string;
  latestReleaseDate?: string;
  eol: string | boolean;
  latest: string;
  link: string | null;
  lts: boolean | string;
  support: string | boolean;
  discontinued: string | boolean;
  extendedSupport?: string | boolean;
  supportedJavaVersions?: string;
  supportedJakartaEEVersions?: string;
}
