export interface User {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  address?: string;
  phone?: string;
  bio?: string;
  createdAt?: Date;
}
