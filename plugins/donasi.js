let handler  = async (m, { conn, usedPrefix: _p }) => {
        conn.reply(m.chat, `
╭───❉ *「  DONASI 」 * ❉─────•>
╠➥ *PULSA : 6281342508342*
╠➥ *DANA : 6281342508342*
╠➥ *GOPAY : 6281342508342*
╰──────────────•>
┏━❉ *《HELP》* ❉━┓
╠➠ *${_p}owner*
┗━━━━━━━━━━━┛
`.trim(), m)
}
handler.command = /^donasi$/i

module.exports = handler
