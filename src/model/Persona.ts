import { IEntity } from "Interface/EntityInterface";

export default abstract class Persona implements IEntity{
  public id: number = Date.now()
  private _name!: string;
  private _hp!: number;
  private _maxHp!: number;
  private _attack!: number;
  private _defense!: number;
  private _classType!: string;

  public isLive(): boolean {
    return this.hp > 0;
  }

  abstract getStatus(): string;

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get hp(): number {
    return this._hp;
  }

  public set hp(value: number) {
    this._hp = value;
  }

  public get maxHp(): number {
    return this._maxHp;
  }

  public set maxHp(value: number) {
    this._maxHp = value;
  }

  public get attack(): number {
    return this._attack;
  }

  public set attack(value: number) {
    this._attack = value;
  }

  public get defense(): number {
    return this._defense;
  }

  public set defense(value: number) {
    this._defense = value;
  }

  public get classType(): string {
    return this._classType;
  }

  public set classType(value: string) {
    this._classType = value;
  }
}
