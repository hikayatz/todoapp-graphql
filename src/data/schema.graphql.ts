import { gql } from 'apollo-server-express';

export const typeDefs = gql`
	type User {
		id: ID!
    name: String!
		email: String!
		password: String
		gender: Gender
		avatar: String
	}

	enum Gender {
		Male
		Female
		Other
	}

  type TaskList{
    id: ID!
    createdAt: String!
    title: String!
    progress: Float!

    users:[User]
    todos:[Todo]
  }

  type Todo{
    id:ID!
    content: String
    isCompleted: Boolean

    taskList: TaskList
  }

  type Query {
    getUsers: [User]
    findOneUser: User
    myTaskLists: [TaskList]
  }


`;
