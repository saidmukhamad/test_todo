export interface Message {
  msg: string;
  success: boolean;
  data: any[];
}

export interface Login {
  login: string;
  password: string;
}

export interface User extends Login {
  name: string;
}
