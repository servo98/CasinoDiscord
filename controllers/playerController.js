import Player from '../models/player.js';

const claimPipiCoins = async (discordUserId) => {
  try {
    let player = null;
    player = await Player.findOne({
      discordId: discordUserId,
    });
    if (!player) {
      player = await Player.create({
        discordId: discordUserId,
      });
    }
  } catch (error) {
    console.error('Error al buscar o crear nuevo player', error);
  }
};

export { claimPipiCoins };
