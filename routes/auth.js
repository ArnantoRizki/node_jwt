const router = require('express').Router();

const db = require('../utils/connection');
const Signature = require('../utils/signature');

const User = require('../models/user');


router.post('/login', (req,res)=>{
    const {usertag, password} = req.body;
    let sql = 'SELECT * FROM `tbmst_user` WHERE `usertag`='+`'`+usertag+`'`+' AND `userpassword`='+`'`+password+`'`;

    var error = false;
    var message = 'Success';

    db.query(sql, function(err, result){
        if(err){
            error = true;
            message = 'Error when login.';
            res.send({error, message, result});
        }
        var user = new User(result);
        var token = new Signature(user.userid).getToken();
        res.send({error, message, token});
    });
});

router.post('/fetch', (req, res)=>{
    const{token} = req.body;
    var userid = new Signature(null).verify(token);

    let sql = 'SELECT * FROM `tbmst_user` WHERE `userid`='+`'`+userid+`'`;

    var error = false;
    var message = 'Success';

    db.query(sql, function(err, result){
        if(err){
            error = true;
            message = 'Cannot fetch data.';
            res.send({error, message, result});
        }
        var user = new User(result);
        var value = user.getJSON();
        res.send({error, message, value});
    });
});

module.exports = router;
