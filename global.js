(function() {
  safari.application.addEventListener(
    "command",
    function(event) {
      if (event.command === "pipButton") {
        event.target.browserWindow.activeTab.page.dispatchMessage(
          "setPresentationMode"
        );
      }
    },
    false
  );
})();
