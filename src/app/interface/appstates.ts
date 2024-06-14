import {User} from "./user";

export interface Appstates {

}

export interface CustomHttpResponse<T> {
  timestamp?: Date;
  statusCode: number;
  status: string;
  message?: string;
  reason?: string;
  data?: T;
}

export interface Profile {
  user?: User;
}
