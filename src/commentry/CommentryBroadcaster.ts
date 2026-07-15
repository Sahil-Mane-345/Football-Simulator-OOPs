import { Player } from '../players/Player';
import { Team } from "../teams/Team";
import { ICommentry } from "./ICommentry";
import { ICommentryBroadcaster } from './ICommentryBroadcaster';

export class CommentryBroadcaster implements ICommentryBroadcaster{
    private commentryList : ICommentry[] = [];

    public addCommentry(commentry:ICommentry){
        this.commentryList.push(commentry);
    }

    public publishMatchStarted(teamA: Team, teamB: Team){
        this.commentryList.forEach( c => c.matchStarted(teamA, teamB));
    }

    public publishGoal(player:Player, team:Team){
        this.commentryList.forEach( c => c.goal(player, team));
    }

    public publishSave(player:Player){
        this.commentryList.forEach( c => c.save(player));
    }

    public publishPass(from:Player, to:Player){
        this.commentryList.forEach( c => c.pass(from, to));
    }
    public publishMatchEnded(teamA: Team, teamB: Team, scoreA:number, scoreB:number){
        this.commentryList.forEach( c => c.matchEnded(teamA, teamB, scoreA, scoreB));
    }
}