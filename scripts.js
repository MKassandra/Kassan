today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");

months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);


function next() {
  currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  showCalendar(currentMonth, currentYear);
}

function previous() {
  currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
  currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
  showCalendar(currentMonth, currentYear);
}

function todayDate() {
  today = new Date();
  currentMonth = today.getMonth();
  currentYear = today.getFullYear();
  selectYear = document.getElementById("year");
  selectMonth = document.getElementById("month");

  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  monthAndYear = document.getElementById("monthAndYear");
  showCalendar(currentMonth, currentYear);
}

function jump() {
  currentYear = parseInt(selectYear.value);
  currentMonth = parseInt(selectMonth.value);
  showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

  var firstDay = (new Date(year, month)).getDay();

  tbl = document.getElementById("calendar-body"); // body of the calendar

  // clearing all previous cells
  tbl.innerHTML = "";

  // filing data about month and in the page via DOM.
  monthAndYear.innerHTML = months[month] + " " + year;
  selectYear.value = year;
  selectMonth.value = month;

  // creating all cells
  var date = 1;
  for (var i = 0; i < 6; i++) {
    // creates a table row
    var row = document.createElement("tr");

    //creating individual cells, filing them up with data.
    for (var j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        cell = document.createElement("td");
        cellText = document.createTextNode("");
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (date > daysInMonth(month, year)) {
        break;
      } else {
        cell = document.createElement("td");
        cellText = document.createTextNode(date);
        if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
          cell.classList.add("bg-info");
        } // color today's date
        cell.appendChild(cellText);
        row.appendChild(cell);
        date++;
      }


    }

    tbl.appendChild(row); // appending each row into calendar body.
  }

}

$("#calendar-body").on("click", "td", function(event) {
  //console.log($(this).text());
  //document.getElementById("textarea-char-counter").innerHTML = "";
  //document.getElementById("textarea-char-counter").innerHTML = "I would like to set a meeting at " + $(monthAndYear).text().slice(0, 3) + " " + $(this).text() + ", " + $(monthAndYear).text().slice(4, 8) + "."; // $(currentyear).text ;
  //var msg1 = document.getElementsByTagName("textarea-char-counter");
  //msg1.setAttribute(innerHTMLs,"I would like to set a meeting at " + $(monthAndYear).text().slice(0, 3) + " " + $(this).text() + ", " + $(monthAndYear).text().slice(4, 8) + ".");
  var daydate1 = "";
  if ((document.getElementById("textarea-char-counter").value).length > 46) {
    if (($(this).text()).length == 1) {
      daydate1 = "0" + $(this).text();
    } else {
      daydate1 = $(this).text();
    }
    var msg2 = document.getElementById("textarea-char-counter").value.slice(80, (document.getElementById("textarea-char-counter").value).length);
    var msg1 = "Good day! We would like to set a meeting on " + $(monthAndYear).text().slice(0, 3) + " " + daydate1 + ", " + $(monthAndYear).text().slice(4, 8) + ".";
    document.getElementById("textarea-char-counter").value = msg1 + msg2;
    //alert((document.getElementById("textarea-char-counter").value).length);
  } else {
    if (($(this).text()).length == 1) {
      daydate1 = "0" + $(this).text();
    } else {
      daydate1 = $(this).text();
    }
    var msg3 = "Good day! We would like to set a meeting on " + $(monthAndYear).text().slice(0, 3) + " " + daydate1 + ", " + $(monthAndYear).text().slice(4, 8) + ".";
    document.getElementById("textarea-char-counter").value = msg3;
    //alert((document.getElementById("textarea-char-counter").value).length);
  }
});



// check how many days in a month code from https://dzone.com/articles/determining-number-days-month
function daysInMonth(iMonth, iYear) {
  return 32 - new Date(iYear, iMonth, 32).getDate();
}
