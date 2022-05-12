import blackjack from 'blackjack-engine';

const game = new blackjack.Game({
  players: [
    {
      name: 'ferservo98',
      initialBet: 10,
    },
  ],
});

console.log('primero', game.getState());

game.dispatch(blackjack.actions.deal());

// game.dispatch(
//   blackjack.actions.bet({
//     bet: 10,
//     playerId: 1,
//   })
// );

console.log(game.getState());

// game.dispatch(
//   blackjack.actions.bet({
//     bet: 10,
//     playerId: 2,
//   })
// );

// console.log(game.getState());
