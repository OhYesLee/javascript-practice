// Define the players
let players = {
  a: { wins: 0, streak: 0, total: 0, winningGames: [] },
  b: { wins: 0, streak: 0, total: 0, winningGames: [] },
  c: { wins: 0, streak: 0, total: 0, winningGames: [] },
};

// Randomly choose between rock, paper, scissors
function choose() {
  const choices = ["바위", "보", "가위"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Determine the winner of a single game
function game(player1, player2) {
  let p1 = choose();
  let p2 = choose();

  if (p1 === p2) return null; // tie
  if (
    (p1 === "바위" && p2 === "가위") ||
    (p1 === "가위" && p2 === "보") ||
    (p1 === "보" && p2 === "바위")
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
  players[winner].winningGames.push(i + 1); // Record the game number when a player wins
  players[player1 === winner ? player2 : player1].streak = 0;
  players[player1].total++;
  players[player2].total++;

  if (players[winner].streak == 5) {
    console.log(`Player ${winner} won 5 games in a row!`);
    break;
  }
}

// Display odds and winning game numbers
console.log(
  "Player a odds: " +
    (players.a.wins / players.a.total).toFixed(2) +
    ". Winning games: " +
    players.a.winningGames.join(", ")
);
console.log(
  "Player b odds: " +
    (players.b.wins / players.b.total).toFixed(2) +
    ". Winning games: " +
    players.b.winningGames.join(", ")
);
console.log(
  "Player c odds: " +
    (players.c.wins / players.c.total).toFixed(2) +
    ". Winning games: " +
    players.c.winningGames.join(", ")
);
