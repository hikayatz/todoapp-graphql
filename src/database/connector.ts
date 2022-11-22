import mongoose, { mongo } from "mongoose"
import { DB_URI, environment, DB_NAME, DB_USER, DB_PASSWORD } from "../config"

import { userSchema } from "./schema"

const env = "development";

let db
const connectDB = async () => {

  await mongoose.connect(DB_URI)
    .catch(function (error) {
      console.log(`Unable to connect to the Mongo db  ${error} `);
    })
  //...rest of code
};


connectDB()

const Users = mongoose.model("User", userSchema);

export { Users }
