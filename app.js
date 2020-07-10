const year = document.getElementById("year");
const todaysDate = document.getElementById("todaysDate");
const span = document.getElementById("spaN");
const inputDate = document.getElementById("inputDate");
const buttonOne = document.getElementById("labelDate");
const labelDate = document.getElementById("labelDate");
const d = new Date();
todaysDate.innerHTML = d.toDateString();
labelDate.addEventListener('click', btn1);
  function btn1() {
      jd = [
          { monthA: jan = range(0, 31)},
          { monthB: feb = range(31, 59)},
          { monthC: mar = range(59, 90)},
          { monthD: apr = range(90, 120)},
          { monthE: may = range(120, 151)},
          { monthF: jun = range(151, 181)},
          { monthG: jul = range(181, 212)},
          { monthH: aug = range(212, 243)},
          { monthI: sep = range(243, 273)},
          { monthJ: oct = range(273, 304)},
          { monthK: nov = range(304, 334)},
          { monthL: dec = range(334, 365)}
        ];
      jdly = [
          { month: jan = range(0, 31)},
          { month: feb = range(31, 60)},
          { month: mar = range(60, 91)},
          { month: apr = range(91, 121)},
          { month: may = range(121, 152)},
          { month: jun = range(152, 182)},
          { month: jul = range(182, 213)},
          { month: aug = range(213, 244)},
          { month: sep = range(244, 274)},
          { month: oct = range(274, 305)},
          { month: nov = range(305, 335)},
          { month: dec = range(335, 366)}
        ];
    const inputValue = inputDate.value;
    if (inputValue === '') {
      alert('Enter Date');
      return;
    } else {
      inputDate.value = '';
    }
    const month1 = inputValue.substr(5, 2);  // grabbing the 2 month digits from the input date.
    const monthValue = parseInt(month1, 10);  // converting the input month string to number.
    const monthVminus1 = monthValue - 1;
    const date1 = inputValue.substr(8, 2);
    const date1Value = parseInt(date1, 10);
    const yearOnly = inputValue.substr(0, 4);  // grabbing only the 4 digit year from the input date.
    const yearOnlyNum = parseInt(yearOnly, 10);   // converting the input year string to number.the full 4 digits of the year "2020".
    const foo = [];               // Loop years from 1970 to 2040 counting by 4 for leap year.
    for (let i = 1972; i <= 2040; i += 4) {
        foo.push(i);
    }
    const yearCrop = inputValue.substr(2, 2);   //year last 2 digits as a integer "20".
    const yearCropNum = parseInt(yearCrop, 10); //year last 2 digits converted to number "20". 
    year.innerHTML = inputValue;
    const n = foo.includes(yearOnlyNum)  //used includes to be able to see if yearOnlyNum was in array.
      while (n === true) {    //includes gives out a true or false.
        leap();
        break;    //always use break or it will never end and crash browser.
      }
      while (n === false) {
        noleap();
        break;
      }
      function range(start, end) {
        var foo2 = [];        
        for (let i = start; i <= end; i++) {
            foo2.push(i);
        }
        return foo2;
      }
    function leap() {
      const arrDn = Object.values(jdly[monthVminus1]);
      const arrDp = Object.values(arrDn[0]);
      const arrDp2 = arrDp[date1Value];
      span.innerHTML = `${yearCropNum}${arrDp2}`; 
    }
    function noleap() {
      const arrDn = Object.values(jd[monthVminus1]);
      const arrDp = Object.values(arrDn[0]);
      const arrDp2 = arrDp[date1Value];
      span.innerHTML = `${yearCropNum}${arrDp2}`; 
    }            
  }