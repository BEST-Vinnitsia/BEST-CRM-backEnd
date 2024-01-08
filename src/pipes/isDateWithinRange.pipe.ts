import { ValidationOptions, registerDecorator, ValidationArguments } from 'class-validator';

export function IsDateWithinRange(minDate: Date, maxDate: Date, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isDateWithinRange',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [minDate, maxDate],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [min, max] = args.constraints;
          const valueConvert = new Date(value);
          if (!(valueConvert instanceof Date)) {
            return false;
          }
          return valueConvert >= min && valueConvert <= max;
        },
        defaultMessage(args: ValidationArguments) {
          const [min, max] = args.constraints;
          return `Date must be within the range ${min.toISOString()} to ${max.toISOString()}`;
        },
      },
    });
  };
}
