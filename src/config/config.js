module.exports = {
    development: {
      database: {
        host: "localhost",
        port: 3306,
        name: "municipios",
        dialect: "sqlite3",
        user: "root",
        password: ""
      }
    },
    production: {
      database: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
      }
    }
  };