let countries = new XMLHttpRequest
countries.open("GET","https://restcountries.com/v3.1/all",true)
countries.send()
countries.onload = ()=>{
    let data = JSON.parse(countries.response)
    // console.log(data)
    data.filter((element)=>{
if(element.population < 200000){
console.log(element.name.common)
console.log(element.population)
}    
    })
}