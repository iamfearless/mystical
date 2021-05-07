const Discord = require('discord.js');


exports.run = (client, message, params) => {

    if (message.author.id === message.guild.owner.id) {

        message.channel.send(new Discord.MessageEmbed()
                .setColor('RED')
                .setTitle('Kurulum onayı')
                .setDescription('Sunucu Kurulsunmu?.')
                .setFooter('Bu eylemi onaylıyorsan "evet" yazman yeterlidir.Bu eylem 50 saniye içinde sona erecek'))
            .then(() => {
                message.channel.awaitMessages(response => response.content === 'evet', {
                        max: 1,
                        time: 50000,
                        errors: ['time'],
                    })


                    .then((collected) => {
                        message.guild.channels.create(`ÖNEMLİ`, {
                            type: 'category'
                        });
                        message.guild.channels.create(`📖 rules`, {
                                type: "text"
                            })
                            .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "ÖNEMLİ")))
                        message.guild.channels.create(`📢 annouce`, {
                                type: "text"
                            })
                            .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "ÖNEMLİ")))
                        message.guild.channels.create(`🎁 booster`, {
                                type: "text"
                            })
                            .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "ÖNEMLİ")))
                        message.guild.channels.create(`😡 şikayet`, {
                                type: "text"
                            })
                            .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "ÖNEMLİ")))
                        message.guild.channels.create(`🤝 istek-öneri`, {
                                type: "text"
                            })
                            .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "ÖNEMLİ")))
                        message.guild.channels.create(`METİN KANALLARI`, {
                            type: 'category'
                        });
                        message.guild.channels.create(`💬 general-chat`, {
                                type: "text"
                            })
                            .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "METİN KANALLARI")))
                        message.guild.channels.create(`🤖 bot-command`, {
                                type: "text"
                            })
                            .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "METİN KANALLARI")))
                        message.guild.channels.create(`📸 foto-chat`, {
                                type: "text"
                            })
                            .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "METİN KANALLARI")))
                        message.guild.channels.create(`📃 yetkili-başvuru`, {
                                type: "text"
                            })
                            .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "METİN KANALLARI")))
                        message.guild.channels.create(`EĞLENCE`, {
                            type: 'category'
                        });
                        message.guild.channels.create(`geceye-söz-bırak`, {
                                type: "text"
                            })
                            .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "EĞLENCE")))
                        message.guild.channels.create(`instagram`, {
                                type: "text"
                            })
                            .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "EĞLENCE")))
                        message.guild.channels.create(`eğlence-chat`, {
                                type: "text"
                            })
                            .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "EĞLENCE")))
                        message.guild.channels.create(`FİLM-DİZİ`, {
                            type: 'category'
                        });
                        message.guild.channels.create(`🔇 film-dizi-chat`, {
                                type: "text"
                            })
                            .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "FİLM-DİZİ")))
                        message.guild.channels.create(`🔇 film-dizi`, {
                                type: "voice"
                            })
                            .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "FİLM-DİZİ")))
                        message.guild.channels.create(`PUBLİC`, {
                            type: 'category'
                        });
                        message.guild.channels.create(` 🔊 Genel Sohbet-1`, {
                                type: "voice"
                            })
                            .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "PUBLİC")))
                        message.guild.channels.create(` 🔊 Genel Sohbet-2 `, {
                                type: "voice"
                            })
                            .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "PUBLİC")))
                        message.guild.channels.create(` 🔊 Genel Sohbet-3 `, {
                                type: "voice"
                            })
                            .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "PUBLİC")))
                        message.guild.channels.create(`🔊 Sohbet-4 `, {
                                type: "voice"
                            })
                            .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "PUBLİC")))
                        message.guild.channels.create(`🔊 Sohbet-5 `, {
                                type: "voice"
                            })
                            .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "PUBLİC")))
                        message.guild.channels.create(`🔊 Sohbet-6 `, {
                                type: "voice"
                            })
                            .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "PUBLİC")))
                        message.guild.channels.create(`🔊 Sohbet-7 `, {
                                type: "voice"
                            })
                            .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "PUBLİC")))
                        message.guild.channels.create(`🔊 Sohbet-8 `, {
                                type: "voice"
                            })
                            .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "PUBLİC")))
                        message.guild.channels.create(`🔊 Sohbet-9 `, {
                                type: "voice"
                            })
                            .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "PUBLİC")))
                        message.guild.channels.create(`🔊 Sohbet-10 `, {
                                type: "voice"
                            })
                            .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "PUBLİC")))
                        message.guild.channels.create(`PRİVATE`, {
                            type: 'category'
                        });
                        message.guild.channels.create(`🏆 Secret-1 `, {
                                type: "voice"
                            })
                            .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "PRİVATE")))
                        message.guild.channels.create(`🏆 Secret-2 `, {
                                type: "voice"
                            })
                            .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "PRİVATE")))
                        message.guild.channels.create(`🏆 Secret-3 `, {
                                type: "voice"
                            })
                            .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "PRİVATE")))
                        message.guild.channels.create(`🏆 Secret-4 `, {
                                type: "voice"
                            })
                            .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "PRİVATE")))
                        message.guild.channels.create(`🏆 Secret-5 `, {
                                type: "voice"
                            })
                            .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "PRİVATE")))
                        message.guild.channels.create(`🏆 Secret-6 `, {
                                type: "voice"
                            })
                            .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "PRİVATE")))
                        message.guild.channels.create(`🏆 Secret-7 `, {
                                type: "voice"
                            })
                            .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "PRİVATE")))
                        message.channel.send("Sunucu kurulumu Başladı, Bazı kanallar ve odalar yanlış eklenmiş Olabiliyor.!")
                    });
            });
    } else {
        message.channel.send('Bu komutu sadece sunucu sahibi kullanabilir!');
    }
};




exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sunucukur' , 'sunucu-kur'],
    permLevel: 0,
};


exports.help = {
    name: 'sunucu-kur'
};