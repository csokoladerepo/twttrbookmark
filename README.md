twttrbookmark
=============
an simple twitter bookmarklet via @twitter.

usage:

drag this bookmarklet to your bookmarks bar

<a href="javascript:void((function(){window.twttrbookmark=window.twttrbookmark||{};var D=550,A=300,C=screen.height,B=screen.width,H=Math.round((B/2)-(D/2)),G=0,F=document,E;if(C&gt;A){G=Math.round((C/2)-(A/2))}window.twttrbookmark.shareUrl=window.open('https://twitter.com/share?data-via=twttrbookmark','','left='+H+',top='+G+',width='+D+',height='+A+',personalbar=0,toolbar=0,scrollbars=1,resizable=1');E=F.createElement('script');E.src='https://raw.github.com/csokoladerepo/twttrbookmark/master/twttrbookmark.js?v=1';F.getElementsByTagName('head')[0].appendChild(E)}()));">Tweet!</a>

