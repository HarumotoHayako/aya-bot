//cipher (ROT67) command
const { SlashCommandBuilder } = require('discord.js');

//name of slash command & description
const data = new SlashCommandBuilder()
  .setName('rot67')
  .setDescription('Encode or decode a message using ROT67')
  .addStringOption((option) =>
    option
      .setName('message')
      .setDescription('The message to encode or decode')
      .setRequired(true)
  );

//ROT67 encoding/decoding
const rot67 = (str) => {
  return str.replace(/[A-Za-z]/g, (c) =>
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.charAt(
      'PQRSTUVWXYZABCDEFGHIJKLMNOpqrstuvwxyzabcdefghijklmno'.indexOf(c)
    )
  );
};

//cipher the text
const execute = async (interaction) => {
  try {
    //get the user input
    const message = interaction.options.getString('message');

    //put message through cipher
    const result = rot67(message);

    //give result
    await interaction.reply({
      content: `🔒 **ROT67 Result:**\n${result}`,
      ephemeral: true,
    });
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content:
        'Something went wrong while processing the message... <:nyaSad:1250106743514599435>',
      ephemeral: true,
    });
  }
};

module.exports = { data, execute };
