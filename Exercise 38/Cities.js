function describeCity(city, country) {
    if (country === void 0) { country = "Australia"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describeCity("Karachi", "Pakistan");
describeCity("Auckland", "New Zealand");
//Default Country:
describeCity("Melbourne");
