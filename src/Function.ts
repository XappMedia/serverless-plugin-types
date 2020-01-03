import { Environment } from "./Environment";
import { Package } from "./Package";

/**
 * Details of a lambda function.
 */
export interface Function {
    handler: string;
    environment?: Environment;
    name?: string;
    description?: string;
    runtime?: string;
    memorySize?: number;
    timeout?: number;
    provisionedConcurrency?: number;
    reservedConcurrency?: number;
    tracing?: string;
    package?: Package;
    [key: string]: any;
}