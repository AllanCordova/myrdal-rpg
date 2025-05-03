import Battle from "../model/Battle";
import ViewMenu from "../view/ViewMenu";
import ViewBattle from "../view/ViewBattle";

export default class BattleTurn {
  private _battle: Battle;
  private _viewMenu: ViewMenu;
  private _viewBattle: ViewBattle;

  public constructor(battle: Battle) {
    this._battle = battle;
    this._viewMenu = new ViewMenu();
    this._viewBattle = new ViewBattle(this._battle);
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
  }

  public playerChoice(): void {
    switch (this._viewMenu.battleMenu()) {
      case "1":
        this._viewBattle.showAtackPlayer();
        this._battle.attackEnemy();
        break;
      case "2":
        this._battle.defendEnemy();
        break;
      default:
        this._battle.attackEnemy();
    }
  }

  public enemyChoice(): void {
    const options: Array<string> = ["attack", "defend"];
    const index: number = Math.floor(Math.random() * options.length);
    switch (options[index]) {
      case "attack":
        this._viewBattle.showAtackEnemy();
        this._battle.attackPlayer();
      case "defend":
        this._battle.defendPlayer();
      default:
        this._battle.attackPlayer();
    }
  }
}
