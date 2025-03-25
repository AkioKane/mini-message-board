const { Pool } = require("pg");
require("dotenv").config();

// module.exports = new Pool({
//   host: "localhost",
//   user: process.env.USER,
//   database: process.env.DATABASE,
//   password: process.env.PASSWORD,
//   port: process.env.PORT
// });

module.exports = new Pool({
  connectionString: process.env.DATABASE_URL
})