# Dipendenze @ares/react-native-ui-dev

## Dipendenze aReS (@ares/*) dichiarate

### `@ares/core` (di runtime)
Framework base aReS: usato come base dell'ambiente di sviluppo che il dev harness avvia (runtime e config).

### `@ares/files` (di runtime)
Usato in `scripts/setup.js`: `getFile, getFileContent, setFileContent` per leggere/modificare il `package.json` del progetto consumer durante il `postinstall`.

### `@ares/react-native-ui` (di runtime)
Il dev harness di sviluppo dei componenti UI: serve a renderizzare/anteprimare i componenti di `@ares/react-native-ui`, di cui è lo strumento di sviluppo dedicato.

### `@ares/scd` (devDependency)
Toolchain di sviluppo aReS (dev-only).

## Chi dipende da questo modulo

Dall'analisi delle `package.json` del workspace, **nessun altro modulo `@ares/*` dichiara oggi una dipendenza** da `@ares/react-native-ui-dev`: è uno strumento di sviluppo usato dai progetti consumer (o dal workspace) per lavorare sui componenti UI, non consumato internamente da altri moduli aReS.
