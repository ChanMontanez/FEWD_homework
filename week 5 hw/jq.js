$(function(){
		$("form").submit(function(e){
			e.preventDefault();

			var city=$("#city-type").val().toLowerCase();


		if ((city === "nyc") || (city === "new york") || (city === "new york city")){
			$("body").css("backgroundImage", "url('images/nyc.jpg')");
		} else if ((city === "la")|| (city === "lax")|| (city === "los angeles")){
			$("body").css("backgroundImage", "url('images/la.jpg')");
		} else if ((city === "sf")||(city === "san francisco")||(city === "bay area")){
			$("body").css("backgroundImage", "url('images/sf.jpg')");
		} else if (city === "austin"){
			$("body").css("backgroundImage", "url('images/austin.jpg')");
		} else if ((city === "sydney")||(city === "syd")){
			$("body").css("backgroundImage", "url('images/sidney.jpg')");
		}
	})
});
