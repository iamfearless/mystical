const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

module.exports = client => {
 setInterval(function() {
}, 8000);
  var msgArray = [
"Feârless",
"#TAGLIALIM",
"Feârless",
    "Zirveye Doğru..!"
 ];

 setInterval(() => {
  var rastgeleOyun = Math.floor(Math.random() * msgArray.length);
  client.user.setActivity(`${msgArray[rastgeleOyun]}`, { type: 'ONLINE' ,  url: 'https://www.twitch.tv/mbasreaper' })
}, 5000);
    console.log(`Bot Hazır | youtube.com/asreaper`);
}