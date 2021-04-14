today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");

var dd1 = "";
var dd2 = "";
var dd3 = "";
checkNew = "False";
var row1 = "";
var cells1 = "";

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

  tblCalendar = document.getElementById("calendar-body"); // body of the calendar

  // clearing all previous cells
  tblCalendar.innerHTML = "";

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

        if (document.getElementById("textarea-char-counter").value != "") {
          //alert(document.getElementById("textarea-char-counter").value.length)
          if (document.getElementById("textarea-char-counter").value.slice(32, 35) === "Jan") {
            dd1 = 0;
          } else if (document.getElementById("textarea-char-counter").value.slice(32, 35) === "Feb") {
            dd1 = 1;
          } else if (document.getElementById("textarea-char-counter").value.slice(32, 35) === "Mar") {
            dd1 = 2;
          } else if (document.getElementById("textarea-char-counter").value.slice(32, 35) === "Apr") {
            dd1 = 3;
          } else if (document.getElementById("textarea-char-counter").value.slice(32, 35) === "May") {
            dd1 = 4;
          } else if (document.getElementById("textarea-char-counter").value.slice(32, 35) === "Jun") {
            dd1 = 5;
          } else if (document.getElementById("textarea-char-counter").value.slice(32, 35) === "Jul") {
            dd1 = 6;
          } else if (document.getElementById("textarea-char-counter").value.slice(32, 35) === "Aug") {
            dd1 = 7;
          } else if (document.getElementById("textarea-char-counter").value.slice(32, 35) === "Sep") {
            dd1 = 8;
          } else if (document.getElementById("textarea-char-counter").value.slice(32, 35) === "Oct") {
            dd1 = 9;
          } else if (document.getElementById("textarea-char-counter").value.slice(32, 35) === "Nov") {
            dd1 = 10;
          } else if (document.getElementById("textarea-char-counter").value.slice(32, 35) === "Dec") {
            dd1 = 11;
          }
          //dd1 = parseInt(document.getElementById("textarea-char-counter").value.slice(33, 36));
          dd2 = parseInt(document.getElementById("textarea-char-counter").value.slice(36, 38));
          dd3 = document.getElementById("textarea-char-counter").value.slice(40, 44);
        }

        // if (row1-1 === i && cells1 === j) {
        //   cell.classList.add("bg-info");
        //   //alert(dd1, dd2, dd3);
        // }
        if (date === dd2 && month === dd1 && year === dd3) {
          cell.classList.add("bg-highligh-cutstom");
          //alert(month, date, year);
        }
          cell.appendChild(cellText);
          row.appendChild(cell);
          date++;
        }
      }
      tblCalendar.appendChild(row); // appending each row into calendar body.
    }
  }

  $("#calendar-body").on("click", "td", function(event) {
    //alert("clicked cell at: " + this.cellIndex + ", " + this.parentNode.rowIndex);
    //cells , rowIndex

    row1 = this.parentNode.rowIndex;
    cells1 = this.cellIndex;
    daydate1 = "";
    if ((document.getElementById("textarea-char-counter").value).length > 46) {
      if (($(this).text()).length == 1) {
        daydate1 = "0" + $(this).text();
      } else {
        daydate1 = $(this).text();
      }
      var msg2 = document.getElementById("textarea-char-counter").value.slice(45, (document.getElementById("textarea-char-counter").value).length);
      var msg1 = "Hi BRB! Are you free to meet on " + $(monthAndYear).text().slice(0, 3) + " " + daydate1 + ", " + $(monthAndYear).text().slice(4, 8) + "?";
      document.getElementById("textarea-char-counter").value = msg1 + msg2;
      //alert((document.getElementById("textarea-char-counter").value).length);
    } else {
      if (($(this).text()).length == 1) {
        daydate1 = "0" + $(this).text();
      } else {
        daydate1 = $(this).text();
      }
      var msg3 = "Hi BRB! Are you free to meet on " + $(monthAndYear).text().slice(0, 3) + " " + daydate1 + ", " + $(monthAndYear).text().slice(4, 8) + "?";
      document.getElementById("textarea-char-counter").value = msg3;
      //alert((document.getElementById("textarea-char-counter").value).length);
    }
    // daydate2 = $(this).text();
    // daydate2 = parseInt(daydate2);
    // mo = 0;
    if ($(monthAndYear).text().slice(0, 3) === "Jan") {
      mo = 0;
    } else if ($(monthAndYear).text().slice(0, 3) === "Feb") {
      mo = 1;
    } else if ($(monthAndYear).text().slice(0, 3) === "Mar") {
      mo = 2;
    } else if ($(monthAndYear).text().slice(0, 3) === "Apr") {
      mo = 3;
    } else if ($(monthAndYear).text().slice(0, 3) === "May") {
      mo = 4;
    } else if ($(monthAndYear).text().slice(0, 3) === "Jun") {
      mo = 5;
    } else if ($(monthAndYear).text().slice(0, 3) === "Jul") {
      mo = 6;
    } else if ($(monthAndYear).text().slice(0, 3) === "Aug") {
      mo = 7;
    } else if ($(monthAndYear).text().slice(0, 3) === "Sep") {
      mo = 8;
    } else if ($(monthAndYear).text().slice(0, 3) === "Oct") {
      mo = 9;
    } else if ($(monthAndYear).text().slice(0, 3) === "Nov") {
      mo = 10;
    } else if ($(monthAndYear).text().slice(0, 3) === "Dec") {
      mo = 11;
    }
    // checkNew = "True";
    showCalendar(mo, $(monthAndYear).text().slice(4, 8));
    //checkNew = false;
  });

  // check how many days in a month code from https://dzone.com/articles/determining-number-days-month
  function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
  }
