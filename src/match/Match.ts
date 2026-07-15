import { ICommentry } from "../commentry/ICommentry";
import { Team } from "../teams/Team";
import { CommentryBroadcaster } from '../commentry/CommentryBroadcaster';
import { Player } from "../players/Player";
import { ICommentryBroadcaster } from "../commentry/ICommentryBroadcaster";

export class Match{
    private scoreA: number = 0;
    private scoreB: number = 0;
    private isMatchEnded: boolean = false;
    constructor(private teamA: Team, private teamB: Team, private commentryBroadcaster: ICommentryBroadcaster){}

    public start(): void{
        this.commentryBroadcaster.publishMatchStarted(this.teamA, this.teamB);
    }

    public goalByTeamA(player: Player): void{
        if(!this.isMatchEnded){
            this.scoreA++;
            this.commentryBroadcaster.publishGoal(player, this.teamA);
        }
    }

    public goalByTeamB(player: Player): void{
        if(!this.isMatchEnded){
            this.scoreB++;
            this.commentryBroadcaster.publishGoal(player, this.teamB);
        }
    }

    public end(): void{
        this.isMatchEnded = true;
        this.commentryBroadcaster.publishMatchEnded(this.teamA, this.teamB, this.scoreA, this.scoreB);
    }

}