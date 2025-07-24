const axios = require("axios");
const fs = require('fs');
const mimes = require("mime-types");
const {
  fileTypeFromBuffer
} = require("file-type");
const getBuffer = async (_0x37fbb2, _0x125f9e) => {
  try {
    if (_0x125f9e) {
      _0x125f9e;
    } else {
      ({});
    }
    const _0x19bbf7 = {
      DNT: 0x1,
      "Upgrade-Insecure-Request": 0x1
    };
    var _0x5dc930 = await axios({
      'method': "get",
      'url': _0x37fbb2,
      'headers': _0x19bbf7,
      ..._0x125f9e,
      'responseType': "arraybuffer"
    });
    return _0x5dc930.data;
  } catch (_0x59a50a) {
    console.log(_0x59a50a);
  }
};
const getGroupAdmins = _0x179515 => {
  var _0x1e3685 = [];
  for (let _0x227ab4 of _0x179515) {
    if (_0x227ab4.admin !== null) {
      _0x1e3685.push(_0x227ab4.id);
    } else {
      '';
    }
  }
  return _0x1e3685;
};
function _0x41d105(_0xab003d, _0x5ba1e4, _0xe2b2ca, _0x22414e, _0x359304) {
  return _0x2304(_0x359304 + 0x2b3, _0x22414e);
}
const getRandom = _0x5a8c8a => {
  return '' + Math.floor(Math.random() * 10000) + _0x5a8c8a;
};
const clockString = _0x2db259 => {
  let _0x85e691 = isNaN(_0x2db259) ? '--' : Math.floor(_0x2db259 / 3600000);
  let _0x33c9e2 = isNaN(_0x2db259) ? '--' : Math.floor(_0x2db259 / 60000) % 60;
  let _0x303f5a = isNaN(_0x2db259) ? '--' : Math.floor(_0x2db259 / 1000) % 60;
  return [_0x85e691, _0x33c9e2, _0x303f5a].map(_0x2dd0a1 => _0x2dd0a1.toString().padStart(2, 0)).join(':');
};
const h2k = _0x428d22 => {
  const _0x1ffd70 = {
    MkriL: "2|3|8|5|0|6|1|7|4"
  };
  _0x1ffd70.hbbVi = function (_0x432397, _0x3acbb1) {
    return _0x432397 * _0x3acbb1;
  };
  _0x1ffd70.VeRdd = function (_0x43e8c5, _0x11f147) {
    return _0x43e8c5 | _0x11f147;
  };
  _0x1ffd70.CplXn = function (_0x13d562, _0x1a8154) {
    return _0x13d562 / _0x1a8154;
  };
  _0x1ffd70.tyPSv = function (_0x3d9e28, _0x19582b) {
    return _0x3d9e28 + _0x19582b;
  };
  _0x1ffd70.OjXQF = function (_0x12b1db, _0x3885a0) {
    return _0x12b1db / _0x3885a0;
  };
  _0x1ffd70.RzuPw = function (_0x3a97d6, _0x56ce37) {
    return _0x3a97d6 - _0x56ce37;
  };
  _0x1ffd70.xkhEM = function (_0x57e71d, _0x1eb971) {
    return _0x57e71d == _0x1eb971;
  };
  var _0x16dc8f = ['', 'K', 'M', 'B', 'T', 'P', 'E'];
  var _0x56d9cd = _0x1ffd70.VeRdd(_0x1ffd70.CplXn(Math.log10(Math.abs(_0x428d22)), 3), 0);
  if (_0x1ffd70.xkhEM(_0x56d9cd, 0)) {
    return _0x428d22;
  }
  var _0x2abbe6 = _0x16dc8f[_0x56d9cd];
  var _0x1cf854 = Math.pow(10, _0x1ffd70.hbbVi(_0x56d9cd, 3));
  var _0x1baf1c = _0x1ffd70.OjXQF(_0x428d22, _0x1cf854);
  var _0xdf6646 = _0x1baf1c.toFixed(1);
  if (/\.0$/.test(_0xdf6646)) {
    _0xdf6646 = _0xdf6646.substr(0, _0x1ffd70.RzuPw(_0xdf6646.length, 2));
  }
  return _0x1ffd70.tyPSv(_0xdf6646, _0x2abbe6);
};
const isUrl = _0x555d87 => {
  return _0x555d87.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'));
};
const Json = _0x149b53 => {
  return JSON.stringify(_0x149b53, null, 2);
};
const runtime = _0x29a632 => {
  _0x29a632 = Number(_0x29a632);
  var _0x3f798d = Math.floor(_0x29a632 / 86400);
  var _0x11a5cb = Math.floor(_0x29a632 % 86400 / 3600);
  var _0x29764e = Math.floor(_0x29a632 % 3600 / 60);
  var _0xcb7ba0 = Math.floor(_0x29a632 % 60);
  var _0x17335c = _0x3f798d > 0 ? _0x3f798d + (_0x3f798d == 1 ? " day, " : " days, ") : '';
  var _0x2264fa = _0x11a5cb > 0 ? _0x11a5cb + (_0x11a5cb == 1 ? " hour, " : " hours, ") : '';
  var _0x21ac48 = _0x29764e > 0 ? _0x29764e + (_0x29764e == 1 ? " minute, " : " minutes, ") : '';
  var _0x513717 = _0xcb7ba0 > 0 ? _0xcb7ba0 + (_0xcb7ba0 == 1 ? " second" : " seconds") : '';
  return _0x17335c + _0x2264fa + _0x21ac48 + _0x513717;
};
const sleep = async _0x23ea2e => {
  return new Promise(_0x4b64fe => setTimeout(_0x4b64fe, _0x23ea2e));
};
const fetchJson = async (_0xc94c28, _0x2fc541) => {
  try {
    if (_0x2fc541) {
      _0x2fc541;
    } else {
      ({});
    }
    const _0x11e82f = await axios({
      'method': "GET",
      'url': _0xc94c28,
      'headers': {
        'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
      },
      ..._0x2fc541
    });
    return _0x11e82f.data;
  } catch (_0x5f3506) {
    return _0x5f3506;
  }
};
const jsonformat = _0x3d9bfd => {
  return JSON.stringify(_0x3d9bfd, null, 2);
};
async function getsize(_0x1daf11) {
  function _0x1530c7(_0x31dbbf) {
    let _0x5684eb = ['B', 'KB', 'MB', 'GB', 'TB'];
    let _0x5c8b6e = _0x31dbbf;
    let _0x9ef0e3;
    for (_0x9ef0e3 = 0; _0x5c8b6e >= 1024 && _0x9ef0e3 < 4; _0x9ef0e3++) {
      _0x5c8b6e /= 1024;
    }
    return _0x5c8b6e.toFixed(2) + " " + _0x5684eb[_0x9ef0e3];
  }
  return _0x1530c7((await axios.head(_0x1daf11)).headers["content-length"]);
}
function formatBytes(_0x2bff9b) {
  let _0x4ed16b = ['B', 'KB', 'MB', 'GB', 'TB'];
  let _0x34bc5c = _0x2bff9b;
  let _0x4f9a69;
  for (_0x4f9a69 = 0; _0x34bc5c >= 1024 && _0x4f9a69 < 4; _0x4f9a69++) {
    _0x34bc5c /= 1024;
  }
  return _0x34bc5c.toFixed(2) + " " + _0x4ed16b[_0x4f9a69];
}
async function formatSize(_0x41fd02, _0x41b6c8 = true, _0x474b61 = 2) {
  const _0xad9dae = _0x41b6c8 ? 1000 : 1024;
  if (Math.abs(_0x41fd02) < _0xad9dae) {
    return _0x41fd02 + " B";
  }
  const _0x1fa20e = _0x41b6c8 ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
  let _0x3ac71b = -1;
  const _0x4ea67e = 10 ** _0x474b61;
  do {
    _0x41fd02 /= _0xad9dae;
    ++_0x3ac71b;
  } while (Math.round(Math.abs(_0x41fd02) * _0x4ea67e) / _0x4ea67e >= _0xad9dae && _0x3ac71b < _0x1fa20e.length - 1);
  return _0x41fd02.toFixed(_0x474b61) + " " + _0x1fa20e[_0x3ac71b];
}
async function getFile(_0x1435b9) {
  try {
    const _0x2e38df = require("file-type");
    const _0x2ebaca = await getBuffer(_0x1435b9);
    let _0x1085d6 = await _0x2e38df.fromBuffer(_0x2ebaca);
    let _0x536a56 = './' + ('' + Math.floor(Math.random() * 10000) + ('.' + _0x1085d6.ext));
    await fs.promises.writeFile(_0x536a56, _0x2ebaca);
    return _0x536a56;
  } catch (_0x61fb63) {
    console.error("An error occurred:", _0x61fb63.message);
  }
}
const smsg = (_0x104ee6, _0x593878, _0x271194) => {
  if (!_0x593878) {
    return _0x593878;
  }
  let _0x19ffdb = proto.WebMessageInfo;
  if (_0x593878.key) {
    _0x593878.id = _0x593878.key.id;
    _0x593878.isBaileys = _0x593878.id.startsWith("BAE5") && _0x593878.id.length === 16;
    _0x593878.chat = _0x593878.key.remoteJid;
    _0x593878.fromMe = _0x593878.key.fromMe;
    _0x593878.isGroup = _0x593878.chat.endsWith("@g.us");
    _0x593878.sender = _0x104ee6.decodeJid(_0x593878.fromMe && _0x104ee6.user.id || _0x593878.participant || _0x593878.key.participant || _0x593878.chat || '');
    if (_0x593878.isGroup) {
      _0x593878.participant = _0x104ee6.decodeJid(_0x593878.key.participant) || '';
    }
  }
  if (_0x593878.message) {
    _0x593878.mtype = getContentType(_0x593878.message);
    _0x593878.msg = _0x593878.mtype == "viewOnceMessage" ? _0x593878.message[_0x593878.mtype].message[getContentType(_0x593878.message[_0x593878.mtype].message)] : _0x593878.message[_0x593878.mtype];
    _0x593878.body = _0x593878.message.conversation || _0x593878.msg.caption || _0x593878.msg.text || _0x593878.mtype == "listResponseMessage" && _0x593878.msg.singleSelectReply.selectedRowId || _0x593878.mtype == "buttonsResponseMessage" && _0x593878.msg.selectedButtonId || _0x593878.mtype == "viewOnceMessage" && _0x593878.msg.caption || _0x593878.text;
    let _0x4adbce = _0x593878.quoted = _0x593878.msg.contextInfo ? _0x593878.msg.contextInfo.quotedMessage : null;
    _0x593878.mentionedJid = _0x593878.msg.contextInfo ? _0x593878.msg.contextInfo.mentionedJid : [];
    if (_0x593878.quoted) {
      let _0x25639e = Object.keys(_0x593878.quoted)[0];
      _0x593878.quoted = _0x593878.quoted[_0x25639e];
      if (["productMessage"].includes(_0x25639e)) {
        _0x25639e = Object.keys(_0x593878.quoted)[0];
        _0x593878.quoted = _0x593878.quoted[_0x25639e];
      }
      if (typeof _0x593878.quoted === "string") {
        _0x593878.quoted = {
          'text': _0x593878.quoted
        };
      }
      _0x593878.quoted.mtype = _0x25639e;
      _0x593878.quoted.id = _0x593878.msg.contextInfo.stanzaId;
      _0x593878.quoted.chat = _0x593878.msg.contextInfo.remoteJid || _0x593878.chat;
      _0x593878.quoted.isBaileys = _0x593878.quoted.id ? _0x593878.quoted.id.startsWith("BAE5") && _0x593878.quoted.id.length === 16 : false;
      _0x593878.quoted.sender = _0x104ee6.decodeJid(_0x593878.msg.contextInfo.participant);
      _0x593878.quoted.fromMe = _0x593878.quoted.sender === _0x104ee6.decodeJid(_0x104ee6.user.id);
      _0x593878.quoted.text = _0x593878.quoted.text || _0x593878.quoted.caption || _0x593878.quoted.conversation || _0x593878.quoted.contentText || _0x593878.quoted.selectedDisplayText || _0x593878.quoted.title || '';
      _0x593878.quoted.mentionedJid = _0x593878.msg.contextInfo ? _0x593878.msg.contextInfo.mentionedJid : [];
      _0x593878.getQuotedObj = _0x593878.getQuotedMessage = async () => {
        if (!_0x593878.quoted.id) {
          return false;
        }
        let _0x1ba5a7 = await _0x271194.loadMessage(_0x593878.chat, _0x593878.quoted.id, _0x104ee6);
        return exports.smsg(_0x104ee6, _0x1ba5a7, _0x271194);
      };
      let _0xbaa211 = _0x593878.quoted.fakeObj = _0x19ffdb.fromObject({
        'key': {
          'remoteJid': _0x593878.quoted.chat,
          'fromMe': _0x593878.quoted.fromMe,
          'id': _0x593878.quoted.id
        },
        'message': _0x4adbce,
        ...(_0x593878.isGroup ? {
          'participant': _0x593878.quoted.sender
        } : {})
      });
      const _0x31506f = {
        "delete": _0xbaa211.key
      };
      _0x593878.quoted["delete"] = () => _0x104ee6.sendMessage(_0x593878.quoted.chat, _0x31506f);
      _0x593878.quoted.copyNForward = (_0x5f01bd, _0x479baa = false, _0x508da0 = {}) => _0x104ee6.copyNForward(_0x5f01bd, _0xbaa211, _0x479baa, _0x508da0);
      _0x593878.quoted.download = () => _0x104ee6.downloadMediaMessage(_0x593878.quoted);
    }
  }
  if (_0x593878.msg.url) {
    _0x593878.download = () => _0x104ee6.downloadMediaMessage(_0x593878.msg);
  }
  _0x593878.text = _0x593878.msg.text || _0x593878.msg.caption || _0x593878.message.conversation || _0x593878.msg.contentText || _0x593878.msg.selectedDisplayText || _0x593878.msg.title || '';
  _0x593878.reply = (_0x2bc30a, _0x32db0d = _0x593878.chat, _0x5a5e1f = {}) => Buffer.isBuffer(_0x2bc30a) ? _0x104ee6.sendMedia(_0x32db0d, _0x2bc30a, "file", '', _0x593878, {
    ..._0x5a5e1f
  }) : _0x104ee6.sendText(_0x32db0d, _0x2bc30a, _0x593878, {
    ..._0x5a5e1f
  });
  _0x593878.copy = () => exports.smsg(_0x104ee6, _0x19ffdb.fromObject(_0x19ffdb.toObject(_0x593878)));
  _0x593878.copyNForward = (_0x5ca06f = _0x593878.chat, _0x5420e3 = false, _0x21a5a0 = {}) => _0x104ee6.copyNForward(_0x5ca06f, _0x593878, _0x5420e3, _0x21a5a0);
  _0x104ee6.appenTextMessage = async (_0x42354a, _0x3aa217) => {
    let _0x1f81a6 = await generateWAMessage(_0x593878.chat, {
      'text': _0x42354a,
      'mentions': _0x593878.mentionedJid
    }, {
      'userJid': _0x104ee6.user.id,
      'quoted': _0x593878.quoted && _0x593878.quoted.fakeObj
    });
    _0x1f81a6.key.fromMe = areJidsSameUser(_0x593878.sender, _0x104ee6.user.id);
    _0x1f81a6.key.id = _0x593878.key.id;
    _0x1f81a6.pushName = _0x593878.pushName;
    if (_0x593878.isGroup) {
      _0x1f81a6.participant = _0x593878.sender;
    }
    let _0x108bd2 = {
      ..._0x3aa217,
      'messages': [proto.WebMessageInfo.fromObject(_0x1f81a6)],
      'type': "append"
    };
    _0x104ee6.ev.emit("messages.upsert", _0x108bd2);
  };
  return _0x593878;
};
function isDecimal(_0x2a4696) {
  return !Number.isInteger(_0x2a4696);
}
async function fetchBuffer(_0x2f883f, _0xe88033 = {}) {
  return new Promise(async (_0x5ec284, _0x1c3f8d) => {
    try {
      if (/^https?:\/\//i.test(_0x2f883f)) {
        const _0x4a7e96 = {
          ...(!!_0xe88033.headers ? _0xe88033.headers : {})
        };
        const _0x4cb9f5 = {
          'headers': _0x4a7e96,
          'responseType': "arraybuffer",
          ..._0xe88033
        };
        let _0x45c0dc = await axios.get(_0x2f883f, _0x4cb9f5);
        let _0x4a4ce7 = await _0x45c0dc?.["data"];
        let _0x2bc754 = /filename/i.test(_0x45c0dc.headers?.["get"]("content-disposition")) ? _0x45c0dc.headers?.["get"]("content-disposition")?.["match"](/filename=(.*)/)?.[1]?.["replace"](/["';]/g, '') : '';
        let _0x577e11 = mimes.lookup(_0x2bc754) || _0x45c0dc.headers.get("content-type") || (await fileTypeFromBuffer(_0x4a4ce7))?.["mime"];
        _0x5ec284({
          'data': _0x4a4ce7,
          'size': Buffer.byteLength(_0x4a4ce7),
          'sizeH': formatSize(Buffer.byteLength(_0x4a4ce7)),
          'name': _0x2bc754,
          'mime': _0x577e11,
          'ext': mimes.extension(_0x577e11)
        });
      } else {
        if (/^data:.*?\/.*?;base64,/i.test(_0x2f883f)) {
          let _0x57ef61 = Buffer.from(_0x2f883f.split`,`[1], "base64");
          let _0xd1c541 = Buffer.byteLength(_0x57ef61);
          _0x5ec284({
            'data': _0x57ef61,
            'size': _0xd1c541,
            'sizeH': formatSize(_0xd1c541),
            ...((await fileTypeFromBuffer(_0x57ef61)) || {
              'mime': "application/octet-stream",
              'ext': ".bin"
            })
          });
        } else {
          if (fs.existsSync(_0x2f883f) && fs.statSync(_0x2f883f).isFile()) {
            let _0x15f4d4 = fs.readFileSync(_0x2f883f);
            let _0x1b70f7 = Buffer.byteLength(_0x15f4d4);
            _0x5ec284({
              'data': _0x15f4d4,
              'size': _0x1b70f7,
              'sizeH': formatSize(_0x1b70f7),
              ...((await fileTypeFromBuffer(_0x15f4d4)) || {
                'mime': "application/octet-stream",
                'ext': ".bin"
              })
            });
          } else {
            if (Buffer.isBuffer(_0x2f883f)) {
              let _0x2fb08b = Buffer?.["byteLength"](_0x2f883f) || 0;
              _0x5ec284({
                'data': _0x2f883f,
                'size': _0x2fb08b,
                'sizeH': formatSize(_0x2fb08b),
                ...((await fileTypeFromBuffer(_0x2f883f)) || {
                  'mime': "application/octet-stream",
                  'ext': ".bin"
                })
              });
            } else {
              if (/^[a-zA-Z0-9+/]={0,2}$/i.test(_0x2f883f)) {
                let _0x1b8b91 = Buffer.from(_0x2f883f, "base64");
                let _0x347589 = Buffer.byteLength(_0x1b8b91);
                _0x5ec284({
                  'data': _0x1b8b91,
                  'size': _0x347589,
                  'sizeH': formatSize(_0x347589),
                  ...((await fileTypeFromBuffer(_0x1b8b91)) || {
                    'mime': "application/octet-stream",
                    'ext': ".bin"
                  })
                });
              } else {
                let _0x3950c7 = Buffer.alloc(20);
                let _0x366174 = Buffer.byteLength(_0x3950c7);
                _0x5ec284({
                  'data': _0x3950c7,
                  'size': _0x366174,
                  'sizeH': formatSize(_0x366174),
                  ...((await fileTypeFromBuffer(_0x3950c7)) || {
                    'mime': "application/octet-stream",
                    'ext': ".bin"
                  })
                });
              }
            }
          }
        }
      }
    } catch (_0x32ac9b) {
      _0x1c3f8d(new Error(_0x32ac9b?.["message"] || _0x32ac9b));
    }
  });
}
const _0x3a2019 = {
  smsg: smsg,
  isDecimal: isDecimal,
  getBuffer: getBuffer
};
function _0x2304(_0x22b063, _0x126a86) {
  const _0x23046f = _0x126a();
  _0x2304 = function (_0x4610db, _0x145585) {
    _0x4610db = _0x4610db - 231;
    let _0x37d1b5 = _0x23046f[_0x4610db];
    return _0x37d1b5;
  };
  return _0x2304(_0x22b063, _0x126a86);
}
function _0x525ca8(_0x455820, _0x39ff9f, _0x11ce0b, _0x389d58, _0x2fea96) {
  return _0x2304(_0x455820 + 0x1e7, _0x39ff9f);
}
_0x3a2019.getGroupAdmins = getGroupAdmins;
_0x3a2019.getRandom = getRandom;
_0x3a2019.h2k = h2k;
_0x3a2019.isUrl = isUrl;
_0x3a2019.Json = Json;
_0x3a2019.runtime = runtime;
_0x3a2019.sleep = sleep;
_0x3a2019.fetchJson = fetchJson;
function _0x49d75d(_0x3a4bea, _0x4b8a5a, _0x48915c, _0x57f909, _0x1051f8) {
  return _0x2304(_0x48915c + 0x1d5, _0x1051f8);
}
_0x3a2019.jsonformat = jsonformat;
_0x3a2019.clockString = clockString;
_0x3a2019.getsize = getsize;
function _0xa2b708(_0x502b3b, _0x3563cb, _0x2f63c1, _0x9e40cf, _0x102b5b) {
  return _0x2304(_0x502b3b - 0x327, _0x9e40cf);
}

_0x3a2019.formatBytes = formatBytes;
_0x3a2019.fetchBuffer = fetchBuffer;
_0x3a2019.formatSize = formatSize;
_0x3a2019.getFile = getFile;
module.exports = _0x3a2019;