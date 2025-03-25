const { Client } = require("pg");
require('dotenv').config();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toISOString() 
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toISOString() 
  }
];

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  message TEXT,
  username TEXT,
  date TIMESTAMP
);

INSERT INTO messages (message, username, date) 
VALUES
  ('${messages[0].text}', '${messages[0].user}', '${messages[0].added}'),
  ('${messages[1].text}', '${messages[1].user}', '${messages[1].added}');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@localhost:${process.env.PORT}/${process.env.DATABASE}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
