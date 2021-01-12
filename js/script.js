'use strict'

const weather = document.querySelector("#weather");



fetch(
    "fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=houston&appid={your-api-key}&units=imperial"
      )
        .then(response => response.json())
        .then(body => {
          document.getElementById("weather").innerHTML = body.main.temp + "°";
        })
        .catch(error => alert("Please add your api key to the fetch url"));
    </script>"
  )
    .then(response => response.json())
    .then(body => {
      document.getElementById("weather").innerHTML = body.main.temp + "°";
    })
    .catch(error => alert("Please add your api key to the fetch url"));
</script>