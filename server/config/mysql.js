import mysql from "mysql2/promise";

const connectionConfig = {
  host: "localhost",
  user: "root",
  password: "jade2314",
  database: "restaurante",
};

export async function connectDatabase() {
  try {
    const connection = await mysql.createConnection(connectionConfig);
    return connection;
  } catch (error) {
    console.error("Error al conectar a MySQL:", error.message);
  }
}
export async function exectQuery(query, params) {
  let connection;
  try {
    connection = await connectDatabase();
    const [results] = await connection.execute(query, params);
    return results;
  } catch (error) {
    console.error("Error al ejecutar la consulta:", error.message);
    throw error;
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}
