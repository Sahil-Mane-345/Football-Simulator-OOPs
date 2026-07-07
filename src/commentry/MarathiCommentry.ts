import { Player } from "../players/Player";
import { Team } from "../teams/Team";
import { ICommentry } from "./ICommentry";

export class MarathiCommentry implements ICommentry{
    matchStarted(teamA: Team, teamB: Team): void {
        console.log(`हे ${teamA.getName()} आणि ${teamB.getName()} यांच्यातील मैच सुरू झाले आहे!`);
    }
    goal(player: Player, team: Team): void {
        console.log(`${player.getName()} ${team.getName()} साठी गोल करतो!`);
    }
    save(player: Player): void {
        console.log(`${player.getName()} ने एक उत्कृष्ट बचाव केला!`);
    }
    pass(from: Player, to: Player): void {
        console.log(`${from.getName()} हे ${to.getName()} यांना पास करतात!`);
    }
    matchEnded(teamA: Team, teamB: Team): void {
        console.log(`हे ${teamA.getName()} आणि ${teamB.getName()} यांच्यातील मैच समाप्त झाले आहे!`);
        console.log(`अंतिम स्कोर: ${teamA.getName()} ${teamA.getScore()} - ${teamB.getScore()} ${teamB.getName()}`);
    }
    
}