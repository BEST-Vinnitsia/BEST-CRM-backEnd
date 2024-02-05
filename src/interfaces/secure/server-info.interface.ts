export interface IServerInfo {
  name: string;
  version: string;
  
  api: {
    lastVersion: string;
    supportedVersion: string[];
  };

  documentation: {
    database: string;
    api: {
      v1: string;
    };
  };

  developers: {
    backEnd: string[];
    frontEnd: string[];
    designer: string[];
  };
}
