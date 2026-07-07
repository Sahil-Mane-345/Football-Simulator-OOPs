import { Player } from "./Player";

export class Midfielder extends Player{
    public assist(): void{
        console.log(`${this.getName()} is assisting`);
    }

    public longPass(): void{
        console.log(`${this.getName()} is making a long pass`);
    }

    public play(): void{
        this.run();
        this.longPass();
        this.assist();
    }
}