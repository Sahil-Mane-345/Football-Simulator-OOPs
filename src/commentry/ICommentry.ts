import { Player } from "../players/Player";
import { Team } from "../teams/Team";

export interface ICommentry{
    matchStarted(teamA: Team, teamB: Team): void;

    goal(player:Player, team:Team): void;

    save(player:Player) : void;

    pass(from:Player, to:Player): void;

    matchEnded(teamA: Team, teamB: Team): void;
}