/**
 *이 JavaScript 코드는 3명의 플레이어가 가위바위보 게임을 하는데 있어서 가장 먼저 5번 연속 이긴 사람이 최종 승자가 되는 시나리오를 시뮬레이션합니다. 아래에 각 부분의 상세한 설명이 있습니다:
플레이어 정의: 객체 players는 플레이어 a, b, c를 키로 가지며, 각 키는 이긴 횟수(wins), 연속 이긴 횟수(streak), 그리고 게임에 참여한 총 횟수(total)를 값으로 가지는 객체입니다.

무작위 선택 함수 (choose()): 이 함수는 가위, 바위, 보 중 하나를 무작위로 선택해 반환합니다.

게임 함수 (game(player1, player2)): 이 함수는 두 플레이어가 진행하는 한 판을 시뮬레이션합니다. 각 플레이어는 choose() 함수를 통해 가위, 바위, 보 중 하나를 선택하고, 그 결과를 바탕으로 승자를 결정합니다. 
비긴 경우는 null을 반환합니다.

1000판 시뮬레이션: 여기서는 1000판의 게임을 시뮬레이션합니다. 각 판마다 두 플레이어를 무작위로 선택하고, 그들 사이에서 한 판을 진행합니다. 비긴 경우에는 현재 반복을 스킵하고 다음 판으로 넘어갑니다. 
한 플레이어가 5번 연속으로 이기면, 그 플레이어가 최종 승자가 되고, 게임은 종료됩니다.

승률 출력: 마지막으로 각 플레이어의 승률 (이긴 판 수 / 총 참여한 판 수)을 출력합니다.

따라서, 이 코드는 플레이어들 사이에서 가위바위보 게임을 시뮬레이션하고, 플레이어 각각의 승률과 가장 먼저 5번 연속으로 이긴 플레이어를 결정합니다. 
이 코드는 각 판이 독립적이고 플레이어의 선택이 무작위로 이루어진다는 가정 하에 동작합니다.
 */

// Define the players
let players = {
  a: { wins: 0, streak: 0, total: 0 },
  b: { wins: 0, streak: 0, total: 0 },
  c: { wins: 0, streak: 0, total: 0 },
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
