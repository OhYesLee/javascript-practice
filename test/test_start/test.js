/**
 * 3명의 플레이어가 있다
 * 1000번 동안 게임을 진행한다.
 * 5번 연승을 하는 플레이어가 이긴다.
 * 3명의 플레이어가 이긴 승률도 함께 나타내라.
 */

// 3명의 플레이어
let player = {
  a: { wins: 0, streak: 0, total: 0, winningGames: [] },
  b: { wins: 0, streak: 0, total: 0, winningGames: [] },
  c: { wins: 0, streak: 0, total: 0, winningGames: [] },
};

// 무작위로 가위 바위 보 선택하는 함수
function choose() {
  const choices = ["바위", "보", "가위"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// 개임 방법 정하기
function game(player1, player2) {
  let p1 = choose();
  let p2 = choose();

  if (p1 == p2) return null;
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

// 1000번 게임돌리기
