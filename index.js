const { Telegraf, Scenes, session, Markup } = require('telegraf');

require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

const welcomeScene = require('./scenes/welcomeScene');
const stage = new Scenes.Stage([welcomeScene]);

bot.use(Telegraf.log());
bot.use(session());
bot.use(stage.middleware());

bot.start((ctx) => ctx.scene.enter('welcomeScene'));
// bot.start((ctx) => ctx.reply('hewrqeq'));
// bot.command('course', (ctx) => {
//     ctx.reply('asdf', Markup.inlineKeyboard(
//         [
//             [Markup.button.callback('Добавить фильм или сериал', 'btn-1')],
//         ]
//     ))
// });



// bot.help((ctx) => ctx.reply('Send me a sticker'));
// bot.on('sticker', (ctx) => ctx.reply('👍'));
// bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));