import { Ordenes } from "../../socket/socketHandle.js";

export function Orders(req, res) {
  res.send(Ordenes);
}
