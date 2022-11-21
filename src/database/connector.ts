import mongoose, { mongo } from "mongoose"
import { environment } from "../config"

import { userSchema } from "./schema"

const env =  "development";


mongoose.connect(environment[env].dbString);

let db = mongoose.connection;
db.on("error", () => {
  console.error("Error while connecting to DB");
});

const Users = mongoose.model("User", userSchema);

export { Users }
