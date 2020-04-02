import Session from "./session.entity";
import { Barrio } from "src/barrio/barrio.entity";
import Propietario from "src/propretario/propietario.entity";
import Trabajador from "src/trabajador/trabajador.entity";

export default interface Cookie{

    jwt: string;

    account: Barrio | Propietario | Trabajador;
}