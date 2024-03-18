// 39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value
// that’s returned.

function city_Country(city: string, country: string) {
  return `"${city}, ${country}"`;
}

console.log(city_Country("Karachi", "Pakistan"));
console.log(city_Country("Nerobi", "Kenya"));
console.log(city_Country("Dubai", "UAE"));
console.log(city_Country("Manchester", "England"));

let my_CityCountry = city_Country("Kabul", "Afghanistan");
console.log(my_CityCountry);
