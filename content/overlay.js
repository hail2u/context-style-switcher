var contextStyleSwitcher = {
  init: function() {
    var contextMenu = document.getElementById("contentAreaContextMenu");
    contextMenu.addEventListener("popupshowing", contextStyleSwitcher.toggleVisibility, false);
  },

  toggleVisibility: function() {
    if (gContextMenu.onTextInput || gContextMenu.onImage || gContextMenu.onLink || gContextMenu.isTextSelected) {
      document.getElementById("context-style-switcher_sep").hidden  = true;
      document.getElementById("context-style-switcher_menu").hidden = true;
    } else {
      document.getElementById("context-style-switcher_sep").hidden  = false;
      document.getElementById("context-style-switcher_menu").hidden = false;
    }
  }
};

window.addEventListener("load", contextStyleSwitcher.init, false);
