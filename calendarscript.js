/* GLOBAL VARS */


var now = new Date();
var month = now.getMonth();
var year = now.getFullYear();
var array_months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthLBL = $(".monthLabel");




 /* FUNCTIONS */

$(document).ready(create()); 

	

function create() {
	var thatmonth = array_months[month];
	var monthLBL = $(".monthLabel");
	monthLBL.html(thatmonth + " " + year);
}



function addMonth (num) {
	var newmonth = array_months[month += num];
	var monthLBLvalue = monthLBL.text();
	var isDecember = monthLBLvalue.includes("December");
	var isJanuary = monthLBLvalue.includes("January");
	var curr = monthLBL.text().trim().split(" ");
	var tempYear = parseInt(curr[1], 10);
	var tempYear4grid = curr[1];
	var yearPlus = tempYear + 1;
	var yearMinus = tempYear - 1; 


	if(num == 1) {
		if (isDecember == true) {
			month = 0;
			monthLBL.html(array_months[0] + " " + yearPlus);
		} else {
			monthLBL.html(newmonth + " " + tempYear);
		}
	} else if(num == -1) 
		if (isJanuary == true) {
			month = 11;
			monthLBL.html(array_months[11] + " " + yearMinus);		
		} else {
			monthLBL.html(newmonth + " " + tempYear);
		} 
	}


var forw_button = $(".switch_forward");
forw_button.bind('click', function () {
	addMonth(1);
});

var prev_button = $(".switch_back");
prev_button.bind('click', function () {
	addMonth(-1);
});


/*  СОЗДАНИЕ ЯЧЕЕК ДЛЯ ДНЕЙ МЕСЯЦА  */

/*
var calendarTable = document.createElement("table"); 
var	newRow = calendarTable.insertRow(-1),
	newCell,
	weekDay = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'],
	firstWeekDay = new Date(year, month, 1).getDay(),
	lastDayMonth = new Date(year, month+1, 0).getDate();



for (var i = 0, I = weekDay.length; i < I; i++) {
	newCell = newRow.insertCell(-1);
	newCell.className = "cell";
	newCell.appendChild(document.createTextNode(weekDay[i]));
}

function getRuWeekDay(computed_day) {
    return (computed_day + 6) % 7;
}

lastDayMonth += getRuWeekDay(firstWeekDay);



for (var j = 1; j <= lastDayMonth; j++){
    newCell = newRow.insertCell(-1);
    newCell.className =  "cell";
    if(j-firstWeekDay > 0){
        newCell.appendChild(document.createTextNode(j-firstWeekDay));
    }else{
        newCell.appendChild(document.createTextNode(''));
    }
 
    if(j%7==1){
        newRow = calendarTable.insertRow(-1);
    }
}


$(".calendarGrid").append(calendarTable);*/

/*calendarTable.className = "container4days";*/

var calendarTable = $("<table class='table'>");

var amountOfDays = new Date(year, month+1, 0).getDate();

now.setDate(1);
var blank = (now.getDay() == 0)?6:now.getDay() - 1;
var text = "<tr class='row'>";
var all_td = 0;

for (var i = 0; i < blank; i++) {
	text+="<td class='cell'>" + "&nbsp;" + "</td>";
	all_td = blank;
}


for (var x = 1; x <= amountOfDays; x++) {
	text+="<td class='cell'>" + x + "</td>";
	all_td++;
	if(all_td%7==0) {
		text += "</tr><tr class='row'>";
	}
}

var lastDay = new Date(year, month+1, 0).getDay();
var blankback = (6 - lastDay);

for (var y = 0; y <= blankback; y++) {
	text += "<td class='cell'>" + "&nbsp;" + "</td>";
}


$(calendarTable).append(text);
$(".calendarGrid").append(calendarTable);


























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