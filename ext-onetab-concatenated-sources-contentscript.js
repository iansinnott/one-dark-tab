W6S = false;
k6S = true;
document.addEventListener(
  'mousedown',
  function(P8) {
    if (P8.button == 2) {
      var N8 = P8.target;
      while (N8) {
        if (N8 instanceof HTMLAnchorElement) {
          var w8 = N8;
          var g8 = N8['href'];
          var c8 = N8.innerText;
          if (!c8) c8 = '';
          if (c8.length > 0) {
            if (c8.charAt(0) == ' ') c8 = c8.substr(1);
          }
          if (c8 == '') c8 = g8;
          var S8 = c8;
          window['chrome']['runtime']['sendMessage'](
            undefined,
            { type: 'linkRightClick', url: g8, title: S8 },
            undefined,
            function(E6) {},
          );
          break;
        } else {
          N8 = N8.parentNode;
        }
      }
    }
  },
  true,
);
