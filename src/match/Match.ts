import { ICommentry } from "../commentry/ICommentry";
import { Team } from "../teams/Team";

export class Match{
    private scoreA: number = 0;
    private scoreB: number = 0;
    constructor(private teamA: Team, private teamB: Team, private commentry: ICommentry){}

    public start(): void{
        this.commentry.matchStarted(this.teamA, this.teamB);
    }

    public goalByTeamA(player: any): void{
        this.scoreA++;
        this.commentry.goal(player, this.teamA);
    }

    public goalByTeamB(player: any): void{
        this.scoreB++;
        this.commentry.goal(player, this.teamB);
    }

    public end(): void{
        this.commentry.matchEnded(this.teamA, this.teamB, this.scoreA, this.scoreB);
    }

}