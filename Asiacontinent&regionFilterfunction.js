let countries = new XMLHttpRequest()
countries.open("GET","https://restcountries.com/v3.1/all",true)
countries.send()
countries.onload = ()=>{
    let data = JSON.parse(countries.response)
   
    data.filter((element)=>{
        // console.log(element)
    if(element.continents == "Asia"){
        console.log(element.name.common)
        console.log(element.continents)
    }
    })
}