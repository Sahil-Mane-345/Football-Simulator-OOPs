import { Player } from '../players/Player';
import { Team } from "../teams/Team";
import { ICommentry } from "./ICommentry";

export class CommentryFactory{
    private CommentryList : ICommentry[] = [];

    constructor(){}

    public addCommentry(commentry:ICommentry){
        this.CommentryList.push(commentry);
    }

    public publishMatchStarted(teamA: Team, teamB: Team){
        this.CommentryList.forEach( c => c.matchStarted(teamA, teamB));
    }

    public publishGoal(player:Player, team:Team){
        this.CommentryList.forEach( c => c.goal(player, team));
    }

    public publishSave(player:Player){
        this.CommentryList.forEach( c => c.save(player));
    }

    public publishPass(from:Player, to:Player){
        this.CommentryList.forEach( c => c.pass(from, to));
    }
    public publishMatchEnded(teamA: Team, teamB: Team, scoreA:number, scoreB:number){
        this.CommentryList.forEach( c => c.matchEnded(teamA, teamB, scoreA, scoreB));
    }
}