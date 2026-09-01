# Panoramica CLI @ares/react-native-ui-dev

## Comandi espliciti

Questo modulo **non ha un binario** (`package.json` non dichiara `bin`), ma è basato principalmente su **script npm** di automazione che fungono da entrypoint funzionale del dev harness.

## Script npm disponibili

| Script | Comando | Scopo |
|---|---|---|
| `postinstall` | `node ./scripts/setup.js` | Aggiunge nel `package.json` del progetto consumer (dalla `INIT_CWD`) uno script `start` che punta allo start del modulo |
| `start` | `node ./scripts/start.js` | Avvia `npx react-native start`; scrive gli argomenti `--ares-*` in `./.tmp/ares-rn-args.json` per il dev harness |

## Uso

Il flusso tipico nel progetto consumer:

```bash
install @ares/react-native-ui-dev        # esegue postinstall → aggiunge "start" al package.json
yarn start [--ares-component=<Name>]     # start.js salva gli argomenti e lancia Metro
```

Dopo l'installazione, il `package.json` del consumer contiene: `"start": "node node_modules/@ares/react-native-ui-dev/scripts/start.js"`.

Non esistono altri sottocomandi: l'avvio è un unico wrapper su `react-native start`.
