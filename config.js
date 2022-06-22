/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '4ac401fdbc37',
}

// Other
global.owner = ['14193598313', '4915908158554','4915905842496']
global.premium = ['4915908158554']
global.packname = 'Hisoka Morrow'
global.author = 'BOT | V0.1.9'
global.sessionName = 'hisoka'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Das ist eine spezielle Funktionen für Gruppenadministratoren!',
    botAdmin: 'Bot muss zuerst Admin sein!',
    owner: 'Das ist eine pezielle Funktionen für den Bot Owner',
    group: 'Diese Funktion wird nur in Gruppen verwendet!',
    private: 'Diese Funktionen, wird nur in dem privaten Chat verwendet werden!',
    bot: 'Spezielle Funktionen des Bot-Nummernbenutzers',
    wait: 'Loading...',
    endLimit: 'Ihr Tageslimit ist abgelaufen, das Limit wird alle 12 Stunden zurückgesetzt',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
