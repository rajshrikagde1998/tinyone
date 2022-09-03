//alert('hiiii')

var cl=console.log
var stateName = document.getElementById("info")
var state=["maharashtra","Kerala","Telangana","Uttar Pradesh","bihar"]



var result =`<ul class="list-group">`
 state.forEach(function(s){
	
	result +=`<li class='list-group-item'> ${s}</li>`
	
})
result +=`</ul>`
stateName.innerHTML = result



var countryName = document.getElementById("info1")

var country =["india","China","Indonesia","Brazil","america"]


var result2 =`<ol class="list-group">`
country.forEach(function(c){
	
	result2 +=`<li class='list-group-item'> i love ${c}</li>`
	
})
result2 +=`</ol>`

countryName.innerHTML=result2
