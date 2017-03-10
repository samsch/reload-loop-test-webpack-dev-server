# Reload issue in Firefox with webpack-dev-server

To run this reproduction:

Clone the repo, run `yarn install` (or `npm install`).
Start the slow server with `yarn start` (`npm start`).
Then (in a new shell), run `yarn run dev` (`npm run dev`).

Webpack-dev-server should open a new browser tab with the test app. It should show "Hello, world!". If you refresh the page, it goes into a reload loop, with `[WDS] Disconnected!` in the console.

It seems the important trigger is the long load time simulated in `server.js`.

## System details

This fails in Firefox. It doesn't seem to have any issue in Chrome.

I have tested in Windows, only Linux.

- OS: Xubuntu 15.10
- Firefox: 52 x64

## Package versions

This is what I have, and should be installed if using Yarn.

- babel-core 6.23.1
- babel-loader 6.4.0
- babel-preset-latest 6.22.0
- babel-preset-react 6.23.0
- express 4.15.2
- react 15.4.2
- react-dom 15.4.2
- webpack 2.2.1
- webpack-dev-server 2.4.1
