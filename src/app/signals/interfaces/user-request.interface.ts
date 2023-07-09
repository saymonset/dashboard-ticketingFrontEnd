export interface SingleUserReponse {
  data:    User;
  support: Support;
}

export interface User {
  id:         number;
  email:      string;
  first_name: string;
  last_name:  string;
  avatar:     string;
}

export interface Support {
  url:  string;
  text: string;
}


export interface User2 {
  total:    number;
  usuarios: Usuario[];
}

export interface Usuario {
  rol:    string;
  estado: boolean;
  google: boolean;
  roles?: string[];
  nombre: string;
  correo: string;
  uid:    string;
}