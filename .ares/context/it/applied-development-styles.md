# Stili di sviluppo applicati @ares/react-native-ui-dev

## Standard di programmazione

- Package **ESM puro** (`"type": "module"`) pensato come dev harness: `main` punta a `expo-router/entry`.
- Logica concentrata in `scripts/setup.js` e `scripts/start.js` (Node, script di automazione).
- Setup automatico via `postinstall` che modifica il `package.json` del progetto consumer.
- Avvio tramite `child_process.spawn` di CLI native (`npx react-native start`).
- Dipende da `@ares/core`, `@ares/files` e `@ares/react-native-ui`; `@ares/scd` come devDependency.

## Contratto directory / file

```text
react-native-ui-dev/
├── .ares/
│   ├── context/          # Contestualizzazione (manuale)
│   ├── docs/             # Documentazione (manuale)
│   └── tasks/            # Ticket/note (manuale)
├── .git/
├── components/           # Area di sviluppo (attualmente vuota; manuale)
├── scripts/
│   ├── setup.js          # Script postinstall (manuale)
│   └── start.js          # Script di avvio dev RN (manuale)
├── LICENSE
├── .gitignore
├── package.json          # Manuale/autogenerato da yarn
├── README.md             # Manuale
└── node_modules/         # (installato) GENERATO
```

## Distinzione GENERATO vs MANUALE

**Generato automaticamente (non versionare/rigenerare a mano):**

- `node_modules/` e lockfile di Yarn.
- `./.tmp/ares-rn-args.json` — file temporaneo scritto da `start.js` a runtime per passare gli argomenti `--ares-*` all'anteprima.
- Eventuali artefatti di build RN (`.expo`, `.metro-*`, `dist`, `coverage`) quando presenti.

**Manuale (scritto a mano, NON rigenerare/sovrascrivere):**

- `scripts/setup.js`, `scripts/start.js`
- eventuale contenuto di `components/`
- `LICENSE`, `README.md`, `.gitignore`, `package.json` (iniziale)
- intera sottocartella `.ares/` (docs, context, tasks)
