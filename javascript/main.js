(function(){ // protect the lemmings

	 console.log('main.js connected');

	$('.kvb-slider').skippr({
		transition: 'fade',
        speed: 1000,
        easing: 'easeOutQuart',
        navType: 'block',
        childrenElementType: 'div',
        arrows: true,
        autoPlay: false,
        autoPlayDuration: 5000,
        keyboardOnAlways: true,
        hidePrevious: false
    });

    $.ajax({
	  url:"https://www.kimonolabs.com/api/eit7pabq?apikey=JxbO4IUAILoQHMRgL5m9LuB3XUV9egv5",
	  crossDomain: true,
	  dataType: "jsonp",
	//   success: function (response) {
	//     //Do something with the response
	//     console.log( response );
	//   },
	//   error: function (xhr, status) {
	//     //handle errors
	//   }
	// });

'success': function(response){ 
    // If the call request was successful and the data was retrieved, this function will create a table displaying the data:
        
    // $(".Monday").html(response.name); 
    //Puts the API name into the panel heading
      
    var collection = response.results.collection1;
    for (var i = 0; i < collection.length; i++){   
    // Traverses through every element in the entire collection 
        
        $(".container-padding").append('<tr>' + '<th class="well">' + collection[i].property1.text + '</th>' + '<th class="well">' + collection[i].property1.href + '</th>' + '</tr>');
        // adds the text and the links from the first property into the table "table-group1" and formatting them into             gray a "well"
            
  }},
      error: function(err){
          alert('error!' + err);
      } 
     // If the call request was unsuccessful and the data wasn't retrieved, this function displays an error message
});



})(); // IIFE