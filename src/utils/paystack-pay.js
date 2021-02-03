const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const pug = require('pug');
const _ = require('lodash');
const path = require('path');
const {Donor} = require('./models/donor')
const {initializePayment, verifyPayment} = require('./config/paystack')(request);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, ‘public/’)));
app.set(‘view engine’, pug);