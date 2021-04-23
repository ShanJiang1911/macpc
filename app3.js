function greetingTime(){
    let today = new Date();
    let hourNow = today.getHours();
    let greeting;

    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon!';
    } else if (HourNow >= 1) {
        greeting = 'Good morning!';
    } else {
        greeting = 'Hello!';
    }
    document.write('<h5>' + greeting + '</h5>');
}




function buyMac(){
    let user2 = confirm('Do you want get the newest version of iMac? Yes or No');

    if (user2 == true){
        document.write('<h4>Me Too!</h4>');
    } else {
        document.write('<h4>I am using Windows too!</h4>');
    }
  }


  <img src="https://cdn.pixabay.com/photo/2015/03/26/10/36/apple-691633_1280.jpg" width="700" height="400" alt="pic"></img>