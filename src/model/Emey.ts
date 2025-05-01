import Persona from "./Persona";

export default class Enemy extends Persona {
  public startDemon(): void {
    this.name = "Diablo";
    this.hp = 180;
    this.attack = 220;
    this.defense = 120;
    this.classType = "devil";
  }
}
