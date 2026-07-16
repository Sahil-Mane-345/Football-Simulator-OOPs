# ⚽ Football Match Simulation

A TypeScript project that simulates a football match while demonstrating the **Observer Design Pattern**.

The application models football teams, players, and match events such as goals, passes, saves, and match completion. Whenever an event occurs during the match, all registered commentary systems are automatically notified and provide live commentary in different languages.

---

## ✨ Features

- Simulates a football match between two teams
- Supports multiple player roles
  - Striker
  - Midfielder
  - Defender
  - Goalkeeper
- Tracks match score
- Live match event notifications
- Multiple commentary languages
  - English
  - Hindi
  - Marathi
- Demonstrates loose coupling using the Observer Pattern

---

# 🏗️ Project Structure

```
src
│
├── commentry
│   ├── CommentryBroadcaster.ts
│   ├── ICommentry.ts
│   ├── ICommentryBroadcaster.ts
│   ├── EnglishCommentry.ts
│   ├── HindiCommentry.ts
│   └── MarathiCommentry.ts
│
├── match
│   └── Match.ts
│
├── players
│   ├── Player.ts
│   ├── Striker.ts
│   ├── Midfielder.ts
│   ├── Defender.ts
│   └── Goalkeeper.ts
│
├── teams
│   └── Team.ts
│
└── index.ts
```

---

# ⚙️ Application Workflow

```
                Start Application
                        │
                        ▼
                 Create Teams
                        │
                        ▼
                  Add Players
                        │
                        ▼
        Register Commentary Languages
                        │
                        ▼
                  Create Match
                        │
                        ▼
                  Start Match
                        │
                        ▼
             Match Events Occur
        (Goal • Pass • Save • End)
                        │
                        ▼
          Notify Registered Commentaries
                        │
        ┌───────────┬───────────┬───────────┐
        ▼           ▼           ▼
    English      Hindi      Marathi
                        │
                        ▼
          Display Match Commentary
                        │
                        ▼
               Show Final Score
```

---

# 🚀 Execution Flow

### 1. Create Teams

Two football teams are created.

```
Mumbai
Pune
```

---

### 2. Add Players

Players are assigned to their respective teams.

Example roles:

- Striker
- Midfielder
- Defender
- Goalkeeper

---

### 3. Register Commentary Systems

Different commentary implementations are registered with the broadcaster.

```
EnglishCommentry

HindiCommentry

MarathiCommentry
```

---

### 4. Create Match

A `Match` object is created using

- Team A
- Team B
- Commentary Broadcaster

---

### 5. Start Match

The match begins.

```
match.start()
```

All commentary systems receive the **Match Started** event.

---

### 6. Match Events

During gameplay the following events may occur:

- Goal
- Pass
- Save

Each event is automatically forwarded to every registered commentary implementation.

---

### 7. End Match

```
match.end()
```

The final score is published and displayed by every commentary language.

---

# 🧩 Class Responsibilities

## Match

Responsible for

- Managing the match lifecycle
- Tracking scores
- Triggering match events
- Delegating event notifications

---

## CommentryBroadcaster

Acts as the event publisher.

Responsibilities

- Maintains commentary subscribers
- Publishes match events
- Notifies all registered commentary systems

---

## ICommentry

Observer interface implemented by every commentary language.

Methods

- matchStarted()
- goal()
- save()
- pass()
- matchEnded()

---

## Commentary Implementations

- EnglishCommentry
- HindiCommentry
- MarathiCommentry

Each implementation provides commentary for the same match events in its own language.

---

## Team

Represents a football team.

Responsibilities

- Store team information
- Manage players

Methods

- addPlayer()
- getPlayers()
- getName()

---

## Player

Abstract base class for all player types.

Common functionality

- run()
- pass()
- celebrate()

Concrete implementations

- Striker
- Midfielder
- Defender
- Goalkeeper

Each player provides its own implementation of

```
play()
```

---

# 📖 Observer Pattern Workflow

```
Match
   │
   │ Goal Scored
   ▼
CommentryBroadcaster
   │
   ├────────► EnglishCommentry
   ├────────► HindiCommentry
   └────────► MarathiCommentry
```

The `Match` class does not know how commentary is displayed. It simply publishes events to the `CommentryBroadcaster`, which forwards them to all registered observers. This allows new commentary languages to be added without modifying existing match logic.

---

# 💡 Advantages

- Follows the Observer Design Pattern
- Loose coupling between match logic and commentary
- Easy to add new commentary languages
- Easy to maintain and extend
- Promotes interface-based programming
- Demonstrates the Open/Closed Principle

---

# 🔮 Possible Enhancements

- Player substitutions
- Yellow and red cards
- Assist events
- Penalty shootout
- Match statistics
- Live scoreboard
- Additional commentary languages
- Match timer
- Tournament support

---

# 🖥️ Sample Output

```
Mumbai और Pune के बीच मैच शुरू हो गया है!
हे Mumbai आणि Pune यांच्यातील मैच सुरू झाले आहे!
The match between Mumbai and Pune has started!
Ajay, Mumbai के लिए गोल करता है!
Ajay Mumbai साठी गोल करतो!
Ajay scores for Mumbai!
Rohit, Pune के लिए गोल करता है!
Rohit Pune साठी गोल करतो!
Rohit scores for Pune!
Ajay, Mumbai के लिए गोल करता है!
Ajay Mumbai साठी गोल करतो!
Ajay scores for Mumbai!
Ajay, Mumbai के लिए गोल करता है!
Ajay Mumbai साठी गोल करतो!
Ajay scores for Mumbai!
Mumbai और Pune के बीच का मैच समाप्त हो गया है!
अंतिम स्कोर: Mumbai 3 - 1 Pune
मैच Mumbai ने जीता
हे Mumbai आणि Pune यांच्यातील मैच समाप्त झाले आहे!
अंतिम स्कोर: Mumbai 3 - 1 Pune
Mumbai सामन्यांमध्ये जिंकलेले आहे 
The match between Mumbai and Pune has ended!
Final Score: Mumbai 3 - 1 Pune
```

---

# 🛠️ Technologies Used

- TypeScript
- Node.js

---

# 📚 Design Pattern

**Observer (Publisher–Subscriber) Pattern**

The project demonstrates how one subject (`CommentryBroadcaster`) can notify multiple observers (`EnglishCommentry`, `HindiCommentry`, and `MarathiCommentry`) whenever a match event occurs, without creating tight coupling between the match logic and commentary implementations.