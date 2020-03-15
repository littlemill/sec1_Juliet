var db = require('../dbconnection'); //reference of dbconnection.js

const login = (username, password, callback) => {
  return db.query(
    `SELECT count(*) as count FROM admin WHERE username = ? AND password = ?`,
    [username, password],
    callback
  );
};

// YIN
const getAllMember = callback => {
  return db.query(
    `SELECT id,username,firstname,lastname,phone_number,email,photo,driver_status,driving_license,
                  approved_at, approved_by,rejected_at,rejected_by,edited_at, driver_status
                  FROM members WHERE driver_status = 'pending'`,
    callback
  );
};

const getAllUser = (callback) => {
  return db.query(
    `SELECT id,username,firstname,lastname,phone_number,email,photo,driver_status,driving_license,
                  approved_at, approved_by,rejected_at,rejected_by,edited_at, driver_status
                  FROM members`,
    callback
  );
};

const driverApprove = (admin_name, approved_at, driver_id, callback) => {
  console.log('Approved by : ', admin_name);
  console.log('Member ID: ', driver_id);
  const driver_status = 1;
  return db.query(
    `UPDATE members SET approved_by = ?,approved_at = ? ,driver_status = ? WHERE id = ?`,
    [admin_name, approved_at, driver_status, driver_id],
    callback
  );
};

const driverReject = (admin_name, rejected_at, driver_id, callback) => {
  console.log('Rejected by : ', admin_name);
  console.log('Member ID: ', driver_id);
  const driver_status = 3;
  return db.query(
    `UPDATE members SET rejected_by = ?, rejected_at = ? ,driver_status = ? WHERE id = ?`,
    [admin_name, rejected_at, driver_status, driver_id],
    callback
  );
};

function getCurrentDateTimeString() {
  const date = new Date();
  return (
    date.getFullYear() +
    '-' +
    (date.getMonth() + 1).toString().padStart(2, '0') +
    '-' +
    date
      .getDate()
      .toString()
      .padStart(2, '0') +
    ':' +
    date
      .getHours()
      .toString()
      .padStart(2, '0') +
    ':' +
    date
      .getMinutes()
      .toString()
      .padStart(2, '0') +
    ':' +
    date
      .getSeconds()
      .toString()
      .padStart(2, '0')
  );
}

const getAllReport = (callback) => {
  return db.query(`SELECT report.id as id, 
                  report.topic as topic, 
                  report.comment as comment , 
                  report.created_at as created_at,
                  report.is_read as is_read, 
                  report.member_id as member_id, 
                  members.firstName as firstname, 
                  members.lastname as lastname, 
                  members.photo as photo , 
                  members.username as username
                  FROM report INNER JOIN members ON report.member_id = members.id`,callback);
}

const isRead = ({ id, is_read }, callback) => {
  return db.query(`UPDATE report 
                  SET is_read = ?
                  WHERE id = ?`, [ is_read , id ] , callback);
}

module.exports = { login, getAllMember,getAllUser, driverApprove, getCurrentDateTimeString, driverReject, getAllReport , isRead };
