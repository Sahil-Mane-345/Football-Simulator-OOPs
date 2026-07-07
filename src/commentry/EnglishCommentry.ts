import { Player } from "../players/Player";
import { Team } from "../teams/Team";
import { ICommentry } from "./ICommentry";

export class EnglishCommentry implements ICommentry{
    matchStarted(teamA: Team, teamB: Team): void {
        console.log(`The match between ${teamA.getName()} and ${teamB.getName()} has started!`);
    }
    goal(player: Player, team: Team): void {
        console.log(`${player.getName()} scores for ${team.getName()}!`);
    }
    save(player: Player): void {
        console.log(`${player.getName()} makes a great save!`);
    }
    pass(from: Player, to: Player): void {
        console.log(`${from.getName()} passes to ${to.getName()}!`);
    }
    matchEnded(teamA: Team, teamB: Team, scoreA:number, scoreB: number): void {
        console.log(`The match between ${teamA.getName()} and ${teamB.getName()} has ended!`);
        console.log(`Final Score: ${teamA.getName()} ${scoreA} - ${scoreB} ${teamB.getName()}`);
    }
    
}