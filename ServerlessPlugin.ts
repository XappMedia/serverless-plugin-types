export type ObjOrPromise<T> = T | Promise<T>;

export interface Hooks {
    "before:aws:deploy:deploy:createStack"?: () => ObjOrPromise<any>;
    "before:aws:deploy:deploy:updateStack"?: () => ObjOrPromise<any>;
    "after:aws:deploy:deploy:updateStack"?: () => ObjOrPromise<any>;
}

export interface ServerlessPlugin {
    hooks: Hooks;
}

export default ServerlessPlugin;