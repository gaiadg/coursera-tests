// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (toby) {
              var message = 
                toby.firstName + " " + toby.lastName
              if (toby.likesChineseFood) {
                message += " likes Chinese food";
              }
              else {
                message += " doesn't like Chinese food";
              }
              message += " and uses ";
              message += toby.numberOfDisplays + 1;
              message += " displays for coding.";

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });
      });
  }
);





