import { Player } from "./Player";

export class Goalkeeper extends Player{
    public save(): void{
        console.log(`${this.getName()} is saving`);
    }

    public throwBall(): void{
        console.log(`${this.getName()} is throwing the ball`);
    }

    public play(): void{
        this.run();
        this.save();
        this.celebrate();
        this.throwBall();
    }
}