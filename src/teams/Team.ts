import { Player } from "../players/Player"

export class Team{
    private players: Player[] = [];

    constructor(
        private readonly name: string,
    ){}

    public getName(): string{
        return this.name;
    }

    public addPlayer(player: Player): void{
        this.players.push(player);
    }

    public getPlayers(): Player[]{
        return this.players;
    }

}