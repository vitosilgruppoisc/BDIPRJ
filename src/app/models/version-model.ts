export interface IVersionBuild {
    timestamp: string,
    type: string
}

export interface IVersion {
  name: string;
  version: string;
  build: IVersionBuild;
}

export const DEFAULT_BUILD: IVersionBuild = {
  timestamp: '-',
  type: '-'
}

export const DEFAULT_VERSION: IVersion = {
  name: 'y',
  version: 'x',
  build: DEFAULT_BUILD
}