const express = require('express');
const router = express.Router();
const conf = require('../config');

// https://juejin.cn/post/7011327714254651428

// https://juejin.cn/post/6844903845609357320#heading-15

router.post('/login', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  const { name, pwd } = req.body;
  if (name === conf.name && pwd === conf.pwd) {
    req.session.authInfo = { name: 'xigua', age: 18, address: 'chengdu' };
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
  Reflect.deleteProperty(req.session, 'authInfo');
  res.send({
    success: true,
    msg: 'success'
  });
});


module.exports = router;
