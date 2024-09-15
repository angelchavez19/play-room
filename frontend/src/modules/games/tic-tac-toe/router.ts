export const TicTacToeRouter = [
  {
    path: '/games/tic-tac-toe',
    name: 'games-tictactoe',
    component: () => import('./p-index.vue')
  },
  {
    path: '/games/tic-tac-toe/single',
    name: 'games-tictactoe-single',
    component: () => import('./p-single.vue')
  },
  {
    path: '/games/tic-tac-toe/multiplayer',
    name: 'games-tictactoe-multiplayer',
    component: () => import('./p-multiplayer.vue')
  }
]
