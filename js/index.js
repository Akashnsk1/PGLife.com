function isMajorCity(city) {
    const majorCities = ['Bengaluru', 'Hyderabad', 'Delhi', 'Mumbai','bengaluru','bangalore','mumbai','delhi','hyderabad'];
    return majorCities.includes(city.trim());
}

// Function to handle form submission
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const cityInput = document.getElementById('cityInput').value.trim();
    
    // Check if the entered city is one of the major cities
    if (isMajorCity(cityInput)) {
        // Redirect to property list page with the city as a query parameter
        window.location.href = `property_list.html?city=${encodeURIComponent(cityInput)}`;
    } else {
        // Display message for unsupported locations
        document.getElementById('unsupportedMessage').style.display = 'flex';
    }
});
document.getElementById('cityInput').addEventListener('click', function() {
    document.getElementById('unsupportedMessage').style.display = 'none';
});
