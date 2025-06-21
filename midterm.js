const cars = [
    {
        make: "Ford",
        model: "Mustang",
        year: 2024
    },
    {
        make: "Toyota",
        model: "Camry",
        year: 2023
    },
    {
        make: "Honda",
        model: "Civic",
        year: 2022
    },
    {
        make: "Chevrolet",
        model: "Silverado",
        year: 2021
    },
    {
        make: "Tesla",
        model: "Model 3",
        year: 2020
    },
    {
        make: "Nissan",
        model: "Altima",
        year: 2019
    },
    {
        make: "Hyundai",
        model: "Sonata",
        year: 2018
    }
];

const act = () => {
    let action = document.querySelector("#choice").value;
    let carInQuestion;
    switch (action) {
        case "C":
            createACar();
            break;
        case "R":
            readACar();
            break;
        case "U":
            carInQuestion = findACar();
            if (!carInQuestion) {
                break;
            }
            alert(carInQuestion);
            console.log(carInQuestion);
            updateACar(carInQuestion);
            break;
        case "D":
            carInQuestion = findACar();
            if (!carInQuestion) {
                break;
            }
            deleteACar(carInQuestion);
            break;
    }
}

const createACar = () => {
    setCarInfo(null);
    let make = prompt("Car Make?");
    let model = prompt("Car Model?");
    let year = prompt("Car Year?");
    cars.push({
        make: make,
        model: model,
        year: parseInt(year)
    });
    listCars();
    console.log(cars);
}

const readACar = () => {
    setCarInfo(null);
    let car = findACar();
    
    if (!car) {
        return;
    }

    let crud = document.querySelector(".CRUD");
    crud.innerHTML = `Car Make: ${car.make}, Car Model: ${car.model}, Year: ${car.year}`;
    console.log(car);
}

const updateACar = (carInQuestion) => {
    setCarInfo(null);
    let newMake = prompt("Car Make?");
    let newModel = prompt("Car Model?");
    let newYear = prompt("Car Year?");

    carInQuestion.make = newMake;
    carInQuestion.model = newModel;
    carInQuestion.year = newYear;

    console.log(carInQuestion);
    listCars();
}

const deleteACar = (carInQuestion) => {
    setCarInfo(null);

    let index = -1;
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].model === carInQuestion.model) {
            index = i;
            break;
        }
    }
    console.log(`Delete index = ${index}`);

    if (index !== -1) {
        cars.splice(index, 1);
    }

    console.log(carInQuestion);
    listCars();
}

const findACar = () => {
    let model = prompt("Which Model?");
    let car = cars.find(item => item.model === model);

    if (!car) {
        alert("Car not in list.");
        return false;
    }

    return car;
}

const setCarInfo = () => {
    let crud = document.querySelector(".CRUD");
    crud.innerHTML = "";
}

const listCars = () => {
    let displayOfCars = document.querySelector(".list-all");

    displayOfCars.innerHTML = "";

    const orderedList = document.createElement("ul");
    cars.forEach((car) => {
        const list = document.createElement("li");
        list.innerHTML += car.model;
        orderedList.append(list);
    });
    displayOfCars.append(orderedList);
}


listCars();




