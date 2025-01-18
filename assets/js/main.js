// Ensure all anchors within the #post-content element open in a new tab
function postContentAnchorTarget() {
  const postContent = document.getElementById("post-content");
  const anchors = postContent.querySelectorAll("a");

  anchors.forEach(function (anchor) {
    if (!anchor.href.startsWith(window.location.origin)) {
      anchor.setAttribute("target", "_blank");
    }
  });
}

// On document load
document.addEventListener("DOMContentLoaded", function () {
  postContentAnchorTarget();
});
