import { ICommentry } from "../commentry/ICommentry";
import { Team } from "../teams/Team";

export class Match{
    
    constructor(private teamA: Team, private teamB: Team, private commentry: ICommentry){}

    public start(): void{
        this.commentry.matchStarted(this.teamA, this.teamB);
    }

    public goal(player: any, team: Team): void{
        team.addGoal();
        this.commentry.goal(player, team);
    }

    public end(): void{
        this.commentry.matchEnded(this.teamA, this.teamB);
    }

}