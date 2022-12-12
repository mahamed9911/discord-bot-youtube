import Player from './../utils/classes/Player.js';

export default {
	name: 'pop',
	description: __.pop(config.prefix),
	action: async (bot, msg) => {
		try {
			const queue = Player.getPlayer(msg.guild, bot);
			const result = await queue.pop();
			const length = await queue.length();

			if (length === 0) {
				msg.channel.send(__.emptyqueue());
				return;
			}

			if (result) msg.channel.send(__.popsuccess());
		} catch (error) {
			console.error(error);
			msg.channel.send(__.commanderror());
		}
	}
};
