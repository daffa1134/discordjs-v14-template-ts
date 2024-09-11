import { Client, Collection, IntentsBitField } from "discord.js";
import { Command, SlashCommand } from "./types";
import { config } from "dotenv";
import { readdirSync } from "fs";
import { join } from "path";
config();

(async () => {
    const client = new Client({
        intents: [
            IntentsBitField.Flags.Guilds,
            IntentsBitField.Flags.GuildVoiceStates,
            IntentsBitField.Flags.GuildMessages,
            IntentsBitField.Flags.MessageContent
        ]
    });

    client.slashCommands = new Collection<string, SlashCommand>()
    client.commands = new Collection<string, Command>()
    client.cooldowns = new Collection<string, number>()

    const handlersDir = join(__dirname, "./handlers");
    readdirSync(handlersDir).forEach(handler => {
        if (!(handler.endsWith(".js") || handler.endsWith(".ts"))) return;

        require(`${handlersDir}/${handler}`)(client);
    })

    await client.login(process.env.TOKEN)

})();
