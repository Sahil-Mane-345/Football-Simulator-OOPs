export abstract class Player{
    constructor(
        protected readonly name: string,
        protected readonly number: number,
    ){}

    public getName(): string{
        return this.name;
    }

    public getNumber(): number{
        return this.number;
    }

    public run(): void{
        console.log(`${this.name} is running`);
    }

    public pass(): void{
        console.log(`${this.name} is passing`);
    }

    public celebrate(): void{
        console.log(`${this.name} is celebrating`);
    }
}