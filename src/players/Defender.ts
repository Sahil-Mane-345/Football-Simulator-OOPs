import { Player } from "./Player";

export class Defender extends Player{
    public tackle(): void{
        console.log(`${this.getName()} is throwing the ball`);
    }

    public play():void{
        this.run();
        this.tackle();
        this.celebrate();
    }
}