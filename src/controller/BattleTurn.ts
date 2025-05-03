import Battle from "../model/Battle";
import ViewMenu from "../view/ViewMenu";
import ViewBattle from "../view/ViewBattle";
import ViewConsole from "../view/ViewConsole";

export default class BattleTurn {
  private _battle: Battle;
  private _viewMenu: ViewMenu;
  private _viewBattle: ViewBattle;
  private _viewConsole: ViewConsole;

  public constructor(battle: Battle) {
    this._battle = battle;
    this._viewConsole = new ViewConsole();
    this._viewMenu = new ViewMenu(this._viewConsole);
    this._viewBattle = new ViewBattle(this._battle, this._viewConsole);
  }

  public gameOver(): void {
    this._viewBattle.showDefeated();
  }

  public battleRound(): void {
    this._viewBattle.showFighters();
    this.playerChoice();
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
