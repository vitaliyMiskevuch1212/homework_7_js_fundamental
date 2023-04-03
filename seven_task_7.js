(function (){
    const countrySelect = document.getElementById("country");
    const citiesSelect = document.getElementById("cities");
    const confirmBtn = document.getElementById("confirm-btn");
    const result = document.getElementById("result");

    const cities = {
        ger: ["Berlin", "Munich", "Frankfurt"],
        usa: ["New York", "Los Angeles", "Chicago"],
        ukr: ["Kyiv", "Lviv", "Kharkiv"]
    };

    function populateCities() {
        const selectedCountry = countrySelect.value;
        citiesSelect.innerHTML = "";
        if (selectedCountry !== "") {
            cities[selectedCountry].forEach(city => {
                const option = document.createElement("option");
                option.value = city;
                option.text = city;
                citiesSelect.appendChild(option);
            });
        }
    }

    function displayResult() {
        const selectedCountry = countrySelect.options[countrySelect.selectedIndex].text;
        const selectedCity = citiesSelect.options[citiesSelect.selectedIndex].text;
        result.textContent = `Обрано країну ${selectedCountry} та місто ${selectedCity}`;
    }

    countrySelect.addEventListener("change", populateCities);
    confirmBtn.addEventListener("click", displayResult);
})();