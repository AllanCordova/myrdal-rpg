import Enemy from "../model/Emey";
import Player from "../model/Player";
import ViewConsole from "../view/ViewConsole";
import ViewMenu from "../view/ViewMenu";

export default class ControllerPerson {
  readonly _player: Player;
  private _viewMenu: ViewMenu;
  private _viewConsole: ViewConsole;

  public constructor() {
    this._player = new Player();
    this._viewConsole = new ViewConsole();
    this._viewMenu = new ViewMenu(this._viewConsole);
  }

  public startPlayer(): void {
    const name: string = this._viewMenu.playerName();
    if (name.trim() === "") {
      this._viewMenu.nameValid();
      return this.startPlayer();
    }

    switch (this._viewMenu.personMenu()) {
      case "1":
        this._player.startAngel(name);
        break;
      case "2":
        this._player.startFighter(name);
        break;
      case "3":
        this._player.startMage(name);
        break;
      default:
        this._player.startAngel(name);
        break;
    }
  }

  public startEnemy(): Enemy[] {
    const demon: Enemy = new Enemy();
    demon.startDemon();

    const orc: Enemy = new Enemy();
    orc.startOrc();

    const skeleton: Enemy = new Enemy();
    skeleton.startSkeleton();

    const dragon: Enemy = new Enemy();
    dragon.startDragon();

    const goblin: Enemy = new Enemy();
    goblin.startGoblin();

    const vampire: Enemy = new Enemy();
    vampire.startVampire();

    return [demon, orc, skeleton, dragon, goblin, vampire];
  }
}
