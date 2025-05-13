import Persona from "./Persona";
import { EnemyClass } from "../enum/ClassType";

export default class Enemy extends Persona {
  public get enemy(): Enemy {
    return this;
  }

  public startDemon(): void {
    this.name = "Diablo";
    this.hp = 180;
    this.maxHp = this.hp;
    this.attack = 220;
    this.defense = 20;
    this.classType = EnemyClass.Demon;
  }

  public startOrc(): void {
    this.name = "Gorgrul";
    this.hp = 140;
    this.maxHp = this.hp;
    this.attack = 100;
    this.defense = 80;
    this.classType = EnemyClass.Orc;
  }

  public startSkeleton(): void {
    this.name = "Boneclaw";
    this.hp = 70;
    this.maxHp = this.hp;
    this.attack = 60;
    this.defense = 40;
    this.classType = EnemyClass.Skeleton;
  }

  public startDragon(): void {
    this.name = "Vermithrax";
    this.hp = 300;
    this.maxHp = this.hp;
    this.attack = 250;
    this.defense = 200;
    this.classType = EnemyClass.Dragon;
  }

  public startGoblin(): void {
    this.name = "Snaggle";
    this.hp = 60;
    this.maxHp = this.hp;
    this.attack = 40;
    this.defense = 30;
    this.classType = EnemyClass.Goblin;
  }

  public startVampire(): void {
    this.name = "Nosferatu";
    this.hp = 120;
    this.maxHp = this.hp;
    this.attack = 150;
    this.defense = 90;
    this.classType = EnemyClass.Vampire;
  }
}
