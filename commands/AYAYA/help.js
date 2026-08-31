//help command to explain other OinkBot commands - This should be updated with each new command
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const data = new SlashCommandBuilder()
  .setName('help')
  .setDescription("Provides information about OinkBot's commands.");

const execute = async (interaction) => {
  const embed = new EmbedBuilder()
    .setColor('#00a693')
    .setTitle('🐷 OinkBot Command List 🤖')
    .setDescription('Here are the available commands:')
    .addFields(
      {
        name: '🃏 Gambling Commands 🎲',
        value: `
        **/blackjack** - Play a game of blackjack with AyaBot.
        **/coinflip** - Flip a coin or coins.
        **/diceroll** - Roll a die or dice.
        **/magic8ball** - Ask a question & get a response.
      `,
      },
      {
        name: '🎉 Fun Commands 🎈',
        value: `
        **/bonk** - Makes a gif of a target user getting hit with a mallet.
        **/gomenasorry** - Prints some predefined apology notes.
        **/headpat** - Makes a gif of a target user getting a headpat.
        `,
      },
      {
        name: '🔧 Utility Commands 🕰️',
        value: `
        **/balls** - Displays the target user's balls.
        **/rot67** - Encode/decode a message with the ROT67 cipher.
        **/suggest** - Allows a user to send a private suggestion to the mod team.
        **/temperature** - Converts a given temperature into 4 different scales.
        **/timestamp** - Converts the time for a city/timezone to a Discord timestamp.
      `,
      },
      {
        name: '🔨 Mod Tools 🔪',
        value: `
        **/filter** - Add a word or phrase for OinkBot to auto-punish.
        **/punish** - Requires the user to apologise properly. Extreme version available.
      `,
      }
    );

  await interaction.reply({ embeds: [embed], ephemeral: true });
};

module.exports = { data, execute };
