$(function(){
	$("form").submit(function(e){
		e.preventDefault();
		var city=$("#city-type").val();

		var nyc = {"name":"NYC"}, {"name":"New York"}, {"name":"New York City"};
		var la ={"name":"Los Angeles"}, {"name":"LA"}, {"name":"LAX"};
		var sf = {"name":"SF"}, {"name":"San Francisco"}, {"name":"Bay Area"};
		var sydney = {"name": "Sydney"}, {"name":"SYD"};
		var austin = {"name":"Austin"}, {"name":"ATX"};
		
	if(nyc)
		document.body.style.backgroundImage= "url("nyc.jpg")";

})
