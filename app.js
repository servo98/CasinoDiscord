import Discord, { Intents, MessageActionRow, MessageButton } from 'discord.js';

import database from './utils/database.js';

import credentials from './utils/credentials.js';
import { claimPipiCoins } from './controllers/playerController.js';

database();

const prefix = '&';

const client = new Discord.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.login(credentials.discord.token);

client.once('ready', () => {
  console.log('Ready!');
});

client.once('reconnecting', () => {
  console.log('Reconnecting!');
});
client.once('disconnect', () => {
  console.log('Disconnect!');
});

client.on('message', async (message) => {
  // if (message.author.bot) return;

  // if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(`${prefix}`)) {
    // console.log(message);
    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId('primary')
        .setLabel('RECLAMAR')
        .setStyle('SUCCESS')
    );

    message.channel.send({
      content: 'Reclama tus pipicoins diarios',
      components: [row],
    });
  }
});

client.on('interactionCreate', async (interaction) => {
  //TODO: register user or find one

  // if (!interaction.isButton()) return;
  // console.log(interaction);
  await claimPipiCoins(interaction.user.id);
});
