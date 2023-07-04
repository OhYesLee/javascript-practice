// Define the players
let players = {
  a: { wins: 0, streak: 0, total: 0 },
  b: { wins: 0, streak: 0, total: 0 },
  c: { wins: 0, streak: 0, total: 0 },
};

// Randomly choose between rock, paper, scissors
function choose() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Determine the winner of a single game
function game(player1, player2) {
  let p1 = choose();
  let p2 = choose();

  if (p1 === p2) return null; // tie
  if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    return player1;
  } else {
    return player2;
  }
}

// Simulate 1000 games
for (let i = 0; i < 1000; i++) {
  const playerNames = Object.keys(players);
  const player1 = playerNames[Math.floor(Math.random() * playerNames.length)];
  let player2;
  do {
    player2 = playerNames[Math.floor(Math.random() * playerNames.length)];
  } while (player2 === player1);

  let winner = game(player1, player2);

  // If it's a draw, we skip the current iteration and go for the next game
  if (winner === null) continue;

  players[winner].wins++;
  players[winner].streak++;
  players[player1 === winner ? player2 : player1].streak = 0;
  players[player1].total++;
  players[player2].total++;

  if (players[winner].streak == 5) {
    console.log(`Player ${winner} won 5 games in a row!`);
    break;
  }
}

// Display odds
console.log("Player a odds: " + (players.a.wins / players.a.total).toFixed(2));
console.log("Player b odds: " + (players.b.wins / players.b.total).toFixed(2));
console.log("Player c odds: " + (players.c.wins / players.c.total).toFixed(2));
