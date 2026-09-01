# Obiettivi del modulo @ares/react-native-ui-dev

## Introduzione

`@ares/react-native-ui-dev` (work-in-progress) è l'**dev harness** di `@ares/react-native-ui`: serve a mettere in piedi rapidamente un ambiente di sviluppo/anteprima per i componenti UI React Native di aReS, spesso tramite Expo Router (il campo `main` punta a `expo-router/entry`).

Al posto di una libreria di componenti, fornisce **script di setup e avvio** che configurano l'app consumer e lanciano React Native/Metro, con supporto alla selezione del componente da renderizzare nel dev harness.

## Obiettivi

- Automatizzare il setup del package consumer (aggiunta dello script `start` nel suo `package.json`) tramite uno script `postinstall`.
- Avviare il dev server React Native passando al runtime argomenti (`--ares-*`) necessari all'anteprima dei componenti.
- Guidare lo sviluppo dei componenti di `@ares/react-native-ui`.

## Responsabilità

- Script `setup.js` (`postinstall`): aggiunge nel `package.json` del progetto (da `INIT_CWD`) lo script `start` che richiama lo start del modulo.
- Script `start.js`: scrive gli argomenti `--ares-*` in `./.tmp/ares-rn-args.json` e avvia `npx react-native start` con spawn.
- Fornire una cartella `components/` (attualmente vuota) come area di sviluppo.
- Dipendere da `@ares/react-native-ui` e `@ares/files`, oltre al core aReS.

## Cosa il modulo NON fa

- Non fornisce componenti UI propri (la cartella `components/` è vuota): quelli vivono in `@ares/react-native-ui`.
- Non è una libreria esportabile con API stabile (nessuna mappa `exports`; `main` è l'entry Expo Router).
- Non ha test (nessuno script `test` in `package.json`).
