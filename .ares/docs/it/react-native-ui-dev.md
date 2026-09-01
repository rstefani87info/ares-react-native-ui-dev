# Documentazione @ares/react-native-ui-dev

## Scopo

Descrizione e obiettivi del modulo `@ares/react-native-ui-dev`.

## Installazione

```bash
yarn add @ares/react-native-ui-dev
```

In un monorepo Yarn Workspaces:

```bash
yarn workspace <app> add @ares/react-native-ui-dev
```

## Quickstart

Esempio d’import (il contenuto dipende dal modulo):

```js
import * as mod from "@ares/react-native-ui-dev";
```

## API pubbliche (exports)

Questa sezione documenta la superficie pubblica reale a livello di entrypoint e simboli principali.

Entrypoint root:

- `@ares/react-native-ui-dev`

## Configurazione (appSetup / config / policies)

Questo modulo può leggere configurazioni da `appSetup`, `config` o `policies` a seconda del tipo. Documenta qui le chiavi effettivamente consumate quando stabilizzi il contract.

## Test

Esecuzione test del modulo (se presenti):

```bash
yarn workspace @ares/react-native-ui-dev test
```

## Note

- Questo documento è mantenuto in parallelo ai ticket del modulo.
