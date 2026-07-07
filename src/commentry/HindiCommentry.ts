import { Player } from "../players/Player";
import { Team } from "../teams/Team";
import { ICommentry } from "./ICommentry";

export class HindiCommentry implements ICommentry{
    matchStarted(teamA: Team, teamB: Team): void {
        console.log(`${teamA.getName()} और ${teamB.getName()} के बीच मैच शुरू हो गया है!`);
    }
    goal(player: Player, team: Team): void {
        console.log(`${player.getName()}, ${team.getName()} के लिए गोल करता है!`);
    }
    save(player: Player): void {
        console.log(`${player.getName()} एक बहुत अच्छा सेव करता है!`);
    }
    pass(from: Player, to: Player): void {
        console.log(`${from.getName()} ${to.getName()} को पास करता है!`);
    }
    matchEnded(teamA: Team, teamB: Team): void {
        console.log(`${teamA.getName()} और ${teamB.getName()} के बीच का मैच समाप्त हो गया है!`);
        console.log(`अंतिम स्कोर: ${teamA.getName()} ${teamA.getScore()} - ${teamB.getScore()} ${teamB.getName()}`);
    }
    
}