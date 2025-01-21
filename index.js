require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const options = {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Open Buko Game', url: 'https://t.me/buko_clicker_bot/game' }],
                [{ text: 'Join Community', url: 'https://t.me/BukoCommunity/' }],
                [{ text: 'Website', url: 'https://buko.meme/' }]
            ]
        }
    };

    bot.sendPhoto(chatId, 'https://i.imgur.com/C0myNM0.jpeg', {
        caption: 'Welcome to Buko bot! Here you can earn tails and get airdrops!',
        ...options
    });
});

console.log('Bot started!');
