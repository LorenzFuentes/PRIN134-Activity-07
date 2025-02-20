let round = 1;
const attempts = 5;
const successRate = 0.5; 

class player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
}

const players = [
    new player( "James"),
    new player( "Curry"),
    new player("Jordan"),
    new player("Bryant"),
    new player("Durant")
];

function rate() {
    return Math.random(); 
}

function game(players) {
    players.forEach(player => {
        player.score = 0; 
        for (let i = 0; i < attempts; i++) {
            if (rate() > successRate) {
                player.score++;
            }
        }
    });
}

function gameResults(players) {
    console.log(`🏀 Round ${round}! \n`)
    players.sort((a, b) => b.score - a.score);
    players.forEach((player, index) => {
        console.log(`${index + 1}. ${player.name}: ${player.score} points`);
    });

    let winner = players[0].score;
    let tieBreaker = players.filter(player => player.score === winner);

    if (tieBreaker.length > 1) {
        console.log(`\n 🔥 Tiebreaker needed between: ${tieBreaker.map(players => players.name).join(", ")} \n`);
        round = round + 1;
        game(tieBreaker);
        return gameResults(tieBreaker);
    } else {
        console.log(`\n 🏆 The champion is ${players[0].name} with ${players[0].score} points!`);
    }
}
console.log("🏆 Ranking after this round!");
game(players);
gameResults(players);