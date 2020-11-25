let counter = 1;
const $ = require('jquery');
const ajax = require('najax');

console.log("Client is running");
function makeId() {
    let text = "";
    let possible = "abcdefghijklmnopqrstuvwxyz0123456789";
  
    for (let i = 0; i < 8; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }


setInterval( function(){
    console.log("Client Sending Request");
    ajax({
        url: "http://127.0.0.1:3000/",
        type: "POST",
        headers : {'X-RANDOM' : makeId()},
        contentType: "application/json",
        data: JSON.stringify({
            "counter":counter
        }),
        success: function(res){
            console.log("Request Finished")
            console.log(res)
            counter++;
        }
    }).fail (function(jqXHR, textStatus, errorThrown){
        console.log("Failed to send Request");
        console.log(errorThrown);
    })
},60*1000);