interface PersonType {
  _name: string;
  _hp: number;
  _attack: number;
  _defense: number;
  _classType: string;
}

export default class Persona {
  private _name!: string;
  private _hp!: number;
  private _attack!: number;
  private _defense!: number;
  private _classType!: string;

  public isLive(): boolean {
    return this.hp > 0;
  }

  public getStatus(): PersonType {
    return {
      _name: this.name,
      _hp: this.hp,
      _attack: this.attack,
      _defense: this.defense,
      _classType: this.classType,
    };
  }

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
