var contextStyleSwitcher = {
  init: function() {
    var contextMenu = document.getElementById("contentAreaContextMenu");
    contextMenu.addEventListener("popupshowing", contextStyleSwitcher.toggleVisibility, false);
  },

  toggleVisibility: function() {
    if (gContextMenu.onTextInput || gContextMenu.onImage || gContextMenu.onLink || gContextMenu.isTextSelected) {
      document.getElementById("context-sep-context-style-switcher").hidden = true;
      document.getElementById("context-context-style-switcher").hidden     = true;
    } else {
      document.getElementById("context-sep-context-style-switcher").hidden = false;
      document.getElementById("context-context-style-switcher").hidden     = false;
    }
  }
};

window.addEventListener("load", contextStyleSwitcher.init, false);
