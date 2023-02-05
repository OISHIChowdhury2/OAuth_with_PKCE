const compare ="SELECT * FROM oauth";
const loginSQ="INSERT INTO pkce(challegner,verifier) Values($1,$2)";

module.exports = {
    compare,
    loginSQ
};