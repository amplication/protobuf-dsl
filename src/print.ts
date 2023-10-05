import { Message, Method, Schema, Service } from "./protobuf-dsl-types";

export async function print(schema: Schema): Promise<string> {
  const statements = [];
  const head = `syntax = "proto3"\n;
                 package auth;`;
  statements.push(head);

  const service = printService(schema.service);

  statements.push(service);

  const messages = printMessages(schema.messages);

  statements.push(messages);

  return statements.join("\n");
}

export function printDocumentation(documentation: string): string {
  return `/// ${documentation}`;
}

export function printService(service: Service): string {
  const methodTexts = service.methods
    .map((method) => printMethod(method))
    .join("\n");

  return `service ${service.name} {\n ${methodTexts}}`;
}

function printMethod(method: Method): string {
  return `rcp ${method.name} (${method.inputObjectName}) returns (${method.outputObjectName}) {}`;
}

export function printMessages(messages: Message[]): string {
  const methodTexts = messages
    .map((message) => printMessage(message))
    .join("\n");

  return methodTexts;
}

function printMessage(message: Message): string {
  const fieldTexts = message.fields
    .map((field) => `${field.type} ${field.name} = ${field.locNumber};`)
    .join("\n");

  return `message ${message.name} {\n${fieldTexts}\n}`;
}
