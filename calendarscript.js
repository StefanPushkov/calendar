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

/*
var tableTD = $('.table');
var arr = [];
var allTrs = $('.cell');

for (var trcounter = 0; trcounter < allTrs.length; trcounter++) {

	var tempArr = [];
	var allTdInTr = allTrs[trcounter].getElementsByTagName('td');

	for (var tdcounter = 0; tdcounter < allTdInTr.length; tdcounter++) {
		tempArr.push(allTdInTr[tdcounter].innerHTML);
	}
	arr.push(tempArr);
}

$(".calendarGrid").append(arr);


*/
/*
var arr = [];
var c = $(".cell");
$(c).each( function() {
	arr.push($(this));
} ) */





var c = document.querySelectorAll(".cell");
Array.from(c);
var arrayOfDays = [", Понедельник", ", Вторник", ", Среда", ", Чтеверг", ", Пятница", ", Суббота", ", Воскресение"];


for (var d = 0; d < 7; d++) {
	var weekDay = arrayOfDays[d];
	c[d].innerHTML +=  weekDay;

	}
