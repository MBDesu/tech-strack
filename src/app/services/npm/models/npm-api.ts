// TODO: definition of objects; npm's documentation is woefully out of date

export interface NpmSearchRequest {
  text?: string;
  size?: number;
  from?: number;
  quality?: number;
  popularity?: number;
  maintenance?: number;
}

export interface NpmGetPackageRequest {
  package: string;
  version?: string;
}