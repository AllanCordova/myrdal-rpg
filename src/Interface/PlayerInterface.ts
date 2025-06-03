export interface PlayerContract {
  startAngel(name: string): void;
  startFighter(name: string): void;
  startMage(name: string): void;
  getStatus(): string;
}
