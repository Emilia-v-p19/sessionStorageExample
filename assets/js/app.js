// Record this?

// First - store a value using sessionStorage.setItem("key", "value")
/*sessionStorage.setItem("favColor", "pink");*/

// Now get it and display it somewhere
/*const currentUserEl = document.querySelector(".currentUser");
currentUserEl.textContent =sessionStorage.getItem("favColor")*/

// Delete the sessionStorage and the code above and do the main task:

// Get the form

const formEl = document.querySelector("form");

const currentUserEl = document.querySelector(".currentUser");
currentUserEl.textContent = sessionStorage.getItem("username");
// Listen for submit event, prevent default, store the first+last name in sessionStorage

formEl.addEventListener("submit",function(e){
    //stopper fra at resete e er den tidliger event
    e.preventDefault();
    const userFirstName = formEl.formFirstName.value
    //console.log('userFirstName:', userFirstName)
    const userLastName = formEl.formLastName.value
    //console.log('userLastNam:', userLastName)

    sessionStorage.setItem("username", userFirstName + userLastName);
})


// Get the .currentUser and store the value of the sessionStorage in there

// Now try getting the sessionStorage from anotherfile.html

// If you have time: try to write the pseudocode for handling the light/darkmode colorswitch. Tip: I've setup the css so that all you have to do to go to darkmode is change the css-variables lines 2-3, have a look
