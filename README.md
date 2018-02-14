# Firebase cloud functions + hosting + Express

This repo is for testing google firebase cloud functions.
Show reservation confirmed page (using reservation id)

When request with reservation_id (**0000** only) successfully

https://us-central1-fir-function-express.cloudfunctions.net/app/reservations/0000

When request failed (not found)

https://us-central1-fir-function-express.cloudfunctions.net/app/not-found

## Installation

```bash
git clone https://github.com/ChangJoo-Park/firebase-functions-express.git
cd firebase-functions-express
npm install
firebase init // and set firebase configurations
```

## Development

```bash
firebase serve
```

## Deploy

```bash
firebase deploy
```