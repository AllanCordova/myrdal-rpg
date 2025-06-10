import Enemy from "@model/Enemy";
import Repository from "./Repository";


export default class Db {
  public enemys!: Repository<Enemy>;

  public constructor() {
    this.enemys = new Repository<Enemy>();
  }
}
