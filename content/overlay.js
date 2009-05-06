var contextStyleSwitcher = {
  init: function () {
    var contextMenu = document.getElementById("contentAreaContextMenu");
    contextMenu.addEventListener("popupshowing", contextStyleSwitcher.toggleVisibility, false);
  },

  toggleVisibility: function () {
    var sep     = document.getElementById("context-sep-context-style-switcher");
    var command = document.getElementById("context-context-style-switcher");

    if (gContextMenu.onTextInput || gContextMenu.onImage || gContextMenu.onLink || gContextMenu.isTextSelected) {
      sep.hidden     = true;
      command.hidden = true;
    } else {
      sep.hidden     = false;
      command.hidden = false;
    }
  }
};

window.addEventListener("load", contextStyleSwitcher.init, false);
