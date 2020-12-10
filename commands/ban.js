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
        this._command = "ban";
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
            const Discord = require("discord.js");

let embed2 = new Discord.MessageEmbed()
.setDescription(`**${msgObject.author}, There appears to be an error, you seem to be missing the Staff Role**`)
.setColor("PURPLE")
let embed3 = new Discord.MessageEmbed()
.setDescription(`**${msgObject.author}, You must mention a valid user to ban.**`)
.setColor("PURPLE")
let embed1 = new Discord.MessageEmbed()
.setDescription(`**${msgObject.author}, I cannot ban a staff member.**`)
.setColor("PURPLE")
let embed4 = new Discord.MessageEmbed()
.setDescription(`**${msgObject.author}, I cannot ban that person.**`)
.setColor("PURPLE")
let staffrole = msgObject.member.guild.roles.cache.find(r => r.name === "Administrator").id;
let mentioned = msgObject.mentions.members.first();
if(!msgObject.member.roles.cache.get(staffrole)){
msgObject.channel.send(embed2);
return;
}
if(!mentioned){
msgObject.channel.send(embed3);
return;
} 
if(mentioned.roles.cache.get(msgObject.member.guild.roles.cache.find(r => r.name === "Staff").id)){
msgObject.channel.send(embed1);
return;
}
if(!msgObject.member.guild.member(mentioned).bannable){
    msgObject.channel.send(embed4);
    return;
}
let BanEmbed = new Discord.MessageEmbed()
.setColor("PURPLE")
.setTitle(`You were banned!`)
.setDescription(`You were banned at ${msgObject.member.guild.name},\nYou may appeal with the link in the footer.\n**Ban Note**\nModerator: ${msgObject.author.name}\nReason: ${args.slice(1).join(" ")}`)
.setFooter("Appeal at https://forms.gle/mHoKzjV2tuB9mppKA")
mentioned.send(BanEmbed);
let Sent = new Discord.MessageEmbed()
.setColor("PURPLE")
.setDescription(`User has been banned from the server.`)
.setFooter(`Ban Reason: ${args.slice(1).join(" ")}`)
msgObject.member.guild.members.ban(mentioned);
msgObject.channel.send(Sent);





});
    }
}
exports.default = ping;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9waW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR0EsTUFBcUIsSUFBSTtJQUF6QjtRQUVxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBYXRDLENBQUM7SUFYRyxJQUFJO1FBQ0EsT0FBTyxpRkFBaUYsQ0FBQztJQUM3RixDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUcsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUM3RSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4QyxDQUFDO0tBQUE7Q0FDSjtBQWZELHVCQWVDIn0=
