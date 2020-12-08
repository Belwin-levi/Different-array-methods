var request = new XMLHttpRequest();

// open a connection 
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)

//send the request
request.send();

//load the response once its ready. 
request.onload = function () {
    var data = JSON.parse(this.response);  
    console.log(data);

//1. - Get all the countries from Asia continent /region using Filter function 
var asiacount = data.filter(ele=>ele.region==='Asia')
console.log(asiacount);

//2.- Get all the countries with population of less than 2 lacs using Filter function
var exppopulation = data.filter(ele=>ele.population<200000)
console.log(exppopulation);

//3.Print the following details name, capital, flag using forEach function 
data.forEach(element => {
  console.log(element.name);
  console.log(element.capital);
  console.log(element.flag);
  
});

//4.Print the total population of countries using reduce function 

var sum=data.reduce(function(result,data,index){
  return result + data.population;},0)

console.log(sum);


//5.Print the country which use US Dollars as currency.United States dolla

data.forEach(ele =>
{
  var x=ele.currencies;
  var y=x.filter((element)=>{
  return element.name==='United States dollar';
    
  } );
  console.log(y);
});
}
    