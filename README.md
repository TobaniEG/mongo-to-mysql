# Mongo To MySQL

A simple JS script to export data from MongoDB to MySQL.

## Installation

```bash
git clone https://github.com/tobanieg/mongo-to-mysql.git
cd mongo-to-mysql
pnpm install
```

## Usage

Set the following environment variables:

- `MONGO_URI`: MongoDB connection string
- `MYSQL_USER`: MySQL server user
- `MYSQL_PASSWORD`: MySQL server password
- `MYSQL_HOST`: MySQL server host
- `MYSQL_DATABASE`: MySQL server database name
- `MYSQL_PORT`: MySQL server port. Defaults to 3306

And run:

```bash
pnpm run start
```
