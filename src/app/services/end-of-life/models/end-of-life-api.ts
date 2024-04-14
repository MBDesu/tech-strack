export interface EndOfLifeDetails {
  cycle: number | string;
  codename?: string;
  discontinued?: string | boolean;
  eol: string | boolean;
  latest: string;
  latestReleaseDate?: string;
  link: string | null;
  lts: boolean | string;
  maxAngularVersion?: string;
  minAngularVersion?: string;
  releaseDate: string;
  support: string | boolean;
  extendedSupport?: string | boolean;
  supportedAndroidVersions?: string;
  supportedJavaVersions?: string;
  supportedJakartaEEVersions?: string;
  supportedReactVersions?: string;
  supportedVueVersions?: string;
}
