 // Kello yläpalkkiin!! Javascriptalla! hax2themax


function showTime() {
  /*
    Komponentti, johon kello asetetaan
  */

  var component = document.getElementById("clock");

  var now = new Date();
  var year = now.getYear();

  if (year < 1000) {
    year += 1900;
  }

  var day = now.getDay();
  var month = now.getMonth();

  var dayDisplay = now.getDate();

  if (dayDisplay < 10) {
    dayDisplay = "0" + dayDisplay;
  }


  var dayName = ["sunnuntai", "maanantai", "tiistai",
    "keskiviikko", "torstai", "perjantai", "lauantai"
  ];

  var monthName = ["tammikuu", "helmikuu",
    "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu",
    "syyskuu", "lokakuu", "marraskuu",
    "joulukuu"
  ];

  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  if (hours <= 9) {
    hours = "0" + hours;
  }


  if (minutes <= 9) {
    minutes = "0" + minutes;
  }

  if (seconds <= 9) {
    seconds = "0" + seconds;
  }

  /*
     Näytettävä muoto
  */

  var clockdate = dayName[day] + " " +
    monthName[month] + " " + dayDisplay + ", " + year + "  " +
    hours + ":" + minutes + ":" + seconds;

  component.innerHTML = clockdate;

  /*
   * Päivitysnopeus
   */

  setTimeout("showTime()", 1000);

}

window.onload = showTime;
