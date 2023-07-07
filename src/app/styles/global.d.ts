type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

type ValueOf<T> = T[keyof T];

type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
