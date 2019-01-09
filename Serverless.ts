export interface ServerlessProvider {
    region?: string;
    profile?: string;
}

/**
 * CLI object that allows logging to the Serverless console.
 */
export interface CLI {
    log(msg: string): void;
}

export interface ServerlessService<Custom> {
    provider?: ServerlessProvider;
    custom?: Custom;
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