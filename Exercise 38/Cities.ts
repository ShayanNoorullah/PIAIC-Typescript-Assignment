function describeCity(city: string, country: string = "Australia") {
    console.log(`${city} is in ${country}.`);
}
describeCity("Karachi", "Pakistan");
describeCity("Auckland", "New Zealand");
//Default Country:
describeCity("Melbourne");
