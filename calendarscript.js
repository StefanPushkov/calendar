/* GLOBAL VARS */


var now = new Date();
var month = now.getMonth();
var array_months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var year = now.getFullYear();


 /* FUNCTIONS */

$(document).ready(create()); 

	

function create() {
	var thatmonth = array_months[month];
	var monthLBL = $(".monthLabel");
	monthLBL.html(thatmonth + " " + year);
}



function addMonth (num) {
	var monthLBL = $(".monthLabel");
	var newmonth = array_months[month += num];
	monthLBL.html(newmonth + " " + year);

}

var forw_button = $(".switch_forward");
forw_button.bind('click', function () {
	addMonth(1);
});

var prev_button = $(".switch_back");
prev_button.bind('click', function () {
	addMonth(-1);
});


































	/* НЕ ДО КОНЦА РАБОЧИЙ ПРИМЕР  */

/*var calendar = function () {
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


function init() {
	var month_label = $(".monthLabel");
	var prev_button = $(".switch_back");
	var forw_button = $(".switch_forward");
	prev_button.bind('click', function () { toggleMonth(false) });
	forw_button.bind('click', function () { toggleMonth(true) });
	month_label.bind("click", function () { toggleMonth(null, new Date().getMonth(), new Date().getFullYear()); });        
    month_label.click();
	}



function toggleMonth(next, month, year) {
		var current = $(".month");
		var currentMonth = current.text().trim().split(" ");
		var tempYear =  parseInt(currentMonth[1], 10);

		month = month || function () {
			if(!month) {
				if(true) {
					if (currentMonth[0] === "December") {
						month = 0;
					} else {
						month = months.indexOf(currentMonth[0]) + 1;
					}
				} else { 
					if(currentMonth[0] === "January") {
						month = 11;
				} else {
					month = months.indexOf(currentMonth[0]) - 1;
					}
				}
			}
		}

		year = year || function () { 
			if(!year) {
				if(next && month === 0) {
					year = tempYear + 1; 
			} else if (!next && month === 11) {
					year = tempYear - 1;
				} else {
					year = tempYear;
				}
			}
		}
	}
}

var CAL = calendar();
CAL.init();

*/