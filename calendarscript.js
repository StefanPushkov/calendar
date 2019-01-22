/* GLOBAL VARS */


var now = new Date();
var month = now.getMonth();
var year = now.getFullYear();
var array_months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthLBL = $(".monthLabel");




 /* FUNCTIONS */

$(document).ready(create()); 
createGrid();
	

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
	removing();
	createGrid();
});

var prev_button = $(".switch_back");
prev_button.bind('click', function () {
	addMonth(-1);
	removing();
	createGrid();
});


/*  СОЗДАНИЕ ЯЧЕЕК ДЛЯ ДНЕЙ МЕСЯЦА  */
function createGrid() {

	var monthLBL = $(".monthLabel");

	var calendarTable = $("<table class='table'>");
	var curr = monthLBL.text().trim().split(" ");
	var monthName = curr[0];
	var nameYear = curr[1];
	var indexmonth = array_months.indexOf(monthName);
	var now = new Date(nameYear, indexmonth);
	var amountOfDays = new Date(nameYear, indexmonth+1, 0).getDate();
	var all_td = 0;


	/*
		Функция вставляет в клеточки календаря в первом ряду
		последние дни предыдущего месяца
	*/
	function preMonth() {
		/*	Данная переменная содержит количество дней предыдущего месяца*/
		var preMonthDays = new Date(nameYear, indexmonth, 0).getDate();
		now.setDate(1);
		var blank = (now.getDay() == 0)?6:now.getDay() - 1;
		/*  День предыдущего месяца с которого начинаем неделю	*/
		var dayStarts = preMonthDays - blank + 1;

		for (var w = dayStarts; w <= preMonthDays; w++) {
			text+="<td class='cell last'>" + w + "</td>";
			all_td++;
		}
	}

	function nowMonth() {
		for (var x = 1; x <= amountOfDays; x++) {
			text+="<td class='cell'>" + x + "</td>";
			all_td++;
			var blank = (now.getDay() == 0)?6:now.getDay() - 1;
			var allTD = amountOfDays + blank;
			if(all_td%7==0) {
				if(allTD != all_td){
					text += "</tr><tr class='row'>";
				} else {
					text += "</tr>";
				}
			}
		}
	}


	/*
		Функция вставляет в клеточки календаря в последнем ряду
		первые дни следующего месяца
	*/
	function nxtMonth() {
		var nxtMonthDays = new Date(nameYear, indexmonth+2, 0).getDate();
		var lastDay = new Date(nameYear, indexmonth+1, 0).getDay() ;
		var blankback = (lastDay == 0) ? 0 : (7 - lastDay);
		var cutDays = nxtMonthDays - blankback;
		var suitNxtMonthDays = nxtMonthDays - cutDays;

		for (var z = 1; z <= suitNxtMonthDays; z++) {
			text += "<td class='cell first'>" + z + "</td>";
			all_td++;
		}
	}

	/*
	now.setDate(1);
	var blank = (now.getDay() == 0)?6:now.getDay() - 1;
	for (var i = 0; i < blank; i++) {
		text+="<td class='cell'>" + "&nbsp;" + "</td>";
		all_td = blank;
	}*/

	var text = "<tr class='row'>";
	

	//1  
	preMonth();


	//2
	nowMonth();


	//3
	nxtMonth();

	text += "</tr></table>";

	/*
	var lastDay = new Date(nameYear, indexmonth+1, 0).getDay() ;
	var blankback = (lastDay == 0) ? 0 : (7 - lastDay);
	for (var y = 1; y <= blankback; y++) {
		text += "<td class='cell'>" + "&nbsp;" + "</td>";
	}
	*/

	$(calendarTable).append(text);
	$(".calendarGrid").append(calendarTable);

	var c = document.querySelectorAll(".cell");
	Array.from(c);
	var arrayOfDays = [", Пн", ", Вт", ", Ср", ", Чт", ", Пт", ", Сб", ", Вс"];


	for (var d = 0; d < 7; d++) {
		var weekDay = arrayOfDays[d];
		c[d].innerHTML +=  weekDay;
		}
}

/*  
		Добавление дней недели в первый ряд календаря
*/

function removing() {
	var calendarTable = $(".table");
	$(calendarTable).remove();
}


















var buttonAdd = $(".add");



/*создаёт окошко*/


$(buttonAdd).on("click", function addEvent() {
	var eventWindow = $("<div class='eventWindow'>");
	$(".control_panel").append(eventWindow);
});


