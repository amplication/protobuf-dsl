
export type BaseField = {
  name: string;
  isList: boolean;
  kind: string;
};

export type ScalarField = BaseField & {
  type: string;
  locNumber: number;
};

export type ObjectField = BaseField & {
  type: string;
  locNumber: number;
};

export type Message = {
  name: string;
  fields: Array<ScalarField | ObjectField>;
};

export type Schema = {
  name: string;
  service: Service;
  messages: Message[];
};

export type Service = {
  name: string;
  methods: Method[];
};

export type Method = {
  name: string;
  inputObjectName: string;
  outputObjectName: string;
};
