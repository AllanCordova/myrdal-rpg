import readLineSync from "readline-sync";
import ViewConsole from "./ViewConsole";
import chalk from "chalk";
import ViewArt from "./ViewArt";

export default class ViewMenu {
  public constructor(
    private _viewConsole: ViewConsole,
    private _viewArt: ViewArt
  ) {}

  public mainMenu(): string {
    console.clear();
    const text: string = `${chalk.bold.cyan(
      `${this._viewConsole.alignText("", 10)}"The Myrdal Ultimate"`
    )}\n\n${chalk.red(this._viewArt.menuArt())}\n${chalk.magenta(
      `\n\n1.Iniciar\n2.Sobre\n3.Sair\n`
    )}`;
    this._viewConsole.showBorder(text);
    return readLineSync.question(
      chalk.yellow(
        "se quiser jogar so apertar 1 (por favor faça isso mestre) ... "
      )
    );
  }

  public showAbout(): void {
    console.log(
      chalk.magenta(
        `Este jogo foi desenvolvido no 3 período de SI, orientado a objetos, este projeto e escalavel e tem uma arquitetura robusta`
      )
    );
  }

  public showClosedGame(): void {
    console.log(
      chalk.red(`Obrigado por participar desse projeto! volte sempre.`)
    );
  }

  public battleMenu(): string {
    const text: string = `Seu turno mestre!\n1.Atacar\n2.Defender\n3.Special (não tente usar com a barra incompleta)`;
    this._viewConsole.showBorder(text);
    return readLineSync.question(
      chalk.yellow(`vamos fazer o que essa rodada mestre? ... `)
    );
  }

  public personMenu(): string {
    const text: string = `Escolha de classe:${chalk.greenBright(
      `\n1.Anjo\n2.Guerreiro\n3.Mago`
    )}`;
    this._viewConsole.showBorder(text);
    return readLineSync.question(chalk.yellow(`vamos com o que ... `));
  }

  public playerName(): string {
    console.clear();
    return readLineSync.question(
      chalk.magenta(`Escolha um nome! para seu personagem mestre! ... `)
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
