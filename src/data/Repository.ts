import { IEntity } from "Interface/EntityInterface";
  
  export default class Repository<T extends IEntity> {
    private _elements: T[] = [];

    public set elements(value: T[]){
        this.elements = value
    }
  
    public add(element: T): void {
      this._elements.push(element);
    }
  
    public findById(id: number | string): T | undefined {
      return this._elements.find(element => element.id === id);
    }
  
    public getAll(): T[] {
      return this._elements;
    }
  
    public count(): number {
      return this._elements.length;
    }
  }