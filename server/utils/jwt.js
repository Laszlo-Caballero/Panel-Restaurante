import jwt from "jsonwebtoken";
import { PasswordJWT } from "../const.js";
import { exectQuery } from "../config/mysql.js";

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

export function accessToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, PasswordJWT, async (err, user) => {
      if (err) {
        return reject("Unauthorized");
      }

      const rows = await exectQuery(
        "Select tipo from Usuario Where email = ?",
        [user]
      );

      const data = rows[0];
      if (!data) {
        return reject("Unauthorized");
      }
      resolve(data);
    });
  });
}
