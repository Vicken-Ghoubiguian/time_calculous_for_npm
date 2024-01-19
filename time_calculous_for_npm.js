//
const Numeral = Object.freeze({

	FIRST: 0,
	SECOND: 1,
	THIRD: 2,
	BEFORE_LAST: 3,
	LAST: 4
});

//
function wished_wday_in_choosen_month(year, month, wday, hour, minute, 
second, num) {

	//
	var i = 0;
	var condition = 0;
	var today = Date.now();

	//
	var dt_as_date;
	var dt_as_timestamp;

	

	console.log("wished_wday_in_choosen_month coming soon...");
}

//
function calculations_on_date_and_time() {

	console.log("calculations_on_date_and_time coming soon...");
}

//
function diffs_on_date_and_time() {

	console.log("diffs_on_date_and_time coming soon...");
}

//
module.exports = {
	'Numeral': Numeral,
	'calculations_on_date_and_time': calculations_on_date_and_time,
	'wished_wday_in_choosen_month': wished_wday_in_choosen_month,
	'diffs_on_date_and_time': diffs_on_date_and_time
}
