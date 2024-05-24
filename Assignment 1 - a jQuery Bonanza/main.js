$(document).ready(() => {
  function toggleFade() {
    $("#toggle-text").fadeToggle("slow");
  }

  function appendText() {
    let textToAppend = $(".text").val();
    $(".appendHere").append(textToAppend);
  }

  function changeBackgroundColor() {
    let bgColor = $("input[name='color']:checked").val();
    $(".changing").css("background-color", bgColor);
  }

  function toggleHideButton() {
    $(".hide").toggle();
    let buttonText = $(this).html();
    $(this).html(buttonText === "Hide" ? "Show" : "Hide");
  }

  // Event listeners
  $(".toggle-fade").click(toggleFade);
  $(".appendBtn").click(appendText);
  $(".add-bg").click(changeBackgroundColor);
  $(".hideButton").click(toggleHideButton);
});