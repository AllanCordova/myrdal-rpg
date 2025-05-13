import Enemy from "../model/Enemy";
import Player from "../model/Player";
import ViewArt from "../view/ViewArt";
import ViewConsole from "../view/ViewConsole";
import ViewMenu from "../view/ViewMenu";
import ControllerSpecial from "./ControllerSpecial";

export default class ControllerPerson {
  readonly _player: Player;
  private _viewMenu: ViewMenu;
  private _viewConsole: ViewConsole;
  private _controllerSpecial!: ControllerSpecial;

  public constructor(private _viewArt: ViewArt) {
    this._player = new Player();
    this._viewConsole = new ViewConsole(_viewArt);
    this._viewMenu = new ViewMenu(this._viewConsole, _viewArt);
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
        this._controllerSpecial = new ControllerSpecial(40);
        break;
      case "2":
        this._player.startFighter(name);
        this._controllerSpecial = new ControllerSpecial(50);
        break;
      case "3":
        this._player.startMage(name);
        this._controllerSpecial = new ControllerSpecial(30);
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

    return [demon, orc, skeleton, goblin, vampire, dragon];
  }

  public get controllerSpecial(): ControllerSpecial {
    return this._controllerSpecial;
  }
}
