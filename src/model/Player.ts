import Persona from "./Persona";
import { PlayerClass } from "../enum/ClassType";
import { PlayerContract } from "../Interface/PlayerInterface";

export default class Player extends Persona implements PlayerContract {
  private _super!: number;

  get super(): number {
    return this._super;
  }

  set super(value: number) {
    this._super = value;
  }

  public startAngel(name: string): void {
    this.name = name;
    this.hp = 300;
    this.maxHp = this.hp;
    this.attack = 200;
    this._super = 2;
    this.defense = 120;
    this.classType = PlayerClass.Angel;
  }

  public startFighter(name: string): void {
    this.name = name;
    this.hp = 400;
    this.maxHp = this.hp;
    this.attack = 130;
    this._super = 1.8;
    this.defense = 170;
    this.classType = PlayerClass.Fighter;
  }

  public startMage(name: string): void {
    this.name = name;
    this.hp = 120;
    this.maxHp = this.hp;
    this.attack = 280;
    this._super = 400;
    this.defense = 50;
    this.classType = PlayerClass.Mage;
  }

  public getStatus(): string {
    return `Name: ${this.name}, Atk: ${this.attack}, Def: ${this.defense}, Class: ${this.classType}, Super: ${this._super}`;
  }
}
