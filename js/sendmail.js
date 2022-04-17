var form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    var loading = document.getElementById("loading");
    var send = document.getElementById("sendSuccess");
    loading.style.display = "inline";
    send.style.display = "none";
    
    setTimeout(() => {  
        loading.style.display = "none";
        console.log("Thanks you");
        send.style.display = "block";
        // alert("Thank you for Getting in Touch!");
    }, 2000);
})
