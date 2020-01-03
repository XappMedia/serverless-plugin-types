import { StringOrObject } from "./StringOrObject";

/**
 * Environment variables assigned to a function. They can
 * either be a string or a CloudFormation function used to
 * retrieve the value.
 *
 * @export
 * @interface Environment
 */
export interface Environment {
    [key: string]: StringOrObject;
}