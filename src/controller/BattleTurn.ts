import Battle from "../model/Battle";
import ViewMenu from "../view/ViewMenu";
import ViewBattle from "../view/ViewBattle";
import ViewConsole from "../view/ViewConsole";
import ControllerSpecial from "./ControllerSpecial";
import ViewSpecial from "../view/ViewSpecial";
import ViewArt from "../view/ViewArt";
import { BattleState } from "../enum/BattleState";

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
    viewArt: ViewArt
  ) {
    this._battle = battle;
    this._controllerSpecial = controllerSpecial;
    this._viewConsole = new ViewConsole(viewArt);
    this._viewMenu = new ViewMenu(this._viewConsole, viewArt);
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

  private playerChoice(): void {
    switch (this._viewMenu.battleMenu()) {
      case BattleState.attack:
        this.playerChoiceAttack();
        break;
      case BattleState.defend:
        this.playerChoideDefend();
        break;
      case BattleState.atackSpecial:
        this._controllerSpecial.atackSpecial(this._battle._player.classType);
        this._controllerSpecial.reset();
        break;
      default:
        this.playerChoiceAttack();
    }
  }

  private enemyChoice(): void {
    const options: Array<string> = ["attack", "defend"];
    const index: number = Math.floor(Math.random() * options.length);
    switch (options[index]) {
      case "attack":
        this.enemyChoiceAttack();
        break;
      case "defend":
        this.enemyChoiceDefend();
        break;
    }
  }

  private playerChoiceAttack(): void {
    this._viewBattle.showDamagePlayer();
    this._battle.attackEnemy();
    this._viewBattle.defenseEnemy();
  }

  private playerChoideDefend(): void {
    this._battle.defendEnemy();
    this._viewBattle.showDefendPlayer();
  }

  private enemyChoiceAttack(): void {
    this._viewBattle.showDamageEnemy();
    this._battle.attackPlayer();
    this._viewBattle.defensePlayer();
  }

  private enemyChoiceDefend(): void {
    this._battle.defendPlayer();
    this._viewBattle.showDefendEnemy();
  }
}
