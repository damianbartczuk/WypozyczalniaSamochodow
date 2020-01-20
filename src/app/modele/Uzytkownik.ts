import {Rola} from './Rola';

export interface Uzytkownik {
  idUzytkownik: number;
  imie: string;
  nazwisko: string;
  username: string;
  password: string;
  roles: Array<Rola>
}
