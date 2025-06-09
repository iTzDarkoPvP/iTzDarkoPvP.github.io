const { Client, GatewayIntentBits } = require('discord.js');

function iniciarBot() {
    const token = document.getElementById('token').value;
    const clientId = document.getElementById('clientId').value;
    const statusMessage = document.getElementById('statusMessage');

    if (!token || !clientId) {
        statusMessage.textContent = "❌ Por favor, ingresa el token y el Client ID";
        statusMessage.style.color = "red";
        return;
    }

    const bot = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

    bot.once('ready', () => {
        statusMessage.textContent = `✅ Bot activado como ${bot.user.tag}`;
        statusMessage.style.color = "green";
    });

    bot.login(token).then(() => {
        statusMessage.textContent = "🔄 Iniciando bot...";
    }).catch(err => {
        statusMessage.textContent = "❌ Error al iniciar el bot: Verifica tu Token y Client ID";
        statusMessage.style.color = "red";
    });
}