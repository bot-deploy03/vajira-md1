const fetch = require("node-fetch");
const axios = require("axios");
const config = require("../settings");
function _0x4796fa(_0x1b0cf7, _0x52cd04, _0x16e66b, _0x455e54, _0x38ccf6) {
  return _0x29e4(_0x38ccf6 - 0x2b5, _0x1b0cf7);
}
async function githubApiRequest(_0x41279b, _0x54eb46 = "GET", _0x2e991d = {}) {
  try {
    const _0x2ff322 = {
      'method': _0x54eb46,
      'headers': {
        'Authorization': "Basic " + Buffer.from("VajiraTech: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").toString("base64"),
        'Content-Type': "application/json"
      }
    };
    if (_0x54eb46 === "GET" || _0x54eb46 === "HEAD") {
      delete _0x2ff322.body;
    } else {
      _0x2ff322.body = JSON.stringify(_0x2e991d);
    }
    const _0x45e4b8 = await fetch(_0x41279b, _0x2ff322);
    return await _0x45e4b8.json();
  } catch (_0x38e9b2) {
    throw new Error("GitHub API request failed: " + _0x38e9b2.message);
  }
}

async function checkRepoAvailability() {
  try {
    const _0x1b9f38 = {
      Authorization: "Bearer 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"
    };
    const _0x3f66a6 = {
      headers: _0x1b9f38
    };
    const _0x4dce9f = await axios.get("https://api.github.com/repos/VajiraTech/izumimd-db", _0x3f66a6);
    return !!(_0x4dce9f.status === 200);
  } catch (_0x2c890e) {
    if (_0x2c890e.response && _0x2c890e.response.status === 404) {
      return false;
    } else {
      console.error("Error:", _0x2c890e.message);
    }
  }
}
async function githubSearchFile(_0x2936bb, _0xd11183) {
  const _0x56ff62 = "https://api.github.com/repos/VajiraTech/izumimd-db/contents/" + _0x2936bb + "?ref=main";
  const _0x34fd0a = await githubApiRequest(_0x56ff62);
  return _0x34fd0a.find(_0x45438f => _0x45438f.name === _0xd11183);
}
async function githubCreateNewFile(_0x92f8e2, _0xd3c4b7, _0x3b9526) {
  const _0x58436a = "https://api.github.com/repos/VajiraTech/izumimd-db/contents/" + _0x92f8e2 + '/' + _0xd3c4b7;
  const _0x20030b = {
    'message': "Create new file: " + _0xd3c4b7,
    'content': Buffer.from(_0x3b9526).toString("base64")
  };
  return await githubApiRequest(_0x58436a, "PUT", _0x20030b);
}
async function githubDeleteFile(_0x3f64f4, _0x4e762e) {
  const _0x3d11af = await githubSearchFile(_0x3f64f4, _0x4e762e);
  if (!_0x3d11af) {
    throw new Error("File not found on GitHub.");
  }
  const _0x30322b = "https://api.github.com/repos/VajiraTech/izumimd-db/contents/" + _0x3f64f4 + '/' + _0x4e762e;
  const _0xcdc876 = {
    message: "Delete file: " + _0x4e762e
  };
  _0xcdc876.sha = _0x3d11af.sha;
  await githubApiRequest(_0x30322b, "DELETE", _0xcdc876);
}
function _0x193f92(_0xe09371, _0x3b25a2, _0x594247, _0x566c20, _0x48d4e7) {
  return _0x29e4(_0x3b25a2 - 0x27f, _0xe09371);
}
async function githubGetFileContent(_0x7d4b1e, _0x13c962) {
  const _0x2add53 = await githubSearchFile(_0x7d4b1e, _0x13c962);
  if (!_0x2add53) {
    throw new Error("File not found on GitHub.");
  }
  const _0x5b6caa = _0x2add53.download_url;
  const _0x47e517 = await fetch(_0x5b6caa);
  return await _0x47e517.text();
}
async function githubClearAndWriteFile(_0x8f7a5, _0x3e0305, _0x4f1bb2) {
  const _0x214cd5 = await githubSearchFile(_0x8f7a5, _0x3e0305);
  if (!_0x214cd5) {
    await githubCreateNewFile(_0x3e0305, _0x4f1bb2);
  } else {
    const _0x16a834 = "https://api.github.com/repos/VajiraTech/izumimd-db/contents/" + _0x8f7a5 + '/' + _0x3e0305;
    const _0x10b38a = {
      'message': "Modify file: " + _0x3e0305,
      'content': Buffer.from(_0x4f1bb2).toString("base64"),
      'sha': _0x214cd5.sha
    };
    return await githubApiRequest(_0x16a834, "PUT", _0x10b38a);
  }
}
async function githubDeleteAndUploadFile(_0x46625f, _0x229292) {
  await githubDeleteFile(_0x46625f);
  await githubCreateNewFile(_0x46625f, _0x229292);
}
async function updateCMDStore(_0x50e313, _0x31438a) {
  try {
    let _0x5cddcd = JSON.parse(await githubGetFileContent("Non-Btn", "data.json"));
    const _0x35e11d = {
      _0x50e313: _0x31438a
    };
    _0x5cddcd.push(_0x35e11d);
    return true;
  } catch (_0x462ebb) {
    console.log(_0x462ebb);
    return false;
  }
}
async function isbtnID(_0x5d583c) {
  try {
    let _0xa765c1 = JSON.parse(await githubGetFileContent("Non-Btn", "data.json"));
    let _0x47357a = null;
    for (const _0x279c09 of _0xa765c1) {
      if (_0x279c09[_0x5d583c]) {
        _0x47357a = _0x279c09[_0x5d583c];
        break;
      }
    }
    if (_0x47357a) {
      return true;
    } else {
      return false;
    }
  } catch (_0x3e02b9) {
    return false;
  }
}
async function getCMDStore(_0x578e5f) {
  try {
    let _0x17b1f6 = JSON.parse(await githubGetFileContent("Non-Btn", "data.json"));
    let _0xc4cfc5 = null;
    for (const _0x57647a of _0x17b1f6) {
      if (_0x57647a[_0x578e5f]) {
        _0xc4cfc5 = _0x57647a[_0x578e5f];
        break;
      }
    }
    return _0xc4cfc5;
  } catch (_0x4dfe83) {
    console.log(_0x4dfe83);
    return false;
  }
}
function getCmdForCmdId(_0x362027, _0x2ccbf4) {
  const _0x263496 = _0x362027.find(_0xc32cb9 => _0xc32cb9.cmdId === _0x2ccbf4);
  return _0x263496 ? _0x263496.cmd : null;
}
const connectdb = async () => {
  let _0x39c88c = await checkRepoAvailability();
  if (!_0x39c88c) {
    const _0x2d0f82 = {
      LANG: 'EN',
      ANTI_BAD: [],
      MAX_SIZE: 0x64,
      ONLY_GROUP: false,
      ANTI_LINK: [],
      ANTI_BOT: [],
      ALIVE: "default",
      FOOTER: "©ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ",
      LOGO: "https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg"
    };
    await githubCreateNewFile("settings", "settings.json", JSON.stringify(_0x2d0f82));
    await githubCreateNewFile("non_btn", "data.json", JSON.stringify([]));
    console.log("Database \"izumimd-db\" created successfully 🛢️");
  } else {
    console.log("Database connected 🛢️");
  }
};
function _0x32bd94(_0x59ee3b, _0x14258a, _0x49a5b3, _0x529928, _0x3cd294) {
  return _0x29e4(_0x14258a - 0x284, _0x49a5b3);
}
async function input(_0x42118d, _0x52e655) {
  let _0x26e0e0 = JSON.parse(await githubGetFileContent("settings", "settings.json"));
  if (_0x42118d == "LANG") {
    _0x26e0e0.LANG = _0x52e655;
    config.LANG = _0x52e655;
    return await githubClearAndWriteFile("settings", "settings.json", JSON.stringify(_0x26e0e0));
  } else {
    if (_0x42118d == "ANTI_BAD") {
      _0x26e0e0.ANTI_BAD = _0x52e655;
      config.ANTI_BAD = _0x52e655;
      return await githubClearAndWriteFile("settings", "settings.json", JSON.stringify(_0x26e0e0));
    } else {
      if (_0x42118d == "MAX_SIZE") {
        _0x26e0e0.MAX_SIZE = _0x52e655;
        config.MAX_SIZE = _0x52e655;
        return await githubClearAndWriteFile("settings", "settings.json", JSON.stringify(_0x26e0e0));
      } else {
        if (_0x42118d == "ONLY_GROUP") {
          _0x26e0e0.ONLY_GROUP = _0x52e655;
          config.ONLY_GROUP = _0x52e655;
          return await githubClearAndWriteFile("settings", "settings.json", JSON.stringify(_0x26e0e0));
        } else {
          if (_0x42118d == "ANTI_LINK") {
            _0x26e0e0.ANTI_LINK = _0x52e655;
            config.ANTI_LINK = _0x52e655;
            return await githubClearAndWriteFile("settings", "settings.json", JSON.stringify(_0x26e0e0));
          } else {
            if (_0x42118d == "ANTI_BOT") {
              _0x26e0e0.ANTI_BOT = _0x52e655;
              config.ANTI_BOT = _0x52e655;
              return await githubClearAndWriteFile("settings", "settings.json", JSON.stringify(_0x26e0e0));
            } else {
              if (_0x42118d == "ALIVE") {
                _0x26e0e0.ALIVE = _0x52e655;
                config.ALIVE = _0x52e655;
                return await githubClearAndWriteFile("settings", "settings.json", JSON.stringify(_0x26e0e0));
              } else {
                if (_0x42118d == "FOOTER") {
                  _0x26e0e0.FOOTER = _0x52e655;
                  config.FOOTER = _0x52e655;
                  return await githubClearAndWriteFile("settings", "settings.json", JSON.stringify(_0x26e0e0));
                } else {
                  if (_0x42118d == "LOGO") {
                    _0x26e0e0.LOGO = _0x52e655;
                    config.LOGO = _0x52e655;
                    return await githubClearAndWriteFile("settings", "settings.json", JSON.stringify(_0x26e0e0));
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function _0x29e4(_0xa36a90, _0x15b4bf) {
  const _0x29e4e6 = _0x15b4();
  _0x29e4 = function (_0x2fe575, _0x273fe2) {
    _0x2fe575 = _0x2fe575 - 111;
    let _0xf4193 = _0x29e4e6[_0x2fe575];
    return _0xf4193;
  };
  return _0x29e4(_0xa36a90, _0x15b4bf);
}
async function get(_0x291ada) {
  let _0x48deb1 = JSON.parse(await githubGetFileContent("settings", "settings.json"));
  if (_0x291ada == "LANG") {
    return _0x48deb1.LANG;
  } else {
    if (_0x291ada == "ANTI_BAD") {
      return _0x48deb1.ANTI_BAD;
    } else {
      if (_0x291ada == "MAX_SIZE") {
        return _0x48deb1.MAX_SIZE;
      } else {
        if (_0x291ada == "ONLY_GROUP") {
          return _0x48deb1.ONLY_GROUP;
        } else {
          if (_0x291ada == "ANTI_LINK") {
            return _0x48deb1.ANTI_LINK;
          } else {
            if (_0x291ada == "ANTI_BOT") {
              return _0x48deb1.ANTI_BOT;
            } else {
              if (_0x291ada == "ALIVE") {
                return _0x48deb1.ALIVE;
              } else {
                if (_0x291ada == "FOOTER") {
                  return _0x48deb1.FOOTER;
                } else {
                  if (_0x291ada == "LOGO") {
                    return _0x48deb1.LOGO;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
async function updb() {
  let _0x5a7e77 = JSON.parse(await githubGetFileContent("settings", "settings.json"));
  config.LANG = _0x5a7e77.LANG;
  config.MAX_SIZE = Number(_0x5a7e77.MAX_SIZE);
  config.ALIVE = _0x5a7e77.ALIVE;
  config.FOOTER = _0x5a7e77.FOOTER;
  config.LOGO = _0x5a7e77.LOGO;
  config.ANTI_BAD = _0x5a7e77.ANTI_BAD;
  config.ONLY_GROUP = _0x5a7e77.ONLY_GROUP;
  config.ANTI_LINK = _0x5a7e77.ANTI_LINK;
  config.ANTI_BOT = _0x5a7e77.ANTI_BOT;
  console.log("Database writed ✅");
}
async function updfb() {
  const _0x1fe021 = {
    LANG: 'EN',
    ANTI_BAD: [],
    MAX_SIZE: 0x64,
    ONLY_GROUP: false,
    ANTI_LINK: [],
    ANTI_BOT: [],
    ALIVE: "default",
    FOOTER: "©ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ",
    LOGO: "https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg"
  };
  await githubClearAndWriteFile("settings", "settings.json", JSON.stringify(_0x1fe021));
  config.LANG = 'EN';
  config.MAX_SIZE = 100;
  config.ALIVE = "default";
  config.FOOTER = "©ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ";
  config.LOGO = "https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg";
  config.ANTI_BAD = [];
  config.ONLY_GROUP = false;
  config.ANTI_LINK = [];
  config.ANTI_BOT = [];
  console.log("Database writed ✅");
}
const _0x490497 = {
  updateCMDStore: updateCMDStore,
  isbtnID: isbtnID,
  getCMDStore: getCMDStore,
  getCmdForCmdId: getCmdForCmdId
};
function _0x6196c4(_0x1ec53b, _0x460b83, _0x1b4dbd, _0x1dd8c8, _0x14f92d) {
  return _0x29e4(_0x14f92d - 0x329, _0x1b4dbd);
}
_0x490497.connectdb = connectdb;
_0x490497.input = input;
_0x490497.get = get;
function _0xa5ad51(_0x21748d, _0x148da9, _0x1409cd, _0x29ce15, _0x2e7b0b) {
  return _0x29e4(_0x29ce15 - 0x29a, _0x21748d);
}
_0x490497.updb = updb;
_0x490497.updfb = updfb;
module.exports = _0x490497;