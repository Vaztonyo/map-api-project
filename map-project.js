



    $(document).ready(function(){
        var searchBox = document.querySelector(".searchBox").value;
        var searchResult = [];
    //search from searchbox needs run through before the ajax call is made

        $.ajax({
type: "GET",
url: "https://developer.nrel.gov/api/windexchange/schoolprojects?api_key=BpwET3I8qcPGHgBcgcECMNuYXfDVEz3zwKN00w1f",
dataType: "json",
success: function(results){
    console.log(results)
    for (var i=0; i<results.length; i++){
        searchResult.push(results[i].City.trim(), results[i].Latitude, results[i].Longitude);  
          
    }
    
}    
}); //end of ajax call for data from education and training api

console.log(searchResult);

var searchBtn = document.querySelector(".searchBtn");

searchBtn.addEventListener("click", function searchPlace (){
    for (var i=0; i<searchResult[0].length; i++){
        if (searchBox === searchResult[i].trim()){
            console.log(searchResult[i])
        }
    }
})


function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }
    myMap();
        });

