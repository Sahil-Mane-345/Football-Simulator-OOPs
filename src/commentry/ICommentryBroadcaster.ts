import { Player } from "../players/Player";
import { Team } from "../teams/Team";
import { ICommentry } from "./ICommentry";

export interface ICommentryBroadcaster{
    addCommentry(commentry:ICommentry):void;
    publishMatchStarted(teamA:Team, teamB:Team):void;
    publishGoal(player:Player, team:Team):void;
    publishSave(player:Player):void;
    publishPass(from:Player, to:Player):void;
    publishMatchEnded(teamA: Team, teamB: Team, scoreA:number, scoreB:number):void;
}