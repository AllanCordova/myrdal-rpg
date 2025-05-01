import Persona from "./Persona";

export default class Player extends Persona {
  public startAngel(name: string): void {
    this.name = name;
    this.hp = 300;
    this.attack = 200;
    this.defense = 120;
    this.classType = "angel";
  }
}
