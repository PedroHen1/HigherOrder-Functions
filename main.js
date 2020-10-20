const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

/*for(let i = 0; i < companies.length; i++) {
    console.log(companies[i])
}


//---ForEach----

companies.forEach(function(company) {
    console.log(company)
})

//----with arrow function 

companies.forEach(company => //console.log(company))

//---Filter---

//Who can drink?---

const canDrink = ages.filter(function(age){
    if(age >= 21) {
        return true
    }
})

//-----with arrow function
const canDrink = ages.filter(age => age >= 21)
console.log(canDrink)

//filter ritail companies---

const retailCompanies = companies.filter(function(company) {
    if(company.category === 'Retail'){
        return true
    }
})
console.log(retailCompanies)
//-------with arrow function

const retailCompanies = companies.filter(company => company.category === 'Retail')
console.log(retailCompanies)

//get 80s companies--

const eightiesCompanies = companies.filter(function(company){
    if (company.start >= 1880 && company.start <1990){
        return company
    }
})
console.log(eightiesCompanies)

//-----with arrow function

const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990 )
console.log(eightiesCompanies)


//10 years or more Companies---

const tenYearsCompanies = companies.filter(function(company) {
    if (company.end - company.start >= 10) {
        return true
    }
})
console.log(tenYearsCompanies)

//----with arrow function

const tenYearsCompanies = companies.filter(company => company.end - company.start >= 10)
console.log(tenYearsCompanies)

//---MAP---

//Create array of company names---

const companyNames = companies.map(function(company){
    return company.name 
})
console.log(companyNames)

//----with arrow function

const companyName = companies.map(company => company.name)
console.log(companyName)

//Ages Raiz Quadrada--------------

const ageSquare = ages.map(function(age){
    return Math.sqrt(age) 
})
console.log(ageSquare)

//----with arrow function
const ageSquare = ages.map(ages => Math.sqrt(ages))
console.log(ageSquare)

//---Sort---

//Ordenar as empresas---

const sortedCompanies = companies.sort(function(a,b){
    if(a.start > b.start) {
        return 1
    }
    else return -1
})
console.log(sortedCompanies)

//---with arrow function 
const sortedCompanies = companies.sort((a,b) => a.start > b.start ? 1 : -1)
console.log(sortedCompanies)

//Ordenar as idades----

const sortedAges = ages.sort(function(a,b){
    return a - b
}) 
console.log(sortedAges)

//---with arrow function 

const sortedAges = ages.sort((a,b)=> a - b)
console.log(sortedAges)

//--Reduce--

const ageSum = ages.reduce((total, age) => total + age, 0)
console.log(ageSum)*/