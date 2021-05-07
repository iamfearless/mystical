const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
          var etiket =  message.guild.members.cache.filter(s => !s.bot).filter(member => member.user.discriminator == "0606").size;    
          var taglı = message.guild.members.cache.filter(s => !s.bot).filter(member => member.user.username.includes("Ψ")).size;//tagınız
          var toplamüye = message.guild.memberCount
        
          var Sesli = message.guild.members.cache.filter(s => s.voice.channel).size;
          var boost = message.guild.premiumSubscriptionCount
          var boostlevel = message.guild.premiumTier
          const embed = new MessageEmbed()
              .setColor('RANDOM')
              .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
              .setDescription(`\`•\` Sunucumuzda şuanda **Toplam** \`${toplamüye}\` kişi bulunmakta.
            \`•\` **Tagımızda** toplam \`${taglı}\` kişi bulunmakta.
\`•\` Sunucumuzda toplam \`${boost}\` **Boost** bulunmakta. 
\`•\` **Sesli** sohbetlerde toplam \`${Sesli}\` kişi bulunmakta
\`•\` **Etiketimizde** Toplam \`${etiket}\` Kullanıcı Bulunmakta.`)

          message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["say"],
    permLevel: 0
};
exports.help = {
    name: "say",
    description: "Gelişmiş say komutu",
};
