let handler  = async (m, { conn, usedPrefix: _p }) => {
        conn.reply(m.chat, `
┏━────────────━┓
      _*-•4尺 り 1-乃 の ｲ•-*_
┗──────────────┛
╭───❉ *「  INFO 」 * ❉─────•>
╠➥ *IG : https://tinyurl.com/yc*
╠➥ *YT : https://bit.ly/3fqjgFt
╠➥ *FB : https://tinyurl.com/yjmtcjav*
╠➥ *Grup : https://tinyurl.com/nhj2cn2p*
╠➥ *Owner : https://Wa.me/6281342508342*
╠➥ *Author Sc : Mr zL*
╰──────────────•>
┏━❉ *《HELP》* ❉━┓
╠➠ *${_p}owner*
╠➠ *${_p}donasi*
╠➠ *${_p}grouplist*
╠➠ *${_p}ping*
┗━━━━━━━━━━━┛
`.trim(), m)
}
handler.command = /^info$/i

module.exports = handler
