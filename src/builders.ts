import {
  Field,
  Message,
  Method,
  ScalarType,
  Schema,
  Service,
} from "protobuf-dsl-types";

/** Creates a schema  object */
export function createSchema(service: Service, messages: Message[]): Schema {
  return {
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
 * Creates an object field object
 */
export function createField(
  name: string,
  type: ScalarType,
  locNumber: number
): Field {
  return {
    name,
    type,
    locNumber,
  };
}

/** Creates a message object */
export function createMessage(name: string, fields: Field[]): Message {
  return {
    name,
    fields,
  };
}
