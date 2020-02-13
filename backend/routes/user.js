var express = require('express');
var userService = require('../service/user');
var router = express.Router();

router.post('/', function (req, res, next) {
  const { id, ...data } = req.body;
  userService.editMemberInfo(id, data, (err, result) => {
    if (err) {
      res.json({ success: false, error: err.sqlMessage, message: "Cannot access database" });
    } else {
      res.json({ success: true });
    }
  });
});

router.post('/register', function (req, res, next) {
  var amount = 0;
  var created_at = userService.getCurrentDateTimeString()
  const { username, ...data } = req.body
  userService.register(username, data, created_at, amount, (err, result) => {
    if (err) {
      res.json({ success: false, error: err.sqlMessage, message: "Cannot access database" });
    }
    else {
      userService.getMemberInfo(username, (err, result) => {
        if (err) {
          res.json({ success: false, error: err.sqlMessage, message: "Get information error" });
        } else {
          res.json({ success: true, information: result });
        }
      });
    }
  });
});

router.post('/login', function (req, res, next) {
  const { username, password } = req.body;
  userService.login(username, password, (err, result) => {
    if (err) {
      res.json({ success: false, error: err.sqlMessage, message: "Cannot access database" });
    } else {
      if (result == "") {
        res.json({ success: false, message: "Invalid username/password" })
      } else {
        res.json({ success: true, information: result });
      }
    }
  });
});

module.exports = router;
