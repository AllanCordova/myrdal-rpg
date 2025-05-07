import { read, readFileSync } from "fs";
import chalk from "chalk";

export default class ViewArt {
  public menuArt(): string {
    const art: string = readFileSync("assets/menu.txt", "utf-8");
    return art;
  }

  public failArt(): string[] {
    const art: string = chalk.green(readFileSync("assets/fail.txt", "utf-8"));
    return art.split("\n");
  }

  public demonArt(): string[] {
    const art: string = chalk.magenta(
      readFileSync("assets/demon.txt", "utf-8")
    );
    return art.split("\n");
  }

  public mageArt(): string {
    const art: string = chalk.blue(readFileSync("assets/mage.txt", "utf-8"));
    return art;
  }
}
