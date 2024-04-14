export interface EndOfLifeDetails {
  androidVersion?: number | string;
  ansibleCoreVersion?: string;
  cycle: number | string;
  codename?: string;
  discontinued?: string | boolean;
  eol: string | boolean;
  extendedSupport?: string | boolean;
  jspVersion?: number | string;
  latest: string;
  latestReleaseDate?: string;
  link: string | null;
  lts: boolean | string;
  maxAngularVersion?: string;
  minAngularVersion?: string;
  minJavaVersion?: string;
  minJvmVersion?: number | string;
  powershellVersionsManagedNode?: string;
  pythonVersion?: string;
  pythonVersionsControlNode?: string;
  pythonVersionsManagedNode?: string;
  releaseDate: string;
  servletVersion?: number | string;
  sparkVersion?: string;
  support: string | boolean;
  supportedAndroidVersions?: number | string;
  supportedDrupalVersions?: number | string;
  supportedJavaVersions?: number | string;
  supportedJakartaEEVersions?: number | string;
  supportedIosVersions?: number | string;
  supportedPhpVersions?: number | string;
  supportedPythonVersions?: number | string;
  supportedReactVersions?: number | string;
  supportedVueVersions?: number | string;
  upgradeVersion?: number | string;
  // "minJvmVersion": 17,
  //   "servletVersion": "3.1 - 6.0",
  //   "jspVersion": "2.3 - 3.1",
}
