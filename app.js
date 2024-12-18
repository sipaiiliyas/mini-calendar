const monthName = document.getElementById("month-name");
const dayName = document.getElementById("day-name");
const dayNumber = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();
const month = date.getMonth()
monthName.innerText = date.toLocaleDateString("en",{
    month:"long"
})
dayName.innerText = date.toLocaleDateString("en",{
    weekday:"long"
})
dayNumber.innerText = date.getDate();

yearEl.innerText = date.getFullYear()
