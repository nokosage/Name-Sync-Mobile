// ==UserScript==
// @name         Name Sync Mobile
// @version      1.0.0
// @namespace    nokosage
// @description  Enables names on 4chan. Does not require 4chan X.
// @author       milkytiptoe
// @author       ihavenoface
// @author       nokosage
// @include      *://boards.4chan.org/b/*
// @include      *://boards.4chan.org/soc/*
// @include      *://boards.4chan.org/s4s/*
// @run-at       document-start
// @grant        none
// @updateURL    https://namesync.org/mobile/builds/NameSync.mobile.meta.js
// @downloadURL  https://namesync.org/mobile/builds/NameSync.mobile.user.js
// @icon         data:image/png;base64,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
// ==/UserScript==

/*
  Name Sync Mobile v1.0.0
  https://www.namesync.org/

  Developers:
  milkytiptoe
  ihavenoface
  nokosage

  Contributers:
  https://github.com/nokosage/Name-Sync-Mobile/graphs/contributors

  This script contains code from NameSync (https://github.com/milkytiptoe/Name-Sync)
  @license: https://raw.github.com/milkytiptoe/Name-Sync/master/license
*/

function initNameSync() {
  var d, db, h, $, $$;
  d = document;
  db = document.body;
  h = document.getElementsByTagName('head') [0];
  
  $ = function (s, p) {
    if (!p || p == null) {
      p = d;
    }
    return p.querySelector(s);
  }
  
  $$ = function (s, p) {
    if (!p || p == null) {
      p = d;
    }
    return p.querySelectorAll(s);
  }
  
  $.getVal = function (k, v) {
    if (typeof (Storage) !== 'undefined') {
      if (v == null) {
        if (localStorage.getItem('' + g.NAMESPACE + k) != null) {
          return localStorage.getItem('' + g.NAMESPACE + k);
        } else {
          return 'undefined';
        }
      } else {
        if (localStorage.getItem('' + g.NAMESPACE + k) != null) {
          return localStorage.getItem('' + g.NAMESPACE + k);
        } else {
          return v;
        }
      }
    } else {
      return 'storage unavailable';
    }
  }
  
  $.setVal = function (k, v) {
    if (typeof (Storage) !== 'undefined') {
      if (v == null) {
        return 'undefined';
      } else {
        return localStorage.setItem('' + g.NAMESPACE + k, v);
      }
    } else {
      return 'storage unavailable';
    }
  }
  
  $.delVal = function (k) {
    return localStorage.removeItem('' + g.NAMESPACE + k);
  }
  
  $.htm = function (s, v) {
    if (v == null) {
      return s.innerHTML;
    } else {
      s.innerHTML = v;
    }
    return s;
  }
  
  $$.htm = function (s, v, n) {
    if (v == null) {
      return s.innerHTML;
    } else {
      if (!n || n == null) {
        for (var i = 0; i < s.length; i++) {
          s[i].innerHTML = v;
        }
      } else {
        s[n].innerHTML = v;
      }
    }
    return s;
  }
  
  $.val = function (s, v) {
    if (v == null) {
      return s.value;
    } else {
      s.value = v;
    }
    return s;
  }
  
  $.att = function (s, a, v) {
    if (!v || v == null || v == false) {
      if (v == false) {
        return s.removeAttribute(a);
      } else {
        return s.getAttribute(a);
      }
    } else {
      s.setAttribute(a, v);
      return s;
    }
  }
  
  $$.att = function (s, a, v, n) {
    if (!v || v == null) {
      if (!n && n != 0 || n == null && n != 0) {
        var x = [
        ];
        for (var i = 0; i < $$(s) .length; i++) {
          x.push(s[i].getAttribute(a));
        }
        return x;
      } else {
        return s[n].getAttribute(a);
      }
    } else {
      if (!n || n == null) {
        for (var i = 0; i < $$(s) .length; i++) {
          s[i].setAttribute(a, v);
        }
      } else {
        s[n].setAttribute(a, v);
      }
      return s;
    }
  }
  
  $.elm = function (t, a, s) {
    var e = d.createElement(t);
    if (a) {
      for (key in a) {
        e.setAttribute(key, a[key]);
      }
    }
    if (s) {
      s.appendChild(e);
    }
    return e;
  }
  
  $.css = function (s) {
    var e = d.createElement('style');
    e.type = 'text/css';
    if (e.styleSheet) {
      e.styleSheet.cssText = s;
    } else {
      e.appendChild(d.createTextNode(s));
    }
    h.appendChild(e);
    return e;
  }
  
  $.event = function (t, i, s) {
    if (i == null) {
      i = {
      };
    }
    if (s == null) {
      s = d;
    }
    return s.dispatchEvent(new CustomEvent(t, i));
  }
  
  $.exists = function (s) {
    if (s.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  
  $.each = function (a, c, e) {
    for (var i = 0; i < a.length; i++) {
      c(a[i], i);
      if (i == (a.length) - 1) {
        if (e && e != null) {
          return e(a[i], i);
        } else {
          return a;
        }
      }
    }
  }
  
  $.time = function (t, c, l) {
    if (c == false) {
      return clearInterval(t);
    } else {
      if (l == true) {
        return setInterval(function () {
          c();
        }, t);
      } else {
        return setTimeout(function () {
          c();
        }, t);
      }
    }
  }
  
  $.xhr = function (t, u, i, c, p) {
    if (i != null) {
      if (t == 'POST') {
        var xd = new FormData();
        for (key in i) {
          xd.append(key, i[key]);
        }
      } else {
        xd = '?';
        for (key in i) {
          xd += key + '=' + i[key] + '&';
        }
        xd = xd.substring(0, (xd.length - 1));
        u += xd;
      }
    }
    var x = new XMLHttpRequest();
    x.open(t, u);
    if (p != null) {
      for (key in p) {
        x.setRequestHeader(key, p[key]);
      }
    }
    x.onreadystatechange = function () {
      if (x.readyState == 4) {
        return c(x);
      }
    }
    if (t == 'POST' && i != null) {
      x.send(xd);
    } else {
      x.send();
    }
  }
  
  $.JSON = function (s) {
    if (typeof s == 'string') {
      return JSON.parse(s);
    } else {
      return JSON.stringify(s);
    }
  }
  
  $.after = function (n, s) {
    return s.parentNode.insertBefore(n, s.nextSibling);
  }
  
  $.before = function (n, s) {
    return s.parentNode.insertBefore(n, s);
  }
  
  $.addClass = function (el, className) {
    return el.classList.add(className);
  };
  
  $.hasClass = function (el, className) {
    return el.classList.contains(className);
  };
  
  $.tn = function (text) {
    return d.createTextNode(text);
  };
  
  $.add = function (parent, children) {
    return parent.appendChild($.nodes(children));
  };
  
  $.nodes = function (nodes) {
    var frag, node, _i, _len;
    if (!(nodes instanceof Array)) {
      return nodes;
    }
    frag = d.createDocumentFragment();
    for (_i = 0, _len = nodes.length; _i < _len; _i++) {
      node = nodes[_i];
      frag.appendChild(node);
    }
    return frag;
  };
  
  $.on = function (el, type, handler) {
    return el.addEventListener(type, handler, false);
  };
  
  $.off = function (el, type, handler) {
    return el.removeEventListener(type, handler, false);
  };
  
  $.ready = function (fc) {
    var cb;
    if (d.readyState !== 'loading') {
      fc();
      return ;
    }
    cb = function () {
      $.off(d, 'DOMContentLoaded', cb);
      return fc();
    };
    return $.on(d, 'DOMContentLoaded', cb);
  };
  
  $.JSON = function (s) {
    if (typeof s == 'string') {
      return JSON.parse(s);
    } else {
      return JSON.stringify(s);
    }
  }
  
  $.destroy = function (s) {
    return s.parentNode.removeChild(s);
  }
  
  Set = {};
  
  g = {
    NAMESPACE: 'NameSync.Mobile.',
    VERSION: '1.0.0',
    checked: false,
    posts: {}
  };
  
  Config = {
    main: {
      'Sync on /b/': [true, 'Enable sync on /b/.'],
      'Sync on /soc/': [true, 'Enable sync on /soc/.'],
      'Sync on /s4s/': [true, 'Enable sync on /s4s/.'],
      'Do Not Track': [false, 'Request no sync field tracking by third party archives.']
    },
    other: {
      'Persona Fields': [false],
      'Filter': [false]
    }
  };
  
  Settings = {
    init: function() {
      var el, section, setting, stored, val, _i, _len, _ref, _ref1;
      _ref = Object.keys(Config);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        section = _ref[_i];
        _ref1 = Config[section];
        for (setting in _ref1) {
          val = _ref1[setting];
          stored = $.getVal(setting);
          Set[setting] = stored === null ? val[0] : stored === 'true';
        }
      }
	  Settings.createSettingsButtons();
    },
	createSettingsButtons: function() {
	  if ($('#boardNavMobile')) {
        el = $.htm($.elm('a', {
          'href': 'javascript:;',
          'class': 'shortcut'
        }), 'NameSync');
        $.before(el, $('#settingsWindowLinkMobile'));
        $.on(el, 'click', function () {
          Settings.click();
        });
      }
      if ($('#settingsWindowLink')) {
        el = $.htm($.elm('a', {
          'href': 'javascript:;',
          'class': 'shortcut'
        }), 'NameSync');
        $.before(el, $('#settingsWindowLink'));
        $.after($.tn(' / '), el);
        $.on(el, 'click', function () {
          Settings.click();
        });
      }
      if ($('#settingsWindowLinkBot')) {
        el = $.htm($.elm('a', {
          'href': 'javascript:;',
          'class': 'shortcut'
        }), 'NameSync');
        $.before(el, $('#settingsWindowLinkBot'));
        $.after($.tn(' / '), el);
        $.on(el, 'click', function () {
          Settings.click();
        });
      }
	},
    click: function() {
      if ($('#NameSync_Settings', document.body))
        Settings.close();
      else
        Settings.open();
    },
    open: function() {
      var el;
      $html = '<div id="NameSync_Menu" class="reply" style="position: relative; max-height: 85%; width: 300px; left: 50%; margin-left: -150px; top: 10%; text-align: center;">'+
                '<div style="font-size: 16pt; font-weight: bold; border-bottom: 1px solid rgba(0, 0, 0, 0.25); padding-bottom: 5px; margin-bottom: 10px;">NameSync Settings</div>'+
                '<input type="text" id="NameSync_Name" placeholder="Name" style="margin-left: 1px;"/><a style="cursor: pointer; font-size: 10pt; text-decoration: none ! important;" id="clearNameSync_Name">[x]</a><br>'+
                '<input type="text" id="NameSync_Email" placeholder="Email" style="margin-left: 1px;"/><a style="cursor: pointer; font-size: 10pt; text-decoration: none ! important;" id="clearNameSync_Email">[x]</a><br>'+
                '<input type="text" id="NameSync_Subject" placeholder="Subject" style="margin-left: 1px;"/><a style="cursor: pointer; font-size: 10pt; text-decoration: none ! important;" id="clearNameSync_Subject">[x]</a>'+
                '<div style="margin:5px;">'+
                  '[ '+
                  '<a href="javascript:;">Reset Settings</a>'+
                  ' / '+
                  '<a id="NameSync_Save" href="javascript:;">Save Settings</a>'+
                  ' ]'+
                '</div>'+
				        '<div style="font-weight: bold; border-bottom: 1px solid rgba(0, 0, 0, 0.25); margin-bottom: 10px; border-top: 1px solid rgba(0, 0, 0, 0.25); font-size: 13pt;">About</div>'+
                '<div>'+
                  '<a href="javascript:;" id="btnCheckUpdate" style="font-weight: bold;">Check for Update</a>'+
                  '<div id="textCheckUpdate" style="min-height: 15px;"></div>'+
                '</div>'+
                '<div>4chan Name Sync Mobile v'+g.VERSION+'<br />'+
                  '<a href="http://milkytiptoe.github.io/Name-Sync/">Website</a> | <a href="https://github.com/milkytiptoe/Name-Sync/wiki/Support">Support</a> | <a href="https://raw.github.com/milkytiptoe/Name-Sync/master/license">License</a> | <a href="#">Changelog</a> | <a href="#">Issues</a>'+
                '</div>'+
              '</div>';
      $el = {
        'id': 'NameSync_Settings',
        'style': 'top:0;left:0;width:100%;height:100%;position:fixed;background-color:rgba(0, 0, 0, 0.25);'
      };
      el = $.htm($.elm('div', $el, document.body), $html);
      
      if ($.getVal('persona.name') !== 'undefined') $('#NameSync_Name').value = $.getVal('persona.name');
      if ($.getVal('persona.email') !== 'undefined') $('#NameSync_Email').value = $.getVal('persona.email');
      if ($.getVal('persona.subject') !== 'undefined') $('#NameSync_Subject').value = $.getVal('persona.subject');
      
      $.on($('#NameSync_Settings'), 'click', function(e) {
        if (e.target.id === 'NameSync_Settings')
          Settings.close();;
      });
      $.on($('#NameSync_Save'), 'click', function(e) {
        Settings.save();
      });
      $.on($('#clearNameSync_Name'), 'click', function(e) {
        $('#NameSync_Name').value = '';
      });
      $.on($('#clearNameSync_Email'), 'click', function(e) {
        $('#NameSync_Email').value = '';
      });
      $.on($('#clearNameSync_Subject'), 'click', function(e) {
        $('#NameSync_Subject').value = '';
      });
      $.on($('#btnCheckUpdate'), 'click', function(e) {
        Sync.checkUpdate();
      });
    },
    close: function() {
      $.destroy($('#NameSync_Settings', document.body));
    },
    reset: function() {
      
    },
    save: function() {
      var subject, name, email;
      subject = $('#NameSync_Subject').value;
      name = $('#NameSync_Name').value;
      email = $('#NameSync_Email').value;
      
      $.setVal('persona.name', name);
      $.setVal('persona.subject', subject);
      $.setVal('persona.email', email);
    }
  };
  /*
  CSS = {
  };
  */
  NameSync = {
    ready: function () {
      var path,
      _ref;
      path = location.pathname.split('/');
      g.board = path[1];
      g.view = (_ref = path[2]) === 'thread' || _ref === 'catalog' ? path[2] : 'index';
      if (g.view !== 'thread') {
        return ;
      }
      g.thread = $('.thread') .id.slice(1);
      NameSync.init();
      Settings.init();
    },
    init: function () {
      if (g.view === 'catalog') {
        return;
      }
      if ($.getVal('post.form') !== 'undefined') {
        Sync.postFormEvent();
      }
      $.on(d, '4chanThreadUpdated', function (e) {
        NameSync.run();
      });
      $.on(d, '4chanQRPostSuccess', function(e){
	    Sync.postQREvent(e);
	  });
      $.on( $('#postForm').parentNode, 'submit', function() {
		Sync.postFormEvent();
	  });
      
      //$.on($('[value="Post"]'), 'click', Sync.postFormEvent);
      NameSync.run();
    },
    run: function () {
      var posts;
      posts = $$('.thread > .postContainer');
      for (_i = 0, _len = posts.length; _i < _len; _i++) {
        post = posts[_i];
        g.posts[post.id.slice(2)] = new Post(post);
      }
      return Sync.sync();
    }
  };
  
  Names = {
    namesync: {},
    lastUpdate: 0,
    updateAllPosts: function () {
      var _i, _len, key, data;
      for (_i = 0, _len = Names.namesync.length; _i < _len; _i++) {
        data = Names.namesync[_i];
        key = data['p'];
        Names.updatePost(key, _i);
      }
    },
    updatePost: function (no, idx) {
      var post, data, email, emailspan, emailspanM, name, namespan, namespanM, subject, subjectspan, subjectspanM, tripcode, tripspan, tripspanM;
      post = g.posts[no];
      data = Names.namesync[idx];
      if (!post || !data) return;
      
      name = (data.n) ? data.n : false;
      subject = (data.s) ? data.s : false;
      tripcode = (data.t) ? data.t : false;
      email = (data.e) ? data.e : false;
      
      namespan = post.nodes.name;
      namespanM = post.nodes.nameM;
      subjectspan = post.nodes.subject;
      subjectspanM = post.nodes.subjectM;
      tripspan = $('.postertrip', post.nodes.info);
      tripspanM = $('.postertrip', post.nodes.infoM);
      emailspan = $('.useremail', post.nodes.info);
      emailspanM = $('.useremail', post.nodes.infoM);
      
      if (name) {
        namespan.textContent = name;
        namespanM.textContent = name;
      }
      if (subject) {
        subjectspan.textContent = subject;
        subjectspanM.textContent = subject;
      }
      if (email) {
        if (emailspan === null) {
          emailspan = $.elm('a', {
            'class': 'useremail'
          });
          $.before(emailspan, namespan);
        }
        $.add(emailspan, namespan);
        if (tripspan != null) {
          $.after($.tn(' '), namespan);
          $.add(emailspan, tripspan);
        }
        if (emailspanM === null) {
          emailspanM = $.elm('a', {
            'class': 'useremail'
          });
          $.before(emailspanM, namespanM);
        }
        $.add(emailspanM, namespanM);
        if (tripspanM != null) {
          $.after($.tn(' '), namespanM);
          $.add(emailspanM, tripspanM);
        }
        emailspan.href = 'mailto:' + email;
        emailspanM.href = 'mailto:' + email;
      }
      if (tripcode) {
        if (tripspan === null) {
          tripspan = $.elm('span', {
            'class': 'postertrip'
          });
          $.after(tripspan, namespan);
          $.before($.tn(' '), tripspan);
        }
        if (tripspanM === null) {
          tripspanM = $.elm('span', {
            'class': 'postertrip'
          });
          $.after(tripspanM, namespanM);
          $.before($.tn(' '), tripspanM);
        }
        if (!name) {
          namespan.textContent = '';
          namespanM.textContent = '';
        }
        tripspan.textContent = tripcode;
        tripspanM.textContent = tripcode;
      }
      Names.lastUpdate = data.time;
    }
  };
  
  Sync = {
    sync: function () {
      $HEADERS = {
        'X-Requested-With': '' + g.NAMESPACE + 'v' + g.VERSION,
        'If-Modified-Since': Names.lastUpdate
      };
      $GET = {
        'b': g.board,
        't': g.thread
      };
      $.xhr('GET', 'https://namesync.org/namesync/qp.php', $GET, function (c) {
        if (c.responseText !== '') {
          Names.namesync = $.JSON(c.responseText);
          Names.updateAllPosts();
          return $.event('NamesSynced');
        }
      }, $HEADERS);
    },
    postQREvent: function (e) {
      var name, subject, email, postID, threadID;
	  
      //postID = e.detail.postId;
      //threadID = e.detail.threadId;
	  postID = Object.keys(window.wrappedJSObject.Parser.trackedReplies)[Object.keys(window.wrappedJSObject.Parser.trackedReplies).length-1].substr(2);
	  threadID = g.thread;
      name = ($.getVal('persona.name') !== 'undefined') ? $.getVal('persona.name') : '';
      email = ($.getVal('persona.email') !== 'undefined') ? $.getVal('persona.email') : '';
      subject = ($.getVal('persona.subject') !== 'undefined') ? $.getVal('persona.subject') : '';
      Sync.post(name, subject, email, threadID, postID);
    },
    postFormEvent: function () {
      var name, subject, email, postID, threadID;
      
      if ($.getVal('post.form') !== 'undefined') {
        if (window.location.href.split('#p')[1]) {
          postID = window.location.href.split('#p')[1];
          threadID = $.getVal('post.form');
          name = ($.getVal('persona.name') !== 'undefined') ? $.getVal('persona.name') : '';
          email = ($.getVal('persona.email') !== 'undefined') ? $.getVal('persona.email') : '';
          subject = ($.getVal('persona.subject') !== 'undefined') ? $.getVal('persona.subject') : '';
          Sync.post(name, subject, email, threadID, postID);
        }
        $.setVal('post.form', 'undefined');
      } else {
        $.setVal('post.form', g.thread);
      }
    },
    post: function (name, subject, email, thread, no) {
      if (name + subject + email === '') return;
      $HEADERS = {
        'X-Requested-With': '' + g.NAMESPACE + 'v' + g.VERSION
      };
      $POST = {
        'b': g.board,
        't': thread,
        'p': no,
        'n': name,
        's': subject,
        'e': email,
        'dnt': 0
      };
      $.xhr('POST', 'https://namesync.org/namesync/sp.php', $POST, function (c) {
        window.setTimeout(function(){
          NameSync.run();
        }, 1000);
      }, $HEADERS);
    },
    checkUpdate: function () {
      if (!g.checked) {
        $HEADERS = {
          'X-Requested-With': '' + g.NAMESPACE + 'v' + g.VERSION
        };
        $.xhr('GET', 'https://namesync.org/mobile/v.php', null, function (c) {
          var v;
          v = $.JSON(c.responseText)['VERSION'];
          if (g.VERSION !== v) {
            $HTML = '<span style="color: red; font-weight: bold;">New Version Available:</span> <a href="https://namesync.org/mobile/" style="font-weight: bold;">Here</a>';
            $.htm($('#textCheckUpdate'), $HTML);
          } else {
            $HTML = '<span style="color: green; font-weight: bold;">Up-to-date</span>';
            $.htm($('#textCheckUpdate'), $HTML);
          }
          g.checked = true;
        }, $HEADERS);
      }
    }
  };
  
  Post = (function () {
    Post.prototype.toString = function () {
      return this.ID;
    };
    function Post(root) {
      var capcode, date, info, name, nameM, post, subject, subjectM;
      this.ID = root.id.slice(2);
      post = $('.post', root);
      info = $('.postInfo', post);
      infoM = $('.postInfoM', post);
      this.nodes = {
        root: root,
        post: post,
        info: info,
        infoM: infoM
      };
      this.isReply = $.hasClass(post, 'reply');
      this.info = {
      };
      if (!(subject = $('.subject', info))) {
        $el = {
          'class': 'subject'
        };
        subject = $.elm('span', $el, info);
        $.before(subject, $('.nameBlock', info));
        $.after($.tn(' '), subject);
      }
      if (!(subjectM = $('.subject', infoM))) {
        subjectM = $.elm('span', {
          'class': 'subject'
        }, infoM);
        $.before(subjectM, $('.nameBlock', infoM));
        $.after($.tn(' '), subjectM);
      }
      this.nodes.subject = subject;
      this.nodes.subjectM = subjectM;
      if (name = $('.name', info)) {
        this.nodes.name = name;
      }
      if (nameM = $('.name', infoM)) {
        this.nodes.nameM = nameM;
      }
      if (capcode = $('.capcode.hand', info)) {
        this.info.capcode = capcode.textContent.replace('## ', '');
      }
      if (date = $('.dateTime', info)) {
        this.info.date = date.dataset.utc;
      }
    }
    return Post;
  })();
  
  $.ready(NameSync.ready);
  
}
initNameSync();