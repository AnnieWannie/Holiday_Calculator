/*
A quick and simple program that will let you know how many days away your favorite holidays are!
*/

//Class for holiday date construction takes the name and date it easily allows for additional holidays to be added.
class Holiday{
    constructor(name, day, month, year,){
        this.name = name;
        this.day = day;
        this.month = month;
        this.year = year;
    }
}

//Ties details of the current date to variables; the current date, month, and year.
var now = new Date();
var nowDay = now.getDate();
var nowMonth = now.getMonth() + 1;
var nowYear = now.getFullYear();

//Array collection of holiday objects. 
var holidayCollection = [
    new Holiday("Mourning the Queen", 19, 9, 2022),
    new Holiday("National Day for Truth and Reconciliation", 30, 9, 2022),
    new Holiday("Thanksgiving Day", 10, 10, 2022),
    new Holiday("Halloween", 30, 10, 2022),
    new Holiday("Rememberance Day", 11, 11, 2022),
    new Holiday("Christmas", 25, 12, 2022,),  
    new Holiday("Boxing Day", 26, 12, 2022),
    new Holiday("New Year", 1, 1, 2023),
    new Holiday("Good Friday", 15, 4, 2023),
    new Holiday("Easter Monday", 18, 4, 2023),
    new Holiday("Victoria Day", 23, 5, 2023),
    new Holiday("Canada Day", 1, 7, 2023),
    new Holiday("Civic Holiday", 1, 8, 2023),
    new Holiday("Labour Day", 5, 9, 2023)
];

console.log("Hello and welcome to the holiday calculator \n");

//For loop to iterate through the array collection and also contains some logic to process the difference in dates.
for (let i = 0; i < holidayCollection.length; i++){
    tempYear = holidayCollection[i].year
    tempDay = holidayCollection[i].day
    tempMonth = holidayCollection[i].month;
    //converts current and holiday dates into a uniform value using miliseconds to allow for calculating the difference between the two 
    holidayUniformDate = new Date(tempYear, tempMonth, tempDay).getTime() / 86400000; 
    nowUniformDate = new Date(nowYear, nowMonth, nowDay).getTime() / 86400000;
    datesDiff = (holidayUniformDate - nowUniformDate)
    //if logic for if the holiday has already passed for the current year it will calculate for the difference until next year.
    if(datesDiff < 0){
        tempYear = nowYear + 1;
        holidayUniformDate = new Date(tempYear, tempMonth, tempDay).getTime() / 86400000; 
        nowUniformDate = new Date(nowYear, nowMonth, nowDay).getTime() / 86400000;
        datesDiff = (holidayUniformDate - nowUniformDate)
    }

console.log(holidayCollection[i].name + ` is ${Math.round((datesDiff))} days away!`);
}