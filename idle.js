var last_activity_time = new Date().getTime();
var idle_time_limit = 300000; // 5 minutes

 setInterval(function() {
    var current_time = new Date().getTime();
    var idle_time = current_time - last_activity_time; 
    
    if (idle_time > idle_time_limit) {    //  If idle detected  \\
        alert("You Kicked out from this website");
        document.location.href = "MoveToOtherPage.html";
    }
}, 100000); // every 1 minute

document.onmousemove = function() {
    last_activity_time = new Date().getTime();
};