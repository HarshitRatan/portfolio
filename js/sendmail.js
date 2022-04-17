var form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    // var email = document.getElementById('user_email').value;
    // var name = document.getElementById('user_name').value;
    // var mess = document.getElementById('message').value;
    var loading = document.getElementById("loading");
    var send = document.getElementById("sendSuccess");
    // var error = document.getElementById("sendError");
    loading.style.display = "inline";
    send.style.display = "none";


    setTimeout(() => {  
        loading.style.display = "none";
        console.log("Thanks you");
        send.style.display = "block";
        // alert("Thank you for Getting in Touch!");
    }, 2000);

    // setTimeout(check(), 10000);

    // error.style.display = "none";

    // Email.send({
    //     SecureToken : "31bcdc2d-4d8b-4dbc-a004-5422b5b1da4d",
    //     // Host: "smtp.gmail.com",
    //     // Username: "ratanweb3@gmail.com",
    //     // Password: "Web@project123",
    //     To: 'ratanshukla10251025@gmail.com',
    //     From: email,
    //     Subject: "New PortFolio - Contact us Message 💌 From " + name + " ",
    //     Body:`Hello Mr. Harshit Ratan Shukla. My Name is 🔷`+ name + `🔷 and My Email address is 🔶`+ email  +`🔶. My Message are as Follows 👉👉👉`+ mess +`👈👈👈Thanks You.😊`
    // }).then(
    //     message => setTimeout(check(message), 10000)
    // );

    // function check() {
        // if (m == "OK") {
            

        // }
        // else {
        //     loading.style.display = "none";
        //     console.log("Error Occurred");
        //     error.style.display = "block";

        // }
    // }
})





// var form = document.getElementById("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     var email = document.getElementById('user_email').value;
//     var name = document.getElementById('user_name').value;
//     var mess = document.getElementById('message').value;
//     var loading = document.getElementById("loading");
//     var send = document.getElementById("sendSuccess");
//     var error = document.getElementById("sendError");
//     loading.style.display = "inline";

//     Email.send({
//         Host: "smtp.gmail.com",
//         Username: "ratanweb3@gmail.com",
//         Password: "Web@project123",
//         To: 'ratanshukla10251025@gmail.com',
//         From: email,
//         Subject: "New PortFolio - Contact us Message 💌 From " + name + " ",
//         Body:`Hello Mr. Harshit Ratan Shukla. My Name is 🔷`+ name + `🔷 and My Email address is 🔶`+ email  +`🔶. My Message are as Follows 👉👉👉`+ mess +`👈👈👈Thanks You.😊`
//     }).then(
//         message => setTimeout(check(message), 5000)
//     );

//     function check(m) {
//         if (m == "OK") {
//             loading.style.display = "none";
//             console.log("Thanks you");
//             send.style.display = "block";

//         }
//         else {
//             loading.style.display = "none";
//             console.log("Error Occurred");
//             error.style.display = "block";

//         }
//     }
// })