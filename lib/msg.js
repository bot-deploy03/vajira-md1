const {
  proto,
  downloadContentFromMessage,
  getContentType
} = require("@whiskeysockets/baileys");
const fs = require('fs');
const downloadMediaMessage = async (_0xd2d7fc, _0x14bbb) => {
  if (_0xd2d7fc.type === "viewOnceMessage") {
    _0xd2d7fc.type = _0xd2d7fc.msg.type;
  }
  if (_0xd2d7fc.type === "imageMessage") {
    var _0x296c38 = _0x14bbb ? _0x14bbb + ".jpg" : "undefined.jpg";
    const _0x4b75af = await downloadContentFromMessage(_0xd2d7fc.msg, "image");
    let _0x5d8448 = Buffer.from([]);
    for await (const _0x43aa83 of _0x4b75af) {
      _0x5d8448 = Buffer.concat([_0x5d8448, _0x43aa83]);
    }
    fs.writeFileSync(_0x296c38, _0x5d8448);
    return fs.readFileSync(_0x296c38);
  } else {
    if (_0xd2d7fc.type === "videoMessage") {
      var _0x3fd855 = _0x14bbb ? _0x14bbb + ".mp4" : "undefined.mp4";
      const _0x271e52 = await downloadContentFromMessage(_0xd2d7fc.msg, "video");
      let _0x3cbb03 = Buffer.from([]);
      for await (const _0x12753a of _0x271e52) {
        _0x3cbb03 = Buffer.concat([_0x3cbb03, _0x12753a]);
      }
      fs.writeFileSync(_0x3fd855, _0x3cbb03);
      return fs.readFileSync(_0x3fd855);
    } else {
      if (_0xd2d7fc.type === "audioMessage") {
        var _0x548f8e = _0x14bbb ? _0x14bbb + ".mp3" : "undefined.mp3";
        const _0x31172b = await downloadContentFromMessage(_0xd2d7fc.msg, "audio");
        let _0x3cb991 = Buffer.from([]);
        for await (const _0x5d4d38 of _0x31172b) {
          _0x3cb991 = Buffer.concat([_0x3cb991, _0x5d4d38]);
        }
        fs.writeFileSync(_0x548f8e, _0x3cb991);
        return fs.readFileSync(_0x548f8e);
      } else {
        if (_0xd2d7fc.type === "stickerMessage") {
          var _0x2cc0cc = _0x14bbb ? _0x14bbb + ".webp" : "undefined.webp";
          const _0x18af5d = await downloadContentFromMessage(_0xd2d7fc.msg, "sticker");
          let _0x39bf6e = Buffer.from([]);
          for await (const _0x47e58b of _0x18af5d) {
            _0x39bf6e = Buffer.concat([_0x39bf6e, _0x47e58b]);
          }
          fs.writeFileSync(_0x2cc0cc, _0x39bf6e);
          return fs.readFileSync(_0x2cc0cc);
        } else {
          if (_0xd2d7fc.type === "documentMessage") {
            var _0x223db8 = _0xd2d7fc.msg.fileName.split('.')[1].toLowerCase().replace("jpeg", "jpg").replace("png", "jpg").replace("m4a", "mp3");
            var _0x55471b = _0x14bbb ? _0x14bbb + '.' + _0x223db8 : "undefined." + _0x223db8;
            const _0x42abb5 = await downloadContentFromMessage(_0xd2d7fc.msg, "document");
            let _0x277757 = Buffer.from([]);
            for await (const _0x54f6c2 of _0x42abb5) {
              _0x277757 = Buffer.concat([_0x277757, _0x54f6c2]);
            }
            fs.writeFileSync(_0x55471b, _0x277757);
            return fs.readFileSync(_0x55471b);
          }
        }
      }
    }
  }
};
const sms = (_0x6b4b99, _0x450ebc) => {
  if (_0x450ebc.key) {
    _0x450ebc.id = _0x450ebc.key.id;
    _0x450ebc.chat = _0x450ebc.key.remoteJid;
    _0x450ebc.fromMe = _0x450ebc.key.fromMe;
    _0x450ebc.isGroup = _0x450ebc.chat.endsWith("@g.us");
    _0x450ebc.sender = _0x450ebc.fromMe ? _0x6b4b99.user.id.split(':')[0] + "@s.whatsapp.net" : _0x450ebc.isGroup ? _0x450ebc.key.participant : _0x450ebc.key.remoteJid;
  }
  if (_0x450ebc.message) {
    _0x450ebc.type = getContentType(_0x450ebc.message);
    _0x450ebc.msg = _0x450ebc.type === "viewOnceMessage" ? _0x450ebc.message[_0x450ebc.type].message[getContentType(_0x450ebc.message[_0x450ebc.type].message)] : _0x450ebc.message[_0x450ebc.type];
    if (_0x450ebc.msg) {
      if (_0x450ebc.type === "viewOnceMessage") {
        _0x450ebc.msg.type = getContentType(_0x450ebc.message[_0x450ebc.type].message);
      }
      var _0x31b1ea = _0x450ebc.msg.contextInfo != null ? _0x450ebc.msg.contextInfo.participant : '';
      var _0x2166e6 = _0x450ebc.msg.contextInfo != null ? _0x450ebc.msg.contextInfo.mentionedJid : [];
      var _0x2c4f11 = typeof _0x2166e6 == "string" ? [_0x2166e6] : _0x2166e6;
      if (_0x2c4f11 != undefined) {
        _0x2c4f11.push(_0x31b1ea);
      } else {
        [];
      }
      _0x450ebc.mentionUser = _0x2c4f11 != undefined ? _0x2c4f11.filter(_0x393b25 => _0x393b25) : [];
      _0x450ebc.body = _0x450ebc.type === "conversation" ? _0x450ebc.msg : _0x450ebc.type === "extendedTextMessage" ? _0x450ebc.msg.text : _0x450ebc.type == "imageMessage" && _0x450ebc.msg.caption ? _0x450ebc.msg.caption : _0x450ebc.type == "videoMessage" && _0x450ebc.msg.caption ? _0x450ebc.msg.caption : _0x450ebc.type == "templateButtonReplyMessage" && _0x450ebc.msg.selectedId ? _0x450ebc.msg.selectedId : _0x450ebc.type == "buttonsResponseMessage" && _0x450ebc.msg.selectedButtonId ? _0x450ebc.msg.selectedButtonId : '';
      _0x450ebc.quoted = _0x450ebc.msg.contextInfo != undefined ? _0x450ebc.msg.contextInfo.quotedMessage : null;
      if (_0x450ebc.quoted) {
        _0x450ebc.quoted.type = getContentType(_0x450ebc.quoted);
        _0x450ebc.quoted.id = _0x450ebc.msg.contextInfo.stanzaId;
        _0x450ebc.quoted.sender = _0x450ebc.msg.contextInfo.participant;
        _0x450ebc.quoted.fromMe = _0x450ebc.quoted.sender.split('@')[0].includes(_0x6b4b99.user.id.split(':')[0]);
        _0x450ebc.quoted.msg = _0x450ebc.quoted.type === "viewOnceMessage" ? _0x450ebc.quoted[_0x450ebc.quoted.type].message[getContentType(_0x450ebc.quoted[_0x450ebc.quoted.type].message)] : _0x450ebc.quoted[_0x450ebc.quoted.type];
        if (_0x450ebc.quoted.type === "viewOnceMessage") {
          _0x450ebc.quoted.msg.type = getContentType(_0x450ebc.quoted[_0x450ebc.quoted.type].message);
        }
        var _0x56c298 = _0x450ebc.quoted.msg.contextInfo != null ? _0x450ebc.quoted.msg.contextInfo.participant : '';
        var _0x247ed9 = _0x450ebc.quoted.msg.contextInfo != null ? _0x450ebc.quoted.msg.contextInfo.mentionedJid : [];
        var _0x3b15f5 = typeof _0x247ed9 == "string" ? [_0x247ed9] : _0x247ed9;
        if (_0x3b15f5 != undefined) {
          _0x3b15f5.push(_0x56c298);
        } else {
          [];
        }
        _0x450ebc.quoted.mentionUser = _0x3b15f5 != undefined ? _0x3b15f5.filter(_0x588d24 => _0x588d24) : [];
        _0x450ebc.quoted.fakeObj = proto.WebMessageInfo.fromObject({
          'key': {
            'remoteJid': _0x450ebc.chat,
            'fromMe': _0x450ebc.quoted.fromMe,
            'id': _0x450ebc.quoted.id,
            'participant': _0x450ebc.quoted.sender
          },
          'message': _0x450ebc.quoted
        });
        _0x450ebc.quoted.download = _0x440e5e => downloadMediaMessage(_0x450ebc.quoted, _0x440e5e);
        _0x450ebc.quoted["delete"] = () => _0x6b4b99.sendMessage(_0x450ebc.chat, {
          'delete': _0x450ebc.quoted.fakeObj.key
        });
        _0x450ebc.quoted.react = _0x54a9ff => _0x6b4b99.sendMessage(_0x450ebc.chat, {
          'react': {
            'text': _0x54a9ff,
            'key': _0x450ebc.quoted.fakeObj.key
          }
        });
      }
    }
    _0x450ebc.download = _0x40a0fd => downloadMediaMessage(_0x450ebc, _0x40a0fd);
  }
  _0x450ebc.reply = (_0x84dbeb, _0x24d650 = _0x450ebc.chat, _0x731372 = {
    'mentions': [_0x450ebc.sender]
  }) => _0x6b4b99.sendMessage(_0x24d650, {
    'text': _0x84dbeb,
    'contextInfo': {
      'mentionedJid': _0x731372.mentions
    }
  }, {
    'quoted': _0x450ebc
  });
  _0x450ebc.replyS = (_0x513704, _0xc3a355 = _0x450ebc.chat, _0x2d9d96 = {
    'mentions': [_0x450ebc.sender]
  }) => _0x6b4b99.sendMessage(_0xc3a355, {
    'sticker': _0x513704,
    'contextInfo': {
      'mentionedJid': _0x2d9d96.mentions
    }
  }, {
    'quoted': _0x450ebc
  });
  _0x450ebc.replyImg = (_0x340184, _0x319e34, _0x5b1df5 = _0x450ebc.chat, _0x37fd3c = {
    'mentions': [_0x450ebc.sender]
  }) => _0x6b4b99.sendMessage(_0x5b1df5, {
    'image': _0x340184,
    'caption': _0x319e34,
    'contextInfo': {
      'mentionedJid': _0x37fd3c.mentions
    }
  }, {
    'quoted': _0x450ebc
  });
  _0x450ebc.replyVid = (_0x1958c6, _0xd84c82, _0x58e425 = _0x450ebc.chat, _0x15fba6 = {
    'mentions': [_0x450ebc.sender],
    'gif': false
  }) => _0x6b4b99.sendMessage(_0x58e425, {
    'video': _0x1958c6,
    'caption': _0xd84c82,
    'gifPlayback': _0x15fba6.gif,
    'contextInfo': {
      'mentionedJid': _0x15fba6.mentions
    }
  }, {
    'quoted': _0x450ebc
  });
  _0x450ebc.replyAud = (_0x3b03e0, _0x299c92 = _0x450ebc.chat, _0x5cd9e9 = {
    'mentions': [_0x450ebc.sender],
    'ptt': false
  }) => _0x6b4b99.sendMessage(_0x299c92, {
    'audio': _0x3b03e0,
    'ptt': _0x5cd9e9.ptt,
    'mimetype': "audio/mpeg",
    'contextInfo': {
      'mentionedJid': _0x5cd9e9.mentions
    }
  }, {
    'quoted': _0x450ebc
  });
  _0x450ebc.replyDoc = (_0x2bb5ab, _0x672cde = _0x450ebc.chat, _0x1ba631 = {
    'mentions': [_0x450ebc.sender],
    'filename': "undefined.pdf",
    'mimetype': "application/pdf"
  }) => _0x6b4b99.sendMessage(_0x672cde, {
    'document': _0x2bb5ab,
    'mimetype': _0x1ba631.mimetype,
    'fileName': _0x1ba631.filename,
    'contextInfo': {
      'mentionedJid': _0x1ba631.mentions
    }
  }, {
    'quoted': _0x450ebc
  });
  _0x450ebc.replyContact = (_0x18398c, _0x3744b5, _0x100085) => {
    var _0x136df3 = "BEGIN:VCARD\nVERSION:3.0\nFN:" + _0x18398c + "\n" + "ORG:" + _0x3744b5 + ";\n" + "TEL;type=CELL;type=VOICE;waid=" + _0x100085 + ':+' + _0x100085 + "\n" + "END:VCARD";
    const _0x3c9b6b = {
      vcard: _0x136df3
    };
    const _0x388416 = {
      displayName: _0x18398c,
      contacts: [_0x3c9b6b]
    };
    const _0x1777c2 = {
      contacts: _0x388416
    };
    _0x6b4b99.sendMessage(_0x450ebc.chat, _0x1777c2, {
      'quoted': _0x450ebc
    });
  };
  _0x450ebc.react = _0x2033fe => _0x6b4b99.sendMessage(_0x450ebc.chat, {
    'react': {
      'text': _0x2033fe,
      'key': _0x450ebc.key
    }
  });
  return _0x450ebc;
};
const _0x397495 = {
  sms: sms,
  downloadMediaMessage: downloadMediaMessage
};
module.exports = _0x397495;