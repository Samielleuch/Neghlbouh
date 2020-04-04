const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
const config = require('./config/config')
const logger = require("morgan");
const passport = require('passport');


//Middlewares
app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());

//our routes are located in /api/v1/{routefilename}
const route = require('./routers/router')(app);
mongoose.connect(
  `mongodb+srv://${config.db.dbUser}:${config.db.dbPassword}@${config.db.dbName}-t4fmt.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


app.listen(config.port, config.hostname, () => {
  console.log(`Server running at http://${config.hostname}:${config.port}/`);
});