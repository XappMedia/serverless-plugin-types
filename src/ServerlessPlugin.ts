export type ObjOrPromise<T> = T | Promise<T>;

export type Hook =
    "before:aws:common:validate:validate" |
    "after:aws:common:validate:validate" |
    "before:package:compileFunctions" |
    "after:package:compileFunctions" |
    "before:aws:deploy:deploy:createStack" |
    "after:aws:deploy:deploy:createStack" |
    "before:aws:deploy:deploy:updateStack" |
    "after:aws:deploy:deploy:updateStack";

export type Hooks = Record<Hook, ObjOrPromise<any>>;

export interface ServerlessPlugin {
    hooks: Hooks;
}

export default ServerlessPlugin;