# Anticrash

- By ThunderNetworkRaD

## install

- With NPM

```sh
npm i @thundernetworkrad/anticrash
```

- with yarn

```sh
yarn add @thundernetworkrad/anticrash
```

## Docs

```js
const anticrash = require('@thundernetworkrad/anticrash');

anticrash.start([/*Disabled Goes Here*/], [/*Enabled Goes Here*/])


anticrash.quit() // completly stop the program
```

In this package there is 3 systems, 2 enabled by default and 1 disabled by default

Enabled by default (You can put it in "disabled goes here" as a string)

- unhandledRejection
- uncaughtException

Disabled by default (You can put it in "enabled goes here" as a string)

- multipleResolves
