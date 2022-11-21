type Contact = {
  firstName: string;
  lastName: string;
};

export type UserModel = {
  id: string;
  email: string;
  password:string;
  firstName: string;
  lastName: string;
  gender: string;
  language: string;
  age: number;
  contacts: [Contact];
};
