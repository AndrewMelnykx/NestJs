import { ValidationOptions } from 'class-validator';

export function StartsWith(
  prefix: string,
  validationOptions?: ValidationOptions,
) {
  return (object: Object, propertyName: string) => {};
}
