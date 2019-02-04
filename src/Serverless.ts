export type StringOrObject = string | object;

/**
 * Attributes that can be used when importing
 * api gateway paths from other serverless.yml files.
 */
export interface ApiGatewayImports {
    restApiId: string | object;
    restApiRootResourceId: string | object;
    restApiResources: {
        [resourcePath: string]: string | object;
    };
}

/**
 * Attributes that are in the Serverless Provider section.
 */
export interface ServerlessProvider {
    name: string;
    runtime: string;
    versionFunctions?: boolean;
    memorySize?: number;
    endpointType?: string;
    stage?: string;
    region?: string;
    profile?: string;
    stackTags?: string[];
    environment?: string;
    timeout?: number;
    deploymentBucket: {
        name: string;
    };
    apiGateway?: ApiGatewayImports;
}

/**
 * CLI object that allows logging to the Serverless console.
 */
export interface CLI {
    log(msg: string): void;
}

/**
 * Details of a lambda function.
 */
export interface Function {
    [key: string]: any;
}

/**
 * Collection of lambda function declarations.
 */
export interface ServerlessFunctions {
    [name: string]: Function;
}

/**
 * Details of resources that are in the Serverless system.
 */
export interface Resource {
    [key: string]: any;
}

/**
 * Collection of resources.
 */
export interface Resources {
    [name: string]: Resource;
}

/**
 * The object that contains all the declarations in the serverless.yml file.
 */
export interface ServerlessService<Custom> {
    service: string;
    provider?: ServerlessProvider;
    custom?: Custom;
    functions?: ServerlessFunctions;
    resources?: Resources;
}

/**
 * The Serverless object that is injected in to the Serverless Plugin.
 */
export interface Serverless<Custom> {
    /**
     * The Service object which contains all the details described
     * in the serverless.yml file.
     *
     * Custom: This is a "Custom" object which holds parameters for a plugin
     * to use.  It is typically an object. For example:
     *
     * serverless.yml
     * ```
     * custom:
     *    MyCustomParameters:
     *       param1: Value1
     *       param2: Value2
     * ```
     *
     * This can be retrieved in the plugin like so:
     *
     * const param1 = serverless.service.custom.param1;
     * const param2 = serverless.service.custom.param2;
     */
    service: ServerlessService<Custom>;
    /**
     * The CLI object which allows logging to the console.
     */
    cli: CLI;
}

export default Serverless;