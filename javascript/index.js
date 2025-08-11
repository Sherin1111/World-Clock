function updateTime() {
  //London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");
    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  //Casablanca
  let casablancaElement = document.querySelector("#casablanca");
  if (casablancaElement) {
    let casablancaDateElement = casablancaElement.querySelector(".date");
    let casablancaTimeElement = casablancaElement.querySelector(".time");
    let casablancaTime = moment().tz("Africa/Casablanca");
    casablancaDateElement.innerHTML = casablancaTime.format("MMMM Do YYYY");
    casablancaTimeElement.innerHTML = casablancaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  //Los Angeles
  let losangelesElement = document.querySelector("#los-angeles");
  if (losangelesElement) {
    let losangelesDateElement = losangelesElement.querySelector(".date");
    let losangelesTimeElement = losangelesElement.querySelector(".time");
    let losangelesTime = moment().tz("America/Los_Angeles");
    losangelesDateElement.innerHTML = losangelesTime.format("MMMM Do YYYY");
    losangelesTimeElement.innerHTML = losangelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
   <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
