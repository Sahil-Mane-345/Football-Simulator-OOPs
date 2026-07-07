import { Player } from "./Player";

export class Striker extends Player{

    public shoot(): void{
        console.log(`${this.getName()} is shooting`);
    }

    public play(): void{
        this.run();
        this.pass();
        this.shoot();
        this.celebrate();
    }
}