// read => realise => write => reshape

// 1. Find variables

// 2. Make search loops

// 3. Make function

// lets get variable
const input = document.getElementById("search");
// lets add event listener keyup
input.addEventListener("keyup", searchText)

// lets make a loop function
function searchText() {
    const inputValue = input.value; // lets assign value from list
    const listItem = document.getElementsByTagName("li");

      for(i = 0; i < listItem.length; i++){ // lets make list search loop 
        // lets see if input includes typing text ion the list in lower case
          if (listItem[i].innerHTML.toLowerCase().includes(inputValue)) {
            listItem[i].style.display = ""; 
        } else {
            listItem[i].style.display = "none";
        }
    }
}