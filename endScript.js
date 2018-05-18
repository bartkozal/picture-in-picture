(function() {
  safari.self.addEventListener(
    "message",
    function(event) {
      if (event.name === "setPresentationMode") {
        document
          .querySelector("video")
          .webkitSetPresentationMode("picture-in-picture");
      }
    },
    false
  );
})();
