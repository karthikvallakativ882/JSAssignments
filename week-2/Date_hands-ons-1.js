//Assignment 1: Date Creation & Extraction (Beginner)

//Tasks:
  //     1. Create a Date object for current date & time.
  let date1 = new Date()
  console.log(date1);

  //     2. Extract and display:
  //                  * Year
     console.log("Year :",date1.getFullYear())

  //                  * Month (human readable)
    console.log("MOnth :",date1.getMonth() + 1)

  //                  * Date   
  console.log("Date :",date1.getDate())

  //                  * Day of week
  console.log("Day of week :", date1.getDay())

  //                  * Hours, minutes, seconds
  console.log("Hours:Min:sec", date1.getHours(),date1.getMinutes(),date1.getSeconds())

  //    3. Display the date in this format:
  //                  DD-MM-YYYY HH:mm:ss
  let DD = String(date1.getDate()).padStart(2,'0');
  let MM = String(date1.getMonth() + 1).padStart(2,'0');
  let YYYY = date1.getFullYear();
  let HH = String(date1.getHours()).padStart(2,'0');
  let min = String(date1.getMinutes()).padStart(2,'0');
  let sec = String(date1.getSeconds()).padStart(2,'0');
  let formattedDate = `${DD}-${MM}-${YYYY} ${HH}:${min}:${sec}`;
  console.log("Formatted Date :", formattedDate);