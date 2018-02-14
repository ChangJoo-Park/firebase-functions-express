const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors")({
  origin: true
});

const app = express();
app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').renderFile);
app.use(cors);
app.use(express.static('public'));

// Routes
const infoRoute = (req, res) => {
  const reservation_id = req.params['reservation_id']
  // TODO: Request reservation with reservation_id,
  // if found reservation, render index.
  // if not - found or reservation_id is nil, redirect to not-found
  const found = true
  if (found && reservation_id === '0000') {
    res.render("index", { id: reservation_id });
  }
  res.redirect('/app/not-found')
}

const notFoundRoute = (req, res) => {
  res.render('not-found')
}

app.get("/reservations/:reservation_id", infoRoute);
app.get('/not-found', notFoundRoute)
app.get('*', (req, res) => { res.redirect('/app/not-found') })

exports.app = functions.https.onRequest(app);