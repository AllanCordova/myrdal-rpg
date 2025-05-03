import Enemy from "../model/Emey";

export default class Db {
  private _enemys!: Enemy[];

  public get enemys(): Enemy[] {
    return this._enemys;
  }

  public set enemys(value: Enemy[]) {
    this._enemys = value;
  }
}
