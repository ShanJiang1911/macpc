
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
    let user2 = confirm('Do you want get a Mac, I have a coupon for you');

    if (user2 == true){
        document.write('<h4>That is smart!</h4>');
    } else {
        document.write('<h4>I am using Windows too!</h4>');
    }
  }

