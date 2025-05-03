import Persona from "./Persona";

export default class Player extends Persona {
  public startAngel(name: string): void {
    this.name = name;
    this.hp = 300;
    this.attack = 200;
    this.defense = 120;
    this.classType = "angel";
  }

  public startFighter(name: string): void {
    this.name = name;
    this.hp = 400;
    this.attack = 130;
    this.defense = 170;
    this.classType = "fighter";
  }

  public startMage(name: string): void {
    this.name = name;
    this.hp = 120;
    this.attack = 280;
    this.defense = 50;
    this.classType = "mage";
  }
}
