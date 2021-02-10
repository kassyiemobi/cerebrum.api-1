const express = require('express');
const helmet = require("helmet");
const morgan = require('morgan');
const cors = require("cors")
const bodyParser = require("body-parser")
const request = require('request');
const pug = require('pug');
const _ = require('lodash');
const path = require('path');



module.exports = (app) => {
     app.use(cors())
     app.use(helmet());
     app.use(morgan('dev'));
     app.use(express.json());
     app.use(express.static("/public"));
     app.use(express.urlencoded({ extended: false }));
     app.use('/uploads', express.static("/uploads"));
     app.use(express.static(path.join(__dirname, 'public/')));
     app.set('view engine', pug);
     
     return app
}