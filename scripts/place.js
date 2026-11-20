// Footer: current year and last modified date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Static weather values (metric: °C and km/h)
const temperature = 9;
const windSpeed = 12;

// Wind chill (metric formula)
const calculateWindChill = (temp, speed) =>
  13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);

let windChill = "N/A";
if (temperature <= 10 && windSpeed > 4.8) {
  windChill = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
}
document.getElementById("windchill").textContent = windChill;
