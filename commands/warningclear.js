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
        this._command = "warningclear";
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
            const fs = require("fs")
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
let wUser = msgObject.guild.member(msgObject.mentions.users.first());
let warns = JSON.parse(fs.readFileSync("./StoredInformation/warnings.json", "UTF-8"));
if(!msgObject.member.roles.cache.get(staffrole)){
msgObject.channel.send(embed2);
return;
}
if(!wUser){
msgObject.channel.send(embed3);
return;
} 


if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
};

warns[wUser.id].warns = 0;

fs.writeFile("./StoredInformation/warnings.json", JSON.stringify(warns), err => {
if(err) console.log(err);
});

let UserEmbed = new Discord.MessageEmbed()
.setColor("PURPLE")
.setTitle("Warnings Cleared")
.setDescription(`${wUser}'s warnings were cleared.`)
msgObject.channel.send(UserEmbed)



});
    }
}
exports.default = ping;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9waW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR0EsTUFBcUIsSUFBSTtJQUF6QjtRQUVxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBYXRDLENBQUM7SUFYRyxJQUFJO1FBQ0EsT0FBTyxpRkFBaUYsQ0FBQztJQUM3RixDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUcsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUM3RSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4QyxDQUFDO0tBQUE7Q0FDSjtBQWZELHVCQWVDIn0=
