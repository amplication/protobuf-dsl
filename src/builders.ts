import {
  Message,
  Method,
  ObjectField,
  ScalarField,
  Schema,
  Service,
} from "./protobuf-dsl-types";

/** Creates a schema  object */
export function createSchema(
  name: string,
  service: Service,
  messages: Message[]
): Schema {
  return {
    name,
    service,
    messages,
  };
}

/** Creates a service object */
export function createService(name: string, methods: Method[]): Service {
  return {
    name,
    methods,
  };
}

/**
 * Creates a method object
 */
export function createMethod(
  name: string,
  inputObjectName: string,
  outputObjectName: string
): Method {
  return {
    name,
    inputObjectName,
    outputObjectName,
  };
}

/**
 * Creates a scalar field object
 */
export function createScalarField(
  name: string,
  type: string,
  locNumber: number,
  isList: boolean
): ScalarField {
  return {
    name,
    type,
    kind: "scalar",
    locNumber,
    isList,
  };
}

/**
 * Creates an object field object
 */
export function createObjectField(
  name: string,
  type: string,
  locNumber: number,
  isList: boolean
): ObjectField {
  return {
    name,
    type,
    kind: "object",
    locNumber,
    isList,
  };
}

/** Creates a message object */
export function createMessage(
  name: string,
  fields: Array<ScalarField | ObjectField>
): Message {
  return {
    name,
    fields,
  };
}
