# Near RoC Components

This is a repository that holds the source code of all React on Chain components that the team maintains for near.org.

When the `main` branch is updated, all components are automatically published to the `near` account under the Social DB `component_alpha` namespace. You can view your RoC component in production by visiting `https://roc.near.dev/{accountId}/{componentName}`. EG: https://roc.near.dev/near/RocTest

These components are currently NOT visible on our NEAR Discovery gateway: https://near.org

## Local Development

**1.** Make sure you have the latest version of [bos-loader](https://github.com/near/bos-loader/releases) installed.

**2.** Clone the RoC gateway project and get it up and running locally:

```bash
cd ~/wherever
git clone git@github.com:near/bos-web-engine.git
cd bos-web-engine/apps/web
pnpm i
pnpm dev
```

This should result in your local gateway running at `localhost:3000`.

**3.** Clone the components project and get it up and running locally:

```bash
cd ~/wherever
git git@github.com:near/near-roc-components.git
cd near-roc-components
pnpm i
pnpm dev
```

This will kick off a [bos-loader](https://github.com/near/bos-loader) command to serve components locally for the official `near` account.

**4.** Open up the local gateway in your browser: `localhost:3000`. In the bottom right of your screen, click on the `Dev Tools` tab to expand the drawer. Click on the `Flags` tab and enter the `bos-loader URL` value that was output earlier from `bos-loader` - which should be: `http://127.0.0.1:3030`. Finally, click `Save URL`.

**5.** You can now view local components under the `near` account. EG: http://localhost:3000/near/RocTest

**6.** Open up the `near-roc-components` project folder in your favorite IDE. Try making a visible change to `src/RocTest.tsx` and then go back to your browser and refresh the page. You should now see your changes!

**7.** If you're using VS Code, we highly recommend installing the community [CSS Modules](https://marketplace.visualstudio.com/items?itemName=clinyong.vscode-css-modules) extension for class name autocompletion and go-to definition when clicking on a class name.

**8.** Check out the source code of `src/RocTest.tsx` and `src/RocChildTest.tsx` to get an example of the boilerplate that should be used when creating a new component. For further documentation, please refer to the [Official RoC Docs](https://roc-docs.near.dev/).

## Contributing

TODO
