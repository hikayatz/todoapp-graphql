import { rejects } from "assert"
import { resolve } from "path"
import { Users } from "../database"
import { UserModel } from "../models"


export const resolvers = {
  Query: {
    getUsers: async () => {
      return new Promise((resolve, reject) => {
        Users.find((err: any, Users: UserModel[]) => {
          if (err) reject(err);
          else resolve(Users);
        })
      })
    },
    findOneUser: (_, user: any) => {
      return new Promise((resolve, reject) => {
        Users.findOne({ _id: user.id }, (err: any, user: UserModel) => {
          if (err) reject(err);
          else resolve(user);
        });
      });
    },
    myTaskList: () => {

    }
  }
}