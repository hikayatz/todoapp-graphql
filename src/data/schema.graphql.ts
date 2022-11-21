import { gql } from 'apollo-server-express';

export const typeDefs = gql`
	type User {
		ID: String
		email: String
		firstName: String
		lastName: String
		gender: Gender
		languange: String
		age: Int
		Password: String
		constacts: [Contact]
	}

	type Contact {
		firstname: String
		lastName: String
	}

	enum Gender {
		Male
		Female
		Other
	}
  type Query {
    getUsers: [User]
    findOneUser: User
  }
`;
