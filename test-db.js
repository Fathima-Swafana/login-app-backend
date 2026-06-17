const pool = require("./config/db");

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.log("DB ERROR:", err);
  } else {
    console.log("DB CONNECTED:", res.rows);
  }
  process.exit();
});