var express = require('express');
var router = express.Router();
var db = require("../mysql/index"); //引入数据库封装模块


router.get('/ceshi', function (req, res, next) {
    db('SELECT * FROM ceshi', function (err, results) {
        if (err) {
            throw err;
        }
        if (results) {
            console.log(results)
            res.json(results);
        }
    })
});

router.post('/register', function (req, res, next) {
    db('insert into users (user,password) values (?,?);', [req.body.name, req.body.pwd], function (err, results) {
        if (err) {
            throw err;
        }
        if (results) {
            let data = {
                status: 200,
                msg: '成功'
            }
            res.json(data);
        }
    })
});

module.exports = router;