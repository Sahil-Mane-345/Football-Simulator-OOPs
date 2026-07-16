import { CommentryBroadcaster } from "./commentry/CommentryBroadcaster";
import { EnglishCommentry } from "./commentry/EnglishCommentry";
import { HindiCommentry } from "./commentry/HindiCommentry";
import { MarathiCommentry } from "./commentry/MarathiCommentry";
import { Match } from "./match/Match";
import { Defender } from "./players/Defender";
import { Goalkeeper } from "./players/Goalkeeper";
import { Midfielder } from "./players/Midfielder";
import { Striker } from "./players/Striker";
import { Team } from "./teams/Team";

const mumbai = new Team("Mumbai");

const mumbaiStriker = new Striker("Ajay", 10);

mumbai.addPlayer(mumbaiStriker);
mumbai.addPlayer(new Midfielder("Rahul", 8));
mumbai.addPlayer(new Goalkeeper("Suresh", 1));
mumbai.addPlayer(new Defender("Gajanan", 88));

const pune = new Team("Pune");

const puneStriker = new Striker("Rohit", 9);
pune.addPlayer(puneStriker);
pune.addPlayer(new Midfielder("Ganesh", 89));
pune.addPlayer(new Goalkeeper("Ramesh", 77));
pune.addPlayer(new Defender("Rajesh", 90));

const commentryBroadcaster = new CommentryBroadcaster();

commentryBroadcaster.addCommentry(new HindiCommentry());
commentryBroadcaster.addCommentry(new MarathiCommentry());
commentryBroadcaster.addCommentry(new EnglishCommentry());


const match = new Match(mumbai, pune, commentryBroadcaster);

match.start();

setTimeout(()=>{
    match.goalByTeamA(mumbaiStriker);
}, 2000);

setTimeout(()=>{
    match.goalByTeamB(puneStriker);
}, 4000);

setTimeout(()=>{
    match.goalByTeamA(mumbaiStriker);
}, 6000);

setTimeout(()=>{
    match.goalByTeamA(mumbaiStriker);
}, 8000);


setTimeout(()=>{
    match.end();
}, 10000);