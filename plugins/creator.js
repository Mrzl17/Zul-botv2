let handler = function (m) {
  // this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  this.sendContact(m.chat, '6281342508342', 'MANK ARDI', m)
  conn.fakeReply(m.chat, '_*TUH OWNER KU TOD*_', '0@s.whatsapp.net', '_Zul GANZ_', 'status@broadcast')
}
handler.command = /^owner$/i

module.exports = handler
