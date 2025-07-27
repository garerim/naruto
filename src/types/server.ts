export interface ServerInfo {
  ip: string;
  port: number;
  debug: {
    ping: boolean;
    query: boolean;
    bedrock: boolean;
    srv: boolean;
    querymismatch: boolean;
    ipinsrv: boolean;
    cnameinsrv: boolean;
    animatedmotd: boolean;
    cachehit: boolean;
    cachetime: number;
    cacheexpire: number;
    apiversion: number;
    dns: {
      srv: Array<{
        name: string;
        type: string;
        class: string;
        ttl: number;
        rdlength: number;
        rdata: string;
        priority: number;
        weight: number;
        port: number;
        target: string;
        typecovered?: string;
        algorithm?: number;
        labels?: number;
        origttl?: number;
        sigexp?: string;
        sigincep?: string;
        keytag?: number;
        signname?: string;
        signature?: string;
      }>;
      srv_a: Array<{
        name: string;
        type: string;
        class: string;
        ttl: number;
        rdlength: number;
        rdata: string;
        address?: string;
        typecovered?: string;
        algorithm?: number;
        labels?: number;
        origttl?: number;
        sigexp?: string;
        sigincep?: string;
        keytag?: number;
        signname?: string;
        signature?: string;
      }>;
    };
    error?: {
      query: string;
    };
  };
  motd: {
    raw: string[];
    clean: string[];
    html: string[];
  };
  players: {
    online: number;
    max: number;
    list: Array<{
      name: string;
      uuid: string;
    }>;
  };
  version: string;
  online: boolean;
  protocol: {
    version: number;
    name: string;
  };
  hostname: string;
  icon: string;
  software: string;
  eula_blocked: boolean;
} 