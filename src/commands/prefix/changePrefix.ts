import { PermissionFlagsBits, Message } from "discord.js";
import { setGuildOption } from "../../functions";
import { Command } from "../../types";

const command: Command = {
    name: "changePrefix",
    execute: (message: Message, args) => {
        let prefix = args[1]
        if (!prefix) return message.reply("No prefix provided")
        if (!message.guild) return;
        setGuildOption(message.guild, "prefix", prefix)
        message.reply("Prefix successfully changed!")
    },
    permissions: [PermissionFlagsBits.Administrator],
    aliases: []
}

export default command