export type ObjOrPromise<T> = T | Promise<T>;

export interface Hooks {
    "before:aws:deploy:deploy:updateStack"?: () => ObjOrPromise<void>;
    "after:aws:deploy:deploy:updateStack"?: () => ObjOrPromise<void>;
}

export interface ServerlessPlugin {
    hooks: Hooks;
}

export default ServerlessPlugin;