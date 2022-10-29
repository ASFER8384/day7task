let countries = new XMLHttpRequest()
countries.open("GET","https://restcountries.com/v3.1/all",true)
countries.send()
countries.onload = ()=>{
    let data = JSON.parse(countries.response)

 data.forEach((element)=>{
    console.log(`The country name is : ${element.name.common}`)
    console.log(`The capital is : ${element.capital}`)
    console.log(`The flags is : ${element.flags.png}`)
 })
}