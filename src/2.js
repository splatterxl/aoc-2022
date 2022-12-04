const opponent = { A: 'rock', B: 'paper', C: 'scissors' };
const me = { X: 'rock', Y: 'paper', Z: 'scissors' };
const me_new = { X: 'loss', Y: 'draw', Z: 'won' };

const scoresShape = { X: 1, Y: 2, Z: 3 };
const scoresOutcome = {
	loss: 0,
	draw: 3,
	won: 6
};

const outcomes = {
	AX: 'draw',
	AY: 'won',
	AZ: 'loss',
	BX: 'loss',
	BY: 'draw',
	BZ: 'won',
	CX: 'won',
	CY: 'loss',
	CZ: 'draw'
};
const matches = {
	A_draw: 'X',
	A_won: 'Y',
	A_loss: 'Z',
	B_loss: 'X',
	B_draw: 'Y',
	B_won: 'Z',
	C_won: 'X',
	C_loss: 'Y',
	C_draw: 'Z'
};

function getScore(chose, outcome) {
	return scoresShape[chose] + scoresOutcome[outcome];
}

const fs = require('fs');

const strategy = fs
	.readFileSync('./inputs/2.txt', 'utf8')
	.trim()
	.split('\n')
	.map((v) => v.split(' '));

let total = 0;

for (const game of strategy) {
	const score = getScore(game[1], outcomes[game.join('')]);

	total += score;

	// console.log(
	// 	'opponent plays',
	// 	opponent[game[0]],
	// 	'| i play',
	// 	me[game[1]],
	// 	'= outcome is',
	// 	outcomes[game.join('')],
	// 	'= score is',
	// 	score
	// );
}

console.log();
console.log('total score part one =', total);

total = 0;

for (const game of strategy) {
	let me = matches[`${game[0]}_${me_new[game[1]]}`],
		outcome = me_new[game[1]];

	const score = getScore(me, outcome);

	total += score;

	console.log(
		`must ${outcome} to ${opponent[game[0]]} | play ${me} = ${score}`
	);
}

console.log();
console.log('total score part 2 =', total);
