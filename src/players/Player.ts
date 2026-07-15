export abstract class Player{
    constructor(
        protected readonly name: string,
        protected readonly jerseyNumber: number,
    ){}

    public getName(): string{
        return this.name;
    }

    public getJerseyNumber(): number{
        return this.jerseyNumber;
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
    
    public abstract play(): void;
}