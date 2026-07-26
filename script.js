// Prakash M.9 Website Script

document.addEventListener("DOMContentLoaded", function () {

    console.log("Prakash M.9 Website Loaded");

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(function(button){

        button.addEventListener("mouseover",function(){

            this.style.opacity="0.9";

        });

        button.addEventListener("mouseout",function(){

            this.style.opacity="1";

        });

    });

    const year = new Date().getFullYear();

    const footer = document.querySelector("footer");

    if(footer){

        footer.innerHTML += "<p style='margin-top:10px;'>Website Updated " + year + "</p>";

    }

    alert("🙏 Welcome to Prakash M.9");

});
