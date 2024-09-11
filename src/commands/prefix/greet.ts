import { PermissionFlagsBits } from "discord.js";
import { Command } from "../../types";

const command: Command = {
    name: "greet",
    execute: (message, args) => {
        let toGreet = message.mentions.members?.first()
        message.reply(`Hello there ${toGreet ? toGreet.user.username : message.member?.user.username}!`)
    },
    cooldown: 10,
    aliases: ["sayhello"],
    permissions: [PermissionFlagsBits.Administrator] // to test
}

export default command