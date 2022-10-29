let countries = new XMLHttpRequest()
countries.open("GET","https://restcountries.com/v3.1/all",true)
countries.send()
countries.onload = ()=>{
    let data = JSON.parse(countries.response)
    data.forEach((element)=>{
        // console.log(element)

        for (var key in element.currencies){
            if(key == "USD"){
            console.log("==>"+element.name.common)
            console.log(element.currencies[key].name)
        }
    
    }
        
    })
}