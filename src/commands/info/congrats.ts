import { Command } from "../../structures/Commands";

export default new Command({
    name: 'congrats',
    description: 'Congrats a user',
    options: [
        {
            name: 'user',
            description: 'user to give a congrats',
            type: 'USER',
            required: true
        },
        {
            name: 'reason',
            description: 'reason to give congrats',
            type: 'STRING',
            required: true
        }
    ],
    run: async({interaction}) => {
        // La interacción que vayamos a realizar deberá coincidir con las opciones que vayamos a especificar.
        const user = interaction.options.getUser('user')
        const reason = interaction.options.getString('reason')

        interaction.followUp(`Congrats for ${user} for doing ${reason}`);

    }
})