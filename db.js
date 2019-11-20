const Sequelize = require("sequelize");
const databaseUrl =
  process.env.DATABASE_URL ||
  "postgres://postgres:secret1@localhost:5432/postgres";
const db = new Sequelize(databaseUrl);

db.sync()
  .then(() => console.log("Database Connected."))
  .catch(err => {
    console.error("Unable to fetch", err);
    process.exit(1);
  });

module.exports = db;
