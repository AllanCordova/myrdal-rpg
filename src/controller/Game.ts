import ViewMenu from "../view/ViewMenu";
import ControllerPerson from "./ControllerPerson";
import ControllerBattle from "./ContollerBattle";

export default class Game {
  private _viewMenu: ViewMenu;
  private _controllerPerson: ControllerPerson;
  private _controllerBattle!: ControllerBattle;

  public constructor() {
    this._viewMenu = new ViewMenu();
    this._controllerPerson = new ControllerPerson();
  }

  public startGame(): void {
    switch (this._viewMenu.mainMenu()) {
      case "1":
        this._controllerPerson.startPersons();
        const player = this._controllerPerson._player;
        const enemy = this._controllerPerson._enemy;
        this._controllerBattle = new ControllerBattle(player, enemy);
        this._controllerBattle.startBattle();
        console.log(this._controllerBattle.endRound());
        break;
      case "2":
        break;
      case "3":
        break;
      default:
        console.log("it is not value valid!");
    }
  }
}
