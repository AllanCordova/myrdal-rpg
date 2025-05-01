import readLineSync from "readline-sync";

export default class ViewMenu {
  public mainMenu(): string {
    console.log(`Myrdal\n1.start\n2.about\n3.exit`);
    return readLineSync.question("Whats your choice ... ");
  }
}
