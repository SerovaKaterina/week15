const citiesData = document.querySelector('.data');
const cities = ["Москва", "Мурманск", "Краснодар", "Иркутск", "Хабаровск"];
const temp = [];

for (let i = 0; i < cities.length; i++) {
    const temperatura = prompt(`Введите температуру для ${cities[i]}`);
    temp.push(temperatura);
    const city = document.createElement('li');
    city.textContent = `Температура в городе ${cities[i]}: ${temperatura} °С`;
    citiesData.append(city);
};


