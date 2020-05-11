## Deprecated 

Do not use.  Use @types/serverless instead.

# serverless-plugin-type-definitions

Typescript definitions that can be used to make Serverless Plugins. Simply import this project and
go.

This is so far incomplete and will be added upon as needed. PRs welcome.

# Install

```
npm install --save-dev @xapp/serverless-plugin-type-definitions
```

# Usage

In your Plugin file, simply import it like so:

MyPlugin.ts
```
import { Hooks, Serverless, ServerlessPlugin } from "@xapp/serverless-plugin-types"

class MyServerlessPlugin extends Plugin {

    private serverless: Serverless;
    hooks: Hooks;

    constructor(serverless: Serverless) {
        this.serverless = serverless;

        this.hooks = {
            "before:aws:deploy:deploy:createStack": this.doSomething.bind(this),
        }
    }

    doSomething() {
        this.serverless.cli.log("Hello from the plugin!");
    }
}
```
