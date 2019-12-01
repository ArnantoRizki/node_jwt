const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');


dotenv.config();

function Signature(data){
    this.data = data || null;
}

Signature.prototype.getToken = function(){    
    let datenow = Date.now();
    return jwt.sign({datenow}, process.env.CREDENTIAL, {expiresIn: '7d', issuer:this.data, subject:'api/user'});
}

Signature.prototype.verify = function(token){
    //SYNC
    return jwt.verify(token, process.env.CREDENTIAL, {expiresIn: '7d', subject:'api/user'}).iss;

    //ASSYNC
    // jwt.verify(token, process.env.CREDENTIAL, {expiresIn: '7d', subject:'api/user'}, function(err, decoded){
    //     if(decoded != undefined){
    //         console.log(decoded.iss);
    //         return decoded.iss;
    //     }else{
    //         return null;
    //     }
    // });    
}

module.exports = Signature;
