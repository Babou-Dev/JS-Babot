const { stripIndents } = require("common-tags");
const { Command } = require("discord-akairo");

class HelpCommand extends Command {
  constructor() {
    super("help", {
      aliases: ["help", "h"],
      category: "Misc",
      args: [{ id: "command", type: "commandAlias" }],
      description: {
        content: 'La commande help envoie la liste de commandes du bot!',
        usage: '(h)elp <command>',
        exemples: ['help', 'help ping', 'h userinfo']
      },
    });
  }

  exec(message, args) {
    const prefix = this.handler.prefix;
    const command = args.command;
    
    if (!command) {
      let embed = this.client.functions.embed()
        .setAuthor(
          `Bonjour ! Mon nom est ${this.client.user.username} !`, 
          this.client.user.displayAvatarURL()
          )
        .setDescription(`Retrouvez la liste de toutes mes commandes ci-dessous !
      Pour plus d'info, merci de contacter un admin : )
      **--------------------**`);

      for (const category of this.handler.categories.values()) {
        embed.addField(
          ` ∑ ${category.id}`,
          `${category
            .filter(cmd => cmd.aliases.length > 0)
            .map(cmd => `\`${cmd.aliases[0]}\``)
            .join(', ')}`
        );
      }

      embed.addField(
        "--------------------",
        `**\`${prefix}help <command>\` pour plus d'info sur une commande spécifique.**
        Exemples : \`${prefix}help ping\` | \`${prefix}help userinfo\``);

      return message.channel.send({ embeds: [ embed ] });
    }

    return message.channel.send(stripIndents`
    \`\`\`makefile
    [Help : Command => ${command.aliases[0]}] ${command.ownerOnly ? '/!\\ Admin only /!\\' : ''}

    ${command.description.content}

    Utilisation: ${prefix}${command.description.usage}
    Exemples: ${prefix}${command.description.exemples.join(` | ${prefix}`)}

    ---

    ${prefix} = prefix à utiliser sur le bot
    () = alias | <> = argument(s) | [] = argument(s) obligatoire
    Ne pas inclure les caractères suivants => [], () et <> dans vos commandes
    Si vous avez un problème, contactez un admin !
    \`\`\``);
    
  }
}

module.exports = HelpCommand;
