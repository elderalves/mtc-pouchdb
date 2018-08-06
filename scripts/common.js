let common = (function(){
  const MSG_AREA = "#messageArea";
  const MSG_TEXT = "#message";
  const JSON_AREA = "#jsonArea";
  const JSON_TEXT = "#json";

  function displayMessage(msg) {
    $(MSG_AREA).removeClass("d-none");
    $(MSG_TEXT).text(msg);
    console.log(msg);
  }

  function displayJSON(data) {
    $(JSON_AREA).removeClass("d-none");
    $(JSON_TEXT).text(JSON.stringify(data, undefined, 2));
  }

  function hideMessageAreas() {
    $(MSG_AREA).addClass("d-none");
    $(MSG_TEXT).text("");
    $(JSON_AREA).addClass("d-none");
    $(JSON_TEXT).text("");
  }

  return {
    displayMessage: displayMessage,
    displayJSON: displayJSON,
    hideMessageAreas: hideMessageAreas
  }


})();