function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Get the city name from the URL query parameters
const cityName = getParameterByName('city');

// Update the breadcrumb with the city name
document.getElementById('cityBreadcrumb').innerText = cityName;

const cityname2 = document.getElementById('cityBreadcrumb');

document.getElementById('View').addEventListener('click', function () {
    window.location.href = `property_detail.html?city=${encodeURIComponent(cityname2)}`;
});