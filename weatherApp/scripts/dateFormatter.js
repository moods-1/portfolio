class DateFormatter{
    
    fullDay = (dayNumber) => {
        let days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        return days[dayNumber];
      };
      shortDay = (dayNumber) => {
        let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
        return days[dayNumber];
      };
      shortMonth = (monthNumber) => {
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
          "Aug", "Sep", "Oct", "Nov", "Dec"];
        return months[monthNumber];
      };
      hours12TrueGMT = (hour) => {
        let tIndex = hour.indexOf("T");
        let trueHour = hour.slice(tIndex + 1, tIndex + 3);
        return parseInt(trueHour);
      };
      timeConversion = (time) => {
        let d = new Date(time);
        let month = this.shortMonth(d.getMonth());
        let day = this.fullDay(d.getDay());
        let dayShort = this.shortDay(d.getDay());
        let date = d.getDate();
        let currentHour = d.getHours();
        let hours12Hour = this.hours12TrueGMT(time);
        let minutes = d.getUTCMinutes();
        let meridiem = "";
        let meridiem12 = "";
        if (currentHour == 0) {
          currentHour = 12;
          meridiem = "AM";
        } else if (currentHour >= 13) {
          currentHour = currentHour - 12;
          meridiem = "PM";
        } else {
          meridiem = "AM";
        }
        if (hours12Hour == 0) {
          hours12Hour = 12;
          meridiem12 = "AM";
        } else if (hours12Hour >= 13) {
          hours12Hour = hours12Hour - 12;
          meridiem12 = "PM";
        } else {
          meridiem12 = "AM";
        }
      
        return { month, day, dayShort, date, currentHour, hours12Hour, minutes, meridiem, meridiem12 };
      }  
}