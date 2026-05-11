function ExecuteScript(strId)
{
  switch (strId)
  {
      case "60xj1sfwhOG":
        Script1();
        break;
      case "6RFipqTTkKX":
        Script2();
        break;
      case "6g2blESORbq":
        Script3();
        break;
  }
}

function Script1()
{
  (function() {
    if (window.jQuery) {
        console.log('jQuery is already loaded.');
        return;
    }

    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    script.type = 'text/javascript';

    // Error handling
    script.onerror = function() {
        console.error('Failed to load jQuery.');
    };

    // Success handling
    script.onload = function() {
        console.log('jQuery loaded successfully.');
    };

    head.appendChild(script);
})();

}

function Script2()
{
  var player = GetPlayer();

//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbw5a86IF9ibAB3LZv9u127YZgglcZCg7OEII5AUF21AOtjkBRgFPPNwu6iziFyIOkaZ4Q/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "Nama" : player.GetVar("NamaLogin")
}
}

function Script3()
{
  /DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
 
//EXPORT TO GOOGLE
$.ajax({
    url: WEB_APP_URL,
    type: "POST",
    data: storyline,
    success: function(data)
    {
        console.log(data);
    },
    error: function(err) {
        console.log('Error:', err);
    }
});
return false;

}, 1000);
}

