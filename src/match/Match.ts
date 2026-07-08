import { ICommentry } from "../commentry/ICommentry";
import { Team } from "../teams/Team";
import { CommentryFactory } from '../commentry/CommentryFactory';

export class Match{
    private scoreA: number = 0;
    private scoreB: number = 0;
    constructor(private teamA: Team, private teamB: Team, private commentryFactory: CommentryFactory){}

    public start(): void{
        this.commentryFactory.publishMatchStarted(this.teamA, this.teamB);
    }

    public goalByTeamA(player: any): void{
        this.scoreA++;
        this.commentryFactory.publishGoal(player, this.teamA);
    }

    public goalByTeamB(player: any): void{
        this.scoreB++;
        this.commentryFactory.publishGoal(player, this.teamB);
    }

    public end(): void{
        this.commentryFactory.publishMatchEnded(this.teamA, this.teamB, this.scoreA, this.scoreB);
    }

}