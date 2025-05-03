import readLineSync from "readline-sync";
import ViewConsole from "./ViewConsole";
import chalk from "chalk";

export default class ViewMenu {
  public constructor(private _viewConsole: ViewConsole) {}

  public mainMenu(): string {
    console.clear();
    this._viewConsole.showBorder();
    console.log(
      `${chalk.bold.cyan(`"The Myrdal Ultimate"`)}${chalk.magenta(
        `\n\n1.Iniciar\n2.Sobre\n3.Sair\n`
      )}`
    );
    this._viewConsole.showBorder();
    return readLineSync.question(
      chalk.yellow(
        "se quiser jogar so apertar 1 (por favor faça isso mestre) ... "
      )
    );
  }

  public battleMenu(): string {
    this._viewConsole.showBorder();
    console.log(`Seu turno mestre!\n1.Atacer\n2.Defender`);
    this._viewConsole.showBorder();
    return readLineSync.question(
      chalk.yellow(`vamos fazer o que essa rodada mestre? ... `)
    );
  }

  public personMenu(): string {
    this._viewConsole.showBorder();
    console.log(`Choice class Type:\n1.Angel\n2.Fighter\n3.Mage`);
    this._viewConsole.showBorder();
    return readLineSync.question(
      chalk.yellow(`qual classe você escolhe? isso diz muito sobre você ... `)
    );
  }

  public playerName(): string {
    console.clear();
    return readLineSync.question(
      chalk.magenta(`Escolha um nome! para seu perssonagem mestre! ... `)
    );
  }

  public nameValid(): void {
    readLineSync.question(
      chalk.red(`preciso de um nome, para te chamar mestre! ... `)
    );
  }

  public fluxValid(): void {
    readLineSync.question(
      chalk.magenta(`"você ta de brincadeira? isso não esta nas opções!" ... `)
    );
  }
}
