window.addEventListener("load", function(){
	$.getJSON( "manifest.json", function(obj) {
		rowCounter = 0;
		colCounter = 0;
		$("#here").append(`<div id="row${rowCounter}" class="row"></div>`);
		$.each(obj, function(key, value) {
			sandwichName = value.name;
			date = value.date;
			img = value.img;
			ratings = value.ratings;
			ratingsText = ""
			$.each(ratings, function(k, v) {
				notes = "";
				if(v.notes != "N/A")
					notes = '(' + v.notes + ')';
				ratingsText += `<b>${k}: ${v.score}/10 </b>(${v.bread}) ${notes}<br>`
			});
			
			$(`#row${rowCounter}`).append(`
			<div class="col-lg-4">
				<div class="mx-auto testimonial-item mb-5 mb-lg-0"><img class="rounded-circle img-fluid mb-3" src="assets/img/${img}">
	            <h5>${sandwichName}</h5>
	            <p class="font-weight-light mb-0">${ratingsText}</p>
				</div>
	        </div>`);
	        colCounter += 1
	        if(colCounter == 3){
		        console.log("Appending rowCounter");
		        rowCounter += 1
		        colCounter = 0;
		        $("#here").append(`<div id="row${rowCounter}" class="row"></div>`);
	        }
	    });
	});
});
