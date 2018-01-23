const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');

const prefix = config.prefix;
const token = config.token;

bot.on('ready', () => {
	console.log(`Bot ${bot.user.username} is on`);
});

bot.on('message', (message) => {
	if (message.author.bot) return;
	if (message.content.substring(0, prefix.length) !== prefix) return;
	var args = message.content.substring(prefix.length).split(' ');
	
	switch (args[0].toUpperCase()) {
		case 'HELP': {
			message.channel.send('Bot Commands start with \"' + prefix + '\".\nThe commands are Help, Yawn, Nyan, Meow,Furcrap,kysh,Shade,Unicorn,new,defiance,Temptation,Spam,sushi,Nick,winrawr,Table-flip,murdermessage.\n(do HELP ' + prefix + ' (command) to get help with specific commands.');
			break;
		}
		case 'NYAN': {
			message.channel.send('▒▒▒▒▒▒▒▒█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█\n▒▒▒▒▒▒▒█░▒▒▒▒▒▒▒▓▒▒▓▒▒▒▒▒▒▒░█\n▒▒▒▒▒▒▒█░▒▒▓▒▒▒▒▒▒▒▒▒▄▄▒▓▒▒░█░▄▄\n▒▒▄▀▀▄▄█░▒▒▒▒▒▒▓▒▒▒▒█░░▀▄▄▄▄▄▀░░█\n▒▒█░░░░█░▒▒▒▒▒▒▒▒▒▒▒█░░░░░░░░░░░█\n▒▒▒▀▀▄▄█░▒▒▒▒▓▒▒▒▓▒█░░░█▒░░░░█▒░░█\n▒▒▒▒▒▒▒█░▒▓▒▒▒▒▓▒▒▒█░░░░░░░▀░░░░░█\n▒▒▒▒▒▄▄█░▒▒▒▓▒▒▒▒▒▒▒█░░█▄▄█▄▄█░░█\n▒▒▒▒█░░░█▄▄▄▄▄▄▄▄▄▄█░█▄▄▄▄▄▄▄▄▄█\n▒▒▒▒█▄▄█░░█▄▄█░░░░░░█▄▄█░░█▄▄█');
			break;
		}
		case 'YAWN': {
			message.channel.send(message.author + ' yawned.');
			break;
		}
		case 'MEOW': {
			message.channel.send(message.author + ' meowed');
			break;
		}
		case 'FURCRAP': {
			message.channel.send('What the FurCrap?')
			break;
		}
		case 'KYSH': {
			message.channel.send(message.author + ' Please dont kill your shelf!');
			break;
		}
		case 'SHADE': {
			message.channel.send('▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄\n                          ▀█▄▀▄▀██████▀█▄▀▄▀████▀\n                               ▀█▄█▄███▀        ▀██▄█▄█▀');
			break;
		}
		case 'UNICORN': {
			message.channel.send('', {file:'https://pre00.deviantart.net/caf2/th/pre/i/2005/108/e/e/rainbow_unicorn_by_articubone.jpg'});
			break;
		}
		case 'OOIIU' : {
			if (message.author.id !== '335070200045240320') return;
			var msg = '';
			for (var i=1;i<args.length;i++) {
				msg = msg + ' ' + args[i];
			}
			message.channel.send(msg);
			message.delete ();				break;
		}
		case 'DEFIANCE' :{
			message.channel.send('', {file:'https://www.bunspace.com/static/photobucket/6089/izzy2_copy.jpg'});
			break;
		}
		case 'NEW' :{
			message.channel.send('new');
			break;
		}
		case 'SUSHI' : {
			message.channel.send(' <@334464604468019201>');
			break;
		}
		case 'WINRAWR' : {
			message.channel.send('WINRAWR!!!');
			break;
		}
		case 'TABLE-FLIP' : {
		message.channel.send('(╯°□°）╯︵ ┻━┻');
		message.delete();
		break;
		}
		case 'TEMPTATION' : {
			message.channel.send('Did you just take temptation?  TIME-OUT, NOW!!');
			break;
		}
		case 'MURDERMESSAGE' : {
			if (message.mentions.users.first() === undefined) {
				message.author.send('WRONG!!');
				return;
			}
			var msg = '';
			for (var i=1;i<args.length-1;i++) {
				msg = msg + ' ' + args[i]
			}
			message.mentions.users.first().send('MURDER MESSAGE:\"' + msg + '\"');
			message.delete();
			break;
		}
		case 'SPAM' :{
			message.channel.send('', {file:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Spam_can.png/632px-Spam_can.png'});
			break;
		}
		case 'NICK' : {
			message.channel.send('<@249296991626985472> Wooahoo!!!');
			break;
		}
		case 'KEY' : {
			message.channel.send('O┬╖');
			break;
		}
	}
});

bot.login(token);