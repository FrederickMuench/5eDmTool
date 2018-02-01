import { Creature } from "./creature"

export class Encounter {
    name: String;
    summary: String;
    creatures:  Creature[];
    xp: Number;
}