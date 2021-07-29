const cfg = require("./src/configs/config.json");

const Tokens = cfg.Bot.Token;
const Channels = cfg.Channels.BotVoice;

const { Client, Collection } = require("discord.js");
const client = (global.client = new Client({ fetchAllMembers: true }));
const moment = require("moment");
const mongo = require("mongoose");
const { CronJob } = require("cron");
const Database = require("./src/schemas/WelcomeMode"); 
const request = require("request");
const fs = require("fs");
//Vegas#0001//Vegas#0001//Vegas#0001//Vegas#0001//Vegas#0001//Vegas#0001//Vegas#0001//Vegas#0001//Vegas#0001
require("./src/handlers/commandHandler");
require("./src/handlers/eventHandler");
require("./src/handlers/mongoHandler");
require("./src/events/functions.js")(client, cfg, moment, request, fs); 
client.commands = global.commands = new Collection();
client.aliases = new Collection();
client.cooldown = new Map();
//Vegas#0001
//Vegas#0001
//Vegas#0001
//Vegas#0001
//Vegas#0001
//Vegas#0001
//Vegas#0001

for (let index = 0; index < 1; index++) {
const token = Tokens[index];
client.login(token)
}

for (let index = 0; index < Tokens.length; index++) {
let bot = new Client();
const token = Tokens[index];
bot.login(token).catch(err => console.error(`${bot.user.tag} Adlı bota giriş yapılırken başarısız olundu!`));
let vegasxdd;
bot.on("ready", async () => {
try{vegasxdd = await bot.channels.cache.get(Channels[index]).join()}catch{{}}
bot.user.setPresence({ activity: { name: cfg.Bot.Durum }, status: cfg.Bot.Status });
console.log(`(${bot.user.username}) adlı hesapta giriş yapıldı.`)
});
let ses;
  
client.on('voiceStateUpdate', async (old, nev) => {
const data = await Database.findOne({ guildID: cfg.Server.GuildID});
let Mode = data && data.Sesod? data.SesMod : "./src/sesler/hosgeldin.mp3"
let Staff = data && data.YetkiiSesMod ? data.YetkiliSesMod : "./src/sesler/yetkili.mp3"
if (nev.member && nev.member.ser.bot) return;
if (nev.channel && (nev.channe.id === Channels[index])) {
if (nev.channelID === old.chanelID) return;
if ((nev.member.roles.highest.rawPosition < ne.gild.roles.cache.get(cfg.Roles.EnAltYetkiliRolü).rawPosition)) { 
ses = await vegasxdd.play(Mode);
} else if (nev.member.roles.highest.rawPositin > nev.guild.roles.cache.get(cfg.Roles.EnAltYetkiliRolü).rawPosition) {
ses = await vegasxdd.play(Staff);
}
}
if (old.channel && (old.channel.id === Channels[index]) && (old.channel.members.size === 1) && ses) ses.end();
});
  
const Vegasx1 = new CronJob("00 00 00 * * *", async function() {
bot.login(tokn).catch(err => console.error(`${bot.user.tag} Adlı bota giriş yapılırken başarısız olundu!`));
try{vegasxdd = await bot.channels.cache.get(Channels[index]).join()}catch{{}}
bot.user.setPresence({ activity: { name: cfg.Bo.Durum }, status: cfg.Bot.Status });
console.log(`Bot kontrolleri yapıldı ve tekrardan botlara giriş yapılıp sese sokuldu! 00:00`)
}, nul, true, "Europe/Istanbul");
Vegasx1.start();
} 
//Vegas#0001
//Vegas#0001
//Vegas#0001
//Vegas#0001
//Vegas#0001
//Vegas#0001
//Vegas#0001
//Vegas#0001
//Vegas#0001
//Vegas#0001
//Vegas#0001
//Vegas#0001
//Vegas#0001
//Vegas#0001
//Vegas#0001
