const clock = document.querySelector(".current-time");
const apiResult = document.querySelector(".api-container")

setInterval(showTime, 60000);
function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  am_pm = "AM";

  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
  }
  if (hour == 0) {
    hour = 12;
    am_pm = "AM";
  }

  hour = hour < 10 ? `${hour}` : hour;
  min = min < 10 ? `0${min}` : min;

  let currentTime = `${hour}:${min} ${am_pm}`;

  clock.innerText = currentTime;
}
showTime();

// Source random quotes from https://github.com/lukePeavey/quotable REST API
const getData = async function () {
  const res = await fetch(
    "https://api.quotable.io/random"
  );
  const data = await res.json();
  displayApiResponse(data);
};

const displayApiResponse = function (data) {
  apiResult.innerText = `${data.content} — ${data.author}`;
};

getData();
// Displays new quote once/day
setInterval(getData, 86400000);
// Displays new quote once/hour
// setInterval(getData, 3600000);
// Displays new quote once/minute
// setInterval(getData, 60000);



