var express = require('express');
var router = express.Router();
var reportService = require('../service/report');
var util = require('../util')

//checked
router.post('/create', (req, res, next) => {
    const { id: member_id, topic, comment } = req.body;
    var created_at = util.timeformatter(new Date());
    reportService.createReport(created_at, { member_id, topic, comment }, (err, result) => {
        if (err) {
            res.json({ success: false, error: err.sqlMessage, message: 'Cannot access database' });
        } else {
            res.json({ success: true, id: result.insertId });
        }
    })
});


module.exports = router;
