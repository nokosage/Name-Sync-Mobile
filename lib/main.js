var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");
pageMod.PageMod({
  include: "*.4chan.org",
  contentScriptWhen: 'end',
  contentScriptFile: data.url("NameSync.mobile.user.js")
});