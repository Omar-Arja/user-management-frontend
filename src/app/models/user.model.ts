export interface User {
  id?: number;
  username: string;
  fullName: string;
  email: string;
  age: number;
  isActive: boolean;
  createdAt?: Date;
}
