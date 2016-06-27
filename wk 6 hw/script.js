var choices = [
  "Austin",
  "Los Angeles",
  "New York City",
  "San Francisco",
  "Sydney"
];
$(function(){
  $("form").select(function(){

    var choices = ("city-type");

    if ((city-type === "New York City")){
			$("body").css("backgroundImage", "url('images/nyc.jpg')");

		} else if ((city-type === "Los Angeles")){
			$("body").css("backgroundImage", "url('images/la.jpg')");

		} else if ((city-type === "SanFrancisco")){
			$("body").css("backgroundImage", "url('images/sf.jpg')");

		} else if (city-type === "Austin"){
			$("body").css("backgroundImage", "url('images/austin.jpg')");

		} else if ((city-type === "Sydney")){
			$("body").css("backgroundImage", "url('images/sidney.jpg')");
  	}
  })
})
