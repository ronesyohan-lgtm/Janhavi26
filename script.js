function showPlants(){

let season=document.getElementById("season").value
let result=document.getElementById("result")

if(season=="summer"){
result.innerHTML="Tomato, Cucumber, Okra"
}

else if(season=="winter"){
result.innerHTML="Carrot, Spinach, Peas"
}

else if(season=="rainy"){
result.innerHTML="Beans, Pumpkin, Chili"
}

else{
result.innerHTML="Please select a season"
}

}