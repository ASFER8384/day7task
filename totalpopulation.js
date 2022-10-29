let countries = new XMLHttpRequest()
countries.open("GET","https://restcountries.com/v3.1/all",true)
countries.send()
countries.onload = ()=>{
    let data = JSON.parse(countries.response)
    let b = data.reduce(function(acc,cv){
        return acc + cv.population
    },0)
console.log(b)
}