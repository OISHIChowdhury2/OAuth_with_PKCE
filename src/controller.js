const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const crypto = require('crypto');
const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const session = require('express-session');
const { query } = require('express');
const { is } = require('type-is');
const pool =require('../db');

const queries = require("./querry");
const app = express();


const addStudent= (req, res)=>{
function base64URLEncode(str) {
  return str
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}
var verifier = base64URLEncode(crypto.randomBytes(32));
console.log("verifier:",verifier);
function sha256(buffer) {
  return crypto
    .createHash('sha256')
    .update(buffer)
    .digest();
}

var challegner = base64URLEncode(sha256(verifier));
console.log("challegner:",challegner);
  const verify= verifier;
  const challegne= challegner;
  console.log(verify);

      //add student
      pool.query(queries.loginSQ,
          [challegne],(error,results)=>{
      if(error) throw error;
      res.status(201).send("created");
      })
 };



 module.exports={
    addStudent,
}