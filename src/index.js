import { config } from "dotenv";
config();

import mongoose from "mongoose";
import mysql from "mysql2/promise";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true }
});

const User = mongoose.model('User', UserSchema);

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  const users = await User.find();
  await mongoose.disconnect();

  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: parseInt(process.env.MYSQL_PORT)
  });

  for (const user of users) {
    // execute creates a prepared statement
    // helping mitigate SQL injection
    await connection.execute(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [user.name, user.email]
    );
  }

  connection.end();

  console.log(`Exported ${users.length} users to MySQL`);
}

main().catch((err) => console.error(err));
