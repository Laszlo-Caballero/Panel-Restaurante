export interface userLogin {
  user: {
    idUser: number;
    nombre: string;
    email: string;
    tipo: string;
    contraseña: string;
    imagen?: string;
  };
  token: string;
}
