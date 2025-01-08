const TelegramBot = require('node-telegram-bot-api');

const token = 'meow';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Hello!');
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    if (!msg.text.startsWith('/')) {
        bot.sendMessage(chatId, `Ypu say: "${msg.text}"`);
    }
});

console.log('Bot started!');
