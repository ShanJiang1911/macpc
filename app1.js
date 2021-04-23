
  function greetingTime(){
    let today = new Date();
    let hourNow = today.getHours();
    let greeting;

    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon!';
    } else if (HourNow >= 0) {
        greeting = 'Good morning!';
    } else {
        greeting = 'Hello!';
    }
    document.write('<h5>' + greeting + '</h5>');
    
}



function getUserName(){
    let userName = prompt('Please Enter Your Name');
    document.write('<h3>' + userName + '</h3>');
    return userName;
}



function customerGreeting(user1){
    if (user1 == 'Shan'){
        document.write('<h4>Welcome to Mac World!</h4>');
    } else {
        document.write('<h4>Which One Do You Pick Up?</h4>');
    }
}


function buyMac(){
    let user2 = prompt('Do you want get the newest version of iMac? Yes or No');

    while (user2.toLowerCase() !='yes' && user2.toLowerCase() != 'no'){
        user2 = prompt('Yes or No only. Please try again. Do you want to get a new iMac');
    }
  }


function addPictures(){
    numberOfPictures = prompt('How many new iMacs do you want to see');
    url = "https://i2-prod.mirror.co.uk/incoming/article23949911.ece/ALTERNATES/s615b/0_Apple-launch.jpg";
    for(let i = 0; i < numberOfPictures; i ++){
        document.write('<img src="' + url + '">');
    }
}