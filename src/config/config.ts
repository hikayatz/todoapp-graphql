import dotenv from "dotenv"
dotenv.config()

const { APP_PORT, DB_URI, DB_NAME, DB_USER, DB_PASSWORD } = process.env
const IS_PRODUCTION = process.env.ENV === "prod" ? true : false

console.log(DB_URI)
export const environment = {
  development: {
    serverURL: `http://localhost:${APP_PORT}/`,
    dbString: DB_URI,
  },
  production: {
    serverURL: `http://localhost:${APP_PORT}/`,
    dbString: DB_URI,
  },
};

export { APP_PORT, DB_URI, DB_NAME, DB_USER, DB_PASSWORD, IS_PRODUCTION }