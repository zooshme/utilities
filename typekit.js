var typekit = function(kidId) {
  var config = {
    kitId: kidId
  };
  var d = false;
  var tk = document.createElement('script');
  tk.src = '//use.typekit.net/' + config.kitId + '.js';
  tk.type = 'text/javascript';
  tk.async = 'true';
  tk.onload = tk.onreadystatechange = function() {
    var rs = this.readyState;
    if (d || rs && rs != 'complete' && rs != 'loaded') return;
    d = true;
    try { Typekit.load(config); } catch (e) {}
  };
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(tk, s);
};

return typekit;