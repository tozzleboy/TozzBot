"use strict";

const { DiscordAPIError } = require('discord.js');

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class ping {
    constructor() {
        this._command = "new";
    }
    help() {
        return "This command will reply with pong! Evetually it will reply the bots latency. :)";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {




            const ConfigFile = require("../config");
            const fs = require("fs")
            const Discord = require("discord.js");
        
            msgObject.member.guild.channels.create(`commission-${msgObject.author.username}`).then(channel => {
                channel.setTopic(`Ticket Owner: ${msgObject.author.username}, Product Request: ${args.join(" ")}`);
                channel.updateOverwrite([
                    {
                        id: msgObject.author.id,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                    },
                    {
                        id: msgObject.guild.id,
                        deny: ['VIEW_CHANNEL']
                    }
                ]);
                let category = msgObject.guild.channels.cache.find(c => c.name == "Commissions" && c.type == "category");
                channel.setParent(category);
                let embed2 = new Discord.MessageEmbed()
                    .setDescription(`**✅ ${msgObject.author}, I have created your ticket, access it by clicking/tapping the placeholder at the end of this message. ${channel}**`)
                    .setColor("PURPLE")
                msgObject.channel.send(embed2);

                let embed1 = new Discord.MessageEmbed()
                    .setTitle("**Ticket Setup**")
                    .setColor("PURPLE")
                    .setDescription(`Hello ${msgObject.member},\nA staff member will assist you soon!\n\n**Ticket Requests**\nTicket Owner: ${msgObject.member}\nProduct Requests: ${args.join(" ")}`)
                    .setFooter('In the meantime please say which colors/themes you would like, the name of the character for the render and optionally a font you prefer.')
                channel.send(embed1)

            });




        });
    }
}
exports.default = ping;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9waW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR0EsTUFBcUIsSUFBSTtJQUF6QjtRQUVxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBYXRDLENBQUM7SUFYRyxJQUFJO1FBQ0EsT0FBTyxpRkFBaUYsQ0FBQztJQUM3RixDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUcsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUM3RSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4QyxDQUFDO0tBQUE7Q0FDSjtBQWZELHVCQWVDIn0=
