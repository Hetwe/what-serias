const { Telegraf, Scenes, Markup } = require('telegraf');
const { WELCOME_MESSAGE } = require('../utils/consts');

const welcomeScene = new Scenes.BaseScene('welcomeScene');

welcomeScene.enter(ctx => {
    ctx.replyWithHTML(WELCOME_MESSAGE, Markup.inlineKeyboard(
        [
            [Markup.button.callback('🎬 Добавить фильм или сериал', 'action_add-film')],
            [Markup.button.callback('📋 Список ваших просмотров', 'action_list')]
        ]
    ))
});

welcomeScene.action('action_add-file', ctx => {
    
})

module.exports = welcomeScene;