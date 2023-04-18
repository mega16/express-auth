const express = require('express');
const router = express.Router();
const conf = require('../config');
// https://juejin.cn/post/7010735601683005447
router.post('/login', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  const { name, pwd } = req.body;
  if (name === conf.name && pwd === conf.pwd) {
    res.cookie("USER_ID", "xigua_id_365", {
      // domain: ''
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 2
    });
    res.send({
      success: true,
      msg: 'success'
    })
  } else {
    res.send({
      success: false,
      msg: 'fail'
    });
  }
});


router.get('/logout', function(req, res, next) {
  res.cookie('USER_ID', 'xigua_id_365', {
    // domain: '',
    httpOnly: true,
    maxAge: -1, // 过期
  });
  res.send({
    success: true,
    msg: 'success'
  });
});


module.exports = router;
