import readLineSync from "readline-sync";

export default class ViewMenu {
  public mainMenu(): string {
    console.log(`Myrdal\n1.start\n2.about\n3.exit`);
    return readLineSync.question("Whats your choice ... ");
  }

  public battleMenu(): string {
    console.log(`Your choice!\n1.Attack\n2.Defend`);
    return readLineSync.question(`Whats your choice ... `);
  }

  public personMenu(): string {
    console.log(`Choice class Type:\n1.Angel\n2.Fighter\n3.Mage`);
    return readLineSync.question(`Whats your choice ... `);
  }

  public playerName(): string {
    return readLineSync.question("Whats your person name ... ");
  }
}
