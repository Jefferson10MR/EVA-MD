import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone'

// ❒═════════════════◊【 𝐍𝐎 𝐓𝐎𝐂𝐀𝐑 𝐍𝐀𝐃𝐀 𝐏𝐎𝐑 𝐀𝐐𝐔𝐈 】◊═════════════════❒
global.botnumber = ""
global.confirmCode = ""

// ❒═════════════════◊【 𝐎𝐖𝐍𝐄𝐑𝐀 】◊═════════════════❒
//No toques los nuneros que contienen el "true"
global.owner = [
 ['51995490187', '👑 𝘾𝙧𝙚𝙖𝙙𝙤𝙧 👑', true],
 ['519947762222', '🛡️ 𝙂𝙪𝙖𝙧𝙙𝙞𝙖𝙣𝘽𝙤𝙩-𝙈𝘿 🛡️', true],
 ['51995490187', '𝙊𝙬𝙣𝙚𝙧 𝙊𝙛𝙞𝙘𝙞𝙖𝙡 🔮', true],

// ❒═════════════════◊【 𝐂𝐎𝐍𝐓𝐀𝐂𝐓𝐎𝐒 】◊═════════════════❒
//Agregate si tu numero es owner
global.contactos = [
["51907779949", '🌎 EVA-MD 𝙊𝙁𝘾 🌎', 1],
["51995490187", '🛡️ 𝙂𝙪𝙖𝙧𝙙𝙞𝙖𝙣𝘽𝙤𝙩-𝙈𝘿 🛡️', 1],
["51994776222", '🟢 EVA-MD 𝙎𝙪𝙥𝙥𝙤𝙩 🟢', 1],
["51995776223", '⚙️ 𝙎𝙪𝙥𝙥𝙤𝙧𝙩 𝘽𝙤𝙩𝙨 ⚙️', 1],
["51994776222", '🥏 𝘼𝙨𝙞𝙨𝙩𝙚𝙣𝙘𝙞𝙖 🥏', 1],
["51995490187", '💚 𝙊𝙬𝙣𝙚𝙧 𝙊𝙛𝙞𝙘𝙞𝙖𝙡 💚', 1]]

// ❒═════════════════◊【 𝐈𝐆𝐍𝐎𝐑𝐄𝐍 𝐄𝐒𝐓𝐄 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 】◊═════════════════❒
global.suittag = ['51995490187'];
global.prems = ['51995490187'];

// ❒═════════════════◊【 𝐍𝐎𝐌𝐁𝐑𝐄𝐒 】◊═════════════════❒
global.packname = '🌎 EVA-𝙈𝘿 🌎';
global.author = 'EVA';
global.wm = '👑 EVA-𝙈𝘿 👑';
global.sk = '♨️ EVA-MD ♨️';
global.titulowm = '🏙️ EVABOT-𝙈𝘿 🏙️';
global.titulowm2 = `EVA ✨`
global.igfg = 'EVA-MD';
global.wait = '*ⓘ 𝙲𝙰𝚁𝙶𝙰𝙽𝙳𝙾....*';
global.vs = '1.0.5';
// ❒═════════════════◊【 𝐌𝐄𝐍𝐔𝐒 𝐃𝐄 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍 】◊═════════════════❒
global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/NaufraMD.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu3.png');
global.imagen7 = fs.readFileSync('./Menu6.jpg')
global.imagen8 = fs.readFileSync('./Menu4.jpg')
// ❒═════════════════◊【 𝐄𝐍𝐋𝐀𝐂𝐄𝐒 】◊═════════════════❒
//Enlaces aleatorios del bot
global.gp1 = ''
global.gp2 = ''
global.gp3 = ''
global.gp4 = ''
global.channel = 'https://wa.me/51995490187'
global.paypal = ''
global.yt = ''
global.md = ''
global.fb = ''
// ❒═════════════════◊【 𝐈𝐌𝐀𝐆𝐄𝐍𝐄𝐒 】◊═════════════════❒
// ❒═════════════════◊【 𝐕𝐈𝐃𝐄𝐎𝐒 】◊═════════════════❒
// ❒═════════════════◊【 𝐌𝐄𝐍𝐒𝐀𝐉𝐄𝐒 𝐀𝐋𝐄𝐀𝐓𝐎𝐑𝐈𝐎𝐒 】◊═════════════════❒
//MENSAJES RANDOM:
global.naufraMenus = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8]
global.naufraRedes = [gp1, gp2, gp3, gp4, channel, paypal, yt, md, fb]
// ❒═════════════════◊【 𝐇𝐎𝐑𝐀𝐑𝐈𝐎𝐒 】◊═════════════════❒
//Saludo User, Buen Dia
var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Linda Mañana'; break; case 1: hour = 'Linda Mañana'; break; case 2: hour = 'Linda Mañana'; break; case 3: hour = 'Linda Mañana'; break; case 4: hour = 'linda mañana'; break; case 5: hour = 'Linda Mañana'; break; case 6: hour = 'Linda Mañana'; break; case 7: hour = 'Linda Mañana'; break; case 8: hour = 'Linda Mañana'; break; case 9: hour = 'Linda Mañana'; break; case 10: hour = 'Lindo Dia'; break; case 11: hour = 'Lindo Dia'; break; case 12: hour = 'Lindo Dia'; break; case 13: hour = 'Lindo Dia'; break; case 14: hour = 'Linda Tarde'; break; case 15: hour = 'Linda Tarde'; break; case 16: hour = 'Linda Tarde'; break; case 17: hour = 'Linda Tarde'; break; case 18: hour = 'Linda Noche'; break; case 19: hour = 'Linda Noche'; break; case 20: hour = 'Linda Noche'; break; case 21: hour = 'Linda Noche'; break; case 22: hour = 'Linda Noche'; break; case 23: hour = 'Linda Noche'; break;}
global.saludo = '🌎' + hour;

global.mods = [];

// ❒═════════════════◊【 𝐅𝐄𝐂𝐇𝐀 𝐘 𝐇𝐎𝐑𝐀 】◊═════════════════❒

global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
// ❒═════════════════◊【 𝐀𝐋𝐄𝐀𝐓𝐎𝐑𝐈𝐎 】◊═════════════════❒
global.wm2 = `${dia} ${fecha}\nEVABot`;
global.gt = 'EVA-MDBot';
global.mysticbot = 'EVABot-MD';
global.mysticbot = '';
global.waitt = '*ⓘ 𝙲𝙰𝚁𝙶𝙰𝙽𝙳𝙾....*';
global.waittt = '*ⓘ 𝙲𝙰𝚁𝙶𝙰𝙽𝙳𝙾....*';
global.waitttt = '*ⓘ 𝙲𝙰𝚁𝙶𝙰𝙽𝙳𝙾....*';
global.nomorown = '5493873687620';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `*🏙️ Fecha:*  ${moment.tz('America/Mexico_City').format('DD/MM/YY')}`;
global.bottime = `*🌎 Hora:* ${moment.tz('America/Mexico_City').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
// ❒═════════════════◊【 𝐍𝐎 𝐓𝐎𝐂𝐀𝐑 𝐍𝐀𝐃𝐀 𝐏𝐎𝐑 𝐀𝐐𝐔𝐈 】◊═════════════════❒

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
