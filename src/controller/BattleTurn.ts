import Battle from "../model/Battle";
import ViewMenu from "../view/ViewMenu";
import ViewBattle from "../view/ViewBattle";
import ViewConsole from "../view/ViewConsole";
import ControllerSpecial from "./ControllerSpecial";
import SpecialAttack from "../model/SpecialAttack";
import ViewSpecial from "../view/ViewSpecial";
import ViewArt from "../view/ViewArt";

export default class BattleTurn {
  private _battle: Battle;
  private _controllerSpecial: ControllerSpecial;
  private _viewMenu: ViewMenu;
  private _viewBattle: ViewBattle;
  private _viewConsole: ViewConsole;
  private _viewSpecial: ViewSpecial;

  public constructor(
    battle: Battle,
    controllerSpecial: ControllerSpecial,
    viewSpecial: ViewSpecial,
    private _viewArt: ViewArt
  ) {
    this._battle = battle;
    this._controllerSpecial = controllerSpecial;
    this._viewConsole = new ViewConsole(_viewArt);
    this._viewMenu = new ViewMenu(this._viewConsole, _viewArt);
    this._viewBattle = new ViewBattle(this._battle, this._viewConsole);
    this._viewSpecial = viewSpecial;
  }

  public gameOver(): void {
    this._viewBattle.showDefeated();
  }

  public battleRound(): void {
    this._viewBattle.showFighters();
    this._viewSpecial.showCharge(this._controllerSpecial.getCharge());
    this.playerChoice();
    this._controllerSpecial.charge();
    if (!this._battle.battleOver()) {
      this.enemyChoice();
    }
    this._viewBattle.battleStatus();
  }

  public playerChoice(): void {
    switch (this._viewMenu.battleMenu()) {
      case "1":
        this._viewBattle.showDamagePlayer();
        this._battle.attackEnemy();
        this._viewBattle.defenseEnemy();
        break;
      case "2":
        this._battle.defendEnemy();
        this._viewBattle.showDefendPlayer();
        break;
      case "3":
        this._controllerSpecial.atackSpecial(this._battle._player.classType);
        this._controllerSpecial.reset();
        break;
      default:
        this._viewBattle.showDamagePlayer();
        this._battle.attackEnemy();
        this._viewBattle.defenseEnemy();
    }
  }

  public enemyChoice(): void {
    const options: Array<string> = ["attack", "defend"];
    const index: number = Math.floor(Math.random() * options.length);
    switch (options[index]) {
      case "attack":
        this._viewBattle.showDamageEnemy();
        this._battle.attackPlayer();
        this._viewBattle.defensePlayer();
        break;
      case "defend":
        this._battle.defendPlayer();
        this._viewBattle.showDefendEnemy();
        break;
      default:
        this._viewBattle.showDamageEnemy();
        this._battle.attackPlayer();
        this._viewBattle.defensePlayer();
    }
  }
}
