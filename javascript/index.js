function updateTime() {
  //London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");
  londonDateElement.innerHTML = londonTime.format("dddd Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Casablanca
  let casablancaElement = document.querySelector("#casablanca");
  let casablancaDateElement = casablancaElement.querySelector(".date");
  let casablancaTimeElement = casablancaElement.querySelector(".time");
  let casablancaTime = moment().tz("Africa/Casablanca");
  casablancaDateElement.innerHTML = casablancaTime.format("dddd Do YYYY");
  casablancaTimeElement.innerHTML = casablancaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Los Angeles
  let losangelesElement = document.querySelector("#los-angeles");
  let losangelesDateElement = losangelesElement.querySelector(".date");
  let losangelesTimeElement = losangelesElement.querySelector(".time");
  let losangelesTime = moment().tz("America/Los_Angeles");
  losangelesDateElement.innerHTML = losangelesTime.format("dddd Do YYYY");
  losangelesTimeElement.innerHTML = losangelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
