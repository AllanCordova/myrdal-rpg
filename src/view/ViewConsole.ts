import readLineSync from "readline-sync";

export default class ViewConsole {
  public showBorder(): void {
    console.log(`----------------------------------------`);
  }

  public isRight(): void {
    readLineSync.question(`podemos continuar mestre? ... `);
  }

  public nextRound(): void {
    readLineSync.question(`precione ...`);
  }

  public alignText(text: string, length: number): string {
    return text + " ".repeat(Math.max(0, length - text.length));
  }
}
