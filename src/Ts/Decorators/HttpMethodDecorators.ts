import { HttpMethodDefinition } from "../Models";

const httpMethodMetadataKey = Symbol("design:httpMethod");

export function httpMethod(definition: HttpMethodDefinition) {
  if (!definition.body) {
    definition.body = "json";
  }
  return Reflect.metadata(httpMethodMetadataKey, definition);
}

export function getMethodDefinition(
  target: any,
  propertyKey: string
): HttpMethodDefinition {
  return <HttpMethodDefinition>Reflect.getMetadata(
    httpMethodMetadataKey,
    target,
    propertyKey
  );
}
