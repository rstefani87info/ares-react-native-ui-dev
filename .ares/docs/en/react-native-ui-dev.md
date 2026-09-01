# @ares/react-native-ui-dev Documentation

## Purpose

Description and goals of the `@ares/react-native-ui-dev` module.

## Installation

```bash
yarn add @ares/react-native-ui-dev
```

In a Yarn Workspaces monorepo:

```bash
yarn workspace <app> add @ares/react-native-ui-dev
```

## Quickstart

Import example (actual surface depends on the module):

```js
import * as mod from "@ares/react-native-ui-dev";
```

## Public API (exports)

This section documents the actual public surface at entrypoint level and main exported symbols.

Root entrypoint:

- `@ares/react-native-ui-dev`

## Configuration (appSetup / config / policies)

This module may read configuration from `appSetup`, `config`, or `policies` depending on the type. Document the actually consumed keys as you stabilize the contract.

## Test

Run module tests (if present):

```bash
yarn workspace @ares/react-native-ui-dev test
```

## Notes

- This document is maintained alongside the module tickets.
