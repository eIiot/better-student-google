// ==UserScript==
// @name        Search With BHS.sh
// @include     *
// @version     0.1
// @grant       GM_openInTab
// @run-at      context-menu
// @author      Eliot Hertenstein
// ==/UserScript==

(function() {
  'use strict';

  var selectedText = window.getSelection().toString();

  var url = 'https://search.bhs.sh?search=' + selectedText

  GM_openInTab(url, false);
})();