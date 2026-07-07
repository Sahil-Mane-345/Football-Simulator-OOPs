import { EnglishCommentry } from "./commentry/EnglishCommentry";
import { MarathiCommentry } from "./commentry/MarathiCommentry";
import { Match } from "./match/Match";
import { Goalkeeper } from "./players/Goalkeeper";
import { Midfielder } from "./players/Midfielder";
import { Striker } from "./players/Striker";
import { Team } from "./teams/Team";

const mumbai = new Team("Mumbai");

const mumbaiStriker = new Striker("Ajay", 10);

mumbai.addPlayer(mumbaiStriker);
mumbai.addPlayer(new Midfielder("Rahul", 8));
mumbai.addPlayer(new Goalkeeper("Suresh", 1));

const pune = new Team("Pune");

const puneStriker = new Striker("Rohit", 9);
pune.addPlayer(puneStriker);
pune.addPlayer(new Midfielder("Ganesh", 89));
pune.addPlayer(new Goalkeeper("Ramesh", 77));

const commentry = new MarathiCommentry();

const match = new Match(mumbai, pune, commentry);

match.start();

setTimeout(()=>{
    match.goal(mumbaiStriker, mumbai);
}, 2000);

setTimeout(()=>{
    match.goal(puneStriker, pune);
}, 4000);

setTimeout(()=>{
    match.goal(mumbaiStriker, mumbai);
}, 6000);

setTimeout(()=>{
    match.goal(mumbaiStriker, mumbai);
}, 8000);


setTimeout(()=>{
    match.end();
}, 10000);