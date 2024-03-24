import jwt from "jsonwebtoken";
import { PasswordJWT } from "./const.js";

export function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, PasswordJWT, (error, token) => {
      if (error) {
        reject(error);
      }
      resolve(token);
    });
  });
}
