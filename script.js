setInterval(() => {
    var date= new Date();
    var hours= date.getHours();
    var minutes= date.getMinutes();
    var seconds= date.getSeconds();
    var cHours=30*hours + minutes/2;
    var cMinutes=6*minutes;
    var cSeconds=6*seconds;

    document.getElementById('hours').style.transform=`rotate(${cHours}deg)`;
    document.getElementById('minutes').style.transform=`rotate(${cMinutes}deg)`;
    document.getElementById('seconds').style.transform=`rotate(${cSeconds}deg)`;
}, 1000);