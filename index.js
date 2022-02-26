const btn = document.querySelector(".btn");
const error = document.querySelector(".error");
const tip = documemt.querySelector(".tip");
const total = document.querySelector(".total");

// btn.addEventListener("click", calculateTip);

// // .toString()

// setTimeout(function, time(in ms))
const hideError = () => {
    setTimeout(() => {
        error.style.display = "none"
    }, 3000)
}

// function calculateTip() {
//     const bill = document.querySelector(".bill").value;
//     const rate = document.querySelector(".rate").value;

//     if (bill === "" || rate == "") {
//         error.style.display = "block"
//         hideError()
//     } else if (isNaN(bill) == "") { // it is a function that 
//         // checks if input is not a number ==> boolian 
//         error.innerHTML = "Please enter a bill number!"
//         error.style.display = "block"
//         hideError()
//     } else {
//     let tipAmount = Math.round(bill * rate);
//     tip.innnerHTML = `Tip amount: ${tipAmount}`;
//     let totalBill = Number(bill) + tipAmount;
//     total.innerHTML = `Total Amount: ${totalBill}`;
//     }
// }

const calculateTip = () => {
    const bill = document.querySelector(".bill").value;
    const rate = document.querySelector(".rate").value;

    if (bill === "" || rate == "") {
        error.style.display = "block"
        hideError()
    } else if (isNaN(bill) == "") { // it is a function that 
        // checks if input is not a number ==> boolian 
        error.innerHTML = "Please enter a bill number!"
        error.style.display = "block"
        hideError()
    } else {
    let tipAmount = Math.round(bill * rate);
    tip.innnerHTML = `Tip amount: ${tipAmount}`;
    let totalBill = Number(bill) + tipAmount;
    total.innerHTML = `Total Amount: ${totalBill}`;
    }
}

btn.addEventListener("click", calculateTip);

