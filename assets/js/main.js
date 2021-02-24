// TASK 1
// Create a function that will ALERT if browser is online or not.

function isBrowserrOnline() {
    setInterval(function () {
        var online = navigator.onLine;
        online ? alert('Browser is online') : alert('Browser is not online')
    }, 5000);
}

// TASK 2
// Create a function that should, when run, reload the page.

function reloadPage(condition) {
    condition ? location.reload() : null;
}

// TASK 3
// Create a function that should, 3 seconds after page is loaded, redirect you to google.com, ad then, 
// 3 seconds after that take you back to your page.
// (Comment out your code once you're done so you can continue with the other tasks, as this will cause infinite loop).

function goToPage(whereToRedirect) {
    setInterval(function () {
        window.location.replace(whereToRedirect);
    }, 3000);
}

// TASK 4
// Crete a function that should every second console log a number incremented by one.
// When number reach 15 it should stop running.

var start = 0;
var end = 15;

function incrementedByOneWithLimit(startNumber, endNumber) {
    setInterval(function () {
        if (startNumber < endNumber) {
            startNumber = startNumber + 1;
            console.log(startNumber);
        }
    }, 3000);
}

incrementedByOneWithLimit(start, end);

// TASK 5
// Create a function that should return a random number 
// (round number) between 0 and 10, every time you run it.

function getRandomNumber(start, end) {
    return Math.floor(Math.random() * end) + start;
}


// TASK 6
// 	STEP 1
// 	    Create an array of objects, containing at least 5 users. Each of them should have name, age and status. 
//      Status should be 'inactive' for each of them.

// 	STEP 2
// 	    Once page is loaded it should display a popup where user can enter his name. Once it's done name user 
//      entered should be compared against existing users.
// 	    If it doesn't match any user you should console log message: 
// 	        'User with name ' + name + ' doesn't exist.'
// 	    If it match some of users, object with that user's data should be copied from array. 
//      It's status should be changed to 'active', and it should be saved in local storage using 'loggedInUser' as a key.

// 	STEP 3
// 	    After one minute user's data should be removed from local storage.
// 	    You should console log a message that user is logged out.

function User(name, age, status) {
    this.name = name;
    this.age = age;
    this.status = status;
}

function createRandomName() {
    var anysize = getRandomNumber(5, 15);
    var charset = 'abcdefghijklmnopqrstuvwxyz';
    result = '';
    for (var i = 0; i < anysize; i++) {
        result += charset[Math.floor(Math.random() * charset.length)];
    }
    return result;
}

function createUsers(numberOFUsers) {
    var users = [];
    for (var j = 0; j < numberOFUsers; j++) {
        users.push(new User(createRandomName(), getRandomNumber(1, 99), false));
    }
    return users;
}

function loginUser(users) {
    var yourName = prompt('Please enter your name', '');
    var createLocalStorageValue = function (userName) {
        if (typeof (Storage) !== 'undefined') {
            localStorage.setItem('loggedInUser', userName);
            setTimeout(function () {
                localStorage.removeItem('loggedInUser');
                console.log('You are now loggedOut');
            }, 60000);
        } else {
            console.log('Sorry, your browser does not support Web Storage...');
        }
    };

    if (yourName != null) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].name === yourName) {
                users[i].name = yourName;
                users[i].status = true;
                createLocalStorageValue(users[i].name);
                break;
            } else {
                console.log('User with name ' + yourName + ' dont exist.');
                break;
            }
        }
    } else {
        console.log('Please enter your name');
    }
    return users;
}

var users = createUsers(5);
loginUser(users);

