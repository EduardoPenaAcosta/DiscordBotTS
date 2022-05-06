import { MessageEmbed } from "discord.js";
import { Command } from "../../structures/Commands";

export default new Command({
  name: "embmsg",
  description: "Creates a un embedded message",
  options: [
    {
      name: "title",
      description: "Give an title to the message",
      type: "STRING",
      required: true,
    },
    {
      name: "field",
      description: "Field to write something to be greatfuly",
      type: "STRING",
      required: true,
    },
  ],
  run: async ({ interaction }) => {
    // La interacción que vayamos a realizar deberá coincidir con las opciones que vayamos a especificar.
    // Variables to get name of user, avatar
    const user = interaction.user;
    const avatar = user.avatarURL();

    // Variable to get the parameters of the command
    const title = interaction.options.getString("title");
    const field = interaction.options.getString("field");

    const embed = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle(title)
      .setAuthor({
        name: `${interaction.user.username}`,
        iconURL: `${avatar}`,
        url: "https://discord.js.org",
      })
      .setThumbnail(
        "https://w7.pngwing.com/pngs/413/620/png-transparent-gratitude-autocad-dxf-blessing-love-others-love-miscellaneous-text-thumbnail.png"
      )
      .addField("Gracias por:", field)
      .setTimestamp()
      .setFooter({ text: "LeanMind bot"});
    interaction.followUp({ embeds: [embed] });
  },
});
