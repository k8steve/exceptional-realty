$(function() {

	// Market Report Table //

	function Property(street, city, state, price, posted) {	//Property is a constructor function?

		this.constructor.all.push(this); //push all instances into a single array (see below)
		
		this.street = street;
		this.city = city;
		this.state = state;
		this.price = price;
		this.posted = new Date(posted);	//DATE OBJECT

		var self = this; //without declaring variable self equal to this, this refers to window object?

		function isNew() { //Private, only accessable within Property class
			var currentDate = new Date(),
				daysListed = ((((currentDate - self.posted)/1000)/60)/60)/24; //converts miliseconds to seconds, to minutes, to hours, to days
			if (daysListed < Property.maxDays) {
				return '<span class="new">&#9733;</span>';
			} else {
				return '';
			}
		}

		this.el = '<tr>'+
					'<td>'+isNew()+this.street+'</td>'+
					'<td>'+this.city+'</td>'+
					'<td>'+this.state+'</td>'+
					'<td>'+this.price+'</td>'+
				'</tr>';	//physical HTML element

	}

	Property.all = [];
	Property.maxDays = 10; //anything older than 10 days will not get a star

	Property.displayContent = function() {
		$('.property-count').text(Property.all.length);
		$('.max-days').text(Property.maxDays);
		$.each(Property.all, function(i, property){
			$('table').find('tbody').append(property.el); //WHY NO CAPS
		});
		$('table').stupidtable();
	};

	//create properties:

	var property1 = new Property("2345 Fairview Lane", "Brooklyn", "NY", 1200000, "2014 Apr 3"); //new instance of Property class, (new is a constructor function)
	var property2 = new Property("974 Clapton St.", "Queens", "NY", 998000, "2014 Mar 14");
	var property3 = new Property("14a Belmont Way", "Bronx", "NY", 874000, "2014 Mar 28");
	var property4 = new Property("455 Crazy Lane", "Queens", "NY", 550000, "2015 June 10");

	// console.log(Property.all);
	Property.displayContent();

});