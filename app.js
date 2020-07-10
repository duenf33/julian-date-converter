const year = document.getElementById("year");
const todaysDate = document.getElementById("todaysDate");
const span = document.getElementById("span");
const inputDate = document.getElementById("inputDate");
const buttonOne = document.getElementById("labelDate");
const labelDate = document.getElementById("labelDate");

const d = new Date();
todaysDate.innerHTML = d.toDateString();
labelDate.addEventListener('click', btn1);
  function btn1() {
    // const bigB = [
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

    // ];

    // const mont = [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec];
    // console.log(mont.length);
    // console.log(mont);
    // for (let i = 1 ; i <= mont.length ; i++) {
      // console.log(i);
      // console.log(mont[6]);
      // var tuck = mont[0];
      // console.log(tuck[range()]);
      
    // }


  //   const object1 = [
  //   {
  //     a: 'somestring',
  //     b: 42,
  //     c: 5,
  //     d: janes1 = range(0, 42)
  //   },
  //   {
  //     a: 'somethig different',
  //     b: 50,
  //     c: 1,
  //     d: janes2 = range(42, 132)
  //   },
  //   {
  //     a: 'i dont know',
  //     b: 42,
  //     c: 19,
  //     d: janes3 = range(132, 200)
  //   }
  // ];
  //   console.log(object1);
  //   console.log(object1[2]);
  //   console.log(object1[1]);
  //   console.log(object1[0]);
  //   console.log(Object.values(object1));

  //   const objArray = [];
  //   const objEx = Object.values(object1[1]);
  //   console.log(objEx);   //It allows to open one array to access the object content of 4.
  //   console.log(objEx[3]);
  //   const objEx2 = objEx[3];
  //   console.log(objEx2[65]);
  //   const obj = objArray.push(Object.values(object1[1]));
    
  //   console.log(obj);
  //   console.log(obj[2]);
  //   console.log(objArray);  //It allows to open an array then another array to access object content of 4.
  //   const objArray2 = [];
  //   const obj2 = objArray2.push(Object.values(janes2));
  //   console.log(obj2);
  //   console.log(objArray2);    
  //   // console.log(jane2);
    


  //   for (const [key, value] of Object.entries(object1)) {
  //     console.log(`${key}: ${value}`);
  //   }


    // const month = minus1;
    // console.log(month);
    // console.log(bigB[0].indexOf(month[5]));

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
    console.log(monthVminus1);
    console.log(monthValue);
    const date1 = inputValue.substr(8, 2);
    console.log(inputValue);
    const date1Value = parseInt(date1, 10);
    console.log(date1Value);
    const date1Vminus = date1Value - 1;
    console.log(date1Vminus);

    const yearOnly = inputValue.substr(0, 4);  // grabbing only the 4 digit year from the input date.
    const yearOnlyNum = parseInt(yearOnly, 10);   // converting the input year string to number.the full 4 digits of the year "2020".
    const foo = [];               // Loop years from 1970 to 2040 counting by 4 for leap year.
    // console.log(foo);
    for (let i = 1972; i <= 2040; i += 4) {
        foo.push(i);
    }
    const yearCrop = inputValue.substr(2, 2);   //year last 2 digits as a integer "20".
    const yearCropNum = parseInt(yearCrop, 10); //year last 2 digits converted to number "20".
    console.log(yearCrop);    
    console.log(yearCropNum); 
    console.log(yearOnlyNum); 
    year.innerHTML = foo[2];
    const n = foo.includes(yearOnlyNum)  //used includes to be able to see if yearOnlyNum was in array.
      while (n === true) {    //includes gives out a true or false.
        console.log(n);
        leap();
        // bigB[0].forEach();
        break;    //always use break or it will never end and crash browser.
      }
      while (n === false) {
        console.log(n);
        noleap();
        // bigB[1].forEach();
        break;
      }
      function range(start, end) {
        var foo2 = [];        
        for (let i = start; i <= end; i++) {
            foo2.push(i);
            // console.log(foo2);
            // console.log(i);
        }
        return foo2;
      }
      
    // span.innerHTML = may[1];



    




    // bigB[0].forEach(function(item1, index1, array1){
    //   console.log(index1);
    //   console.log(monthVminus1);
    //   while (index1 === monthVminus1) {
    //     var mo = sep;
    //     var setup = mo[date1Value]; 
        
    //     console.log(monthVminus1);
    //     console.log(monthVminus1, index1, range(setup, setup));

    //     // item1.forEach(function(item2, index2, array2) {
    //     //   while (index2 === date1Value) {
    //     //     console.log(index2);
    //     //   }
    //     // })

    //     // for (let i = 0 ; i <= item1.lenght ; i++) {
    //     //   console.log(item1[i]);
    //     // }

    //     // console.log(item1);
    //     // console.log(array1);
    //     // range(item1, item1);
    //     // range(minus1);
    //     // console.log(minus1[date1Value]);
    //     break;
    //   }
    // })

    // bigB[1].forEach(function(item1, index1, array1){
    //   console.log(index1);
    //   console.log(monthVminus1);
    //   while (index1 === monthVminus1) {
    //     var mo = jan;
    //     var setup = mo[date1Value]; 
        
    //     console.log(monthVminus1);
    //     console.log(monthVminus1, index1, range(setup, setup));

    //     // item1.forEach(function(item2, index2, array2) {
    //     //   while (index2 === date1Value) {
    //     //     console.log(index2);
    //     //   }
    //     // })

    //     // for (let i = 0 ; i <= item1.lenght ; i++) {
    //     //   console.log(item1[i]);
    //     // }

    //     // console.log(item1);
    //     // console.log(array1);
    //     // range(item1, item1);
    //     // range(minus1);
    //     // console.log(minus1[date1Value]);
    //     break;
    //   }
    // })


    function leap() {
      console.log("Leap Year!!!!!")
      console.log(date1Value);
      // console.log(minus1);

      const arrDn = Object.values(jdly[monthVminus1]);
      console.log(arrDn);
      const arrDp = Object.values(arrDn[0]);
      console.log(arrDp);
      const arrDp2 = arrDp[date1Value];
      console.log(arrDp2);
    }

    function noleap() {
      console.log("NOOOO  Leap Year.")
      const arrBn = Object.values(jd[monthVminus1]);
      console.log(arrBn);
      const arrBp = Object.values(arrBn[0]);
      console.log(arrBp);
      const arrBp2 = arrBp[date1Value];
      console.log(arrBp2);

      // cool();
      // console.log(minus1);
      // console.log(monthValue);    
      // console.log(date1Value);
      // bigB[1].forEach(function(item3, index3, array3){  //forEach to compare index from bigD to the monthvalue
        // console.log(index3);
        // console.log(monthValue);
        // while (index3 === monthValue) {
          // console.log(index3);
          // const minus3 = index3 - 1;
          // console.log(minus3);
          // for (let elem in obj) {
          //   console.log(`${elem} = ${obj[elem]}`);
          // }
          // jd[minus3].forEach()
          // range(minus3);
          // console.log(minus3[date2Value]);
          // break;
        // }
      // })
    }

 
// //----------------------------------------------
//       for (let elem in obj) {
//         console.log(`${elem} = ${obj[elem]}`);
//       }
//       // a = 1
//       // b = 2
//       // c = 3
//       // d = 4
// //----------------------------------------------
//       const obj = {  
//         a: 1,
//         b: 2,
//         c: 3,
//         d: 4
//       }
      
//       for (let elem in obj) {  
//         console.log( obj[elem] )
//       }
//       // 1
//       // 2
//       // 3
//       // 4
// //-----------------------------------------------
      // function checkList(foo) {   // Using only the find() function instead of a loop.
      //   return foo === yearOnlyNum;
      // }
      // const example = foo.find(checkList);   // find() function is comparing the input year with foo in order to see if its a leap year or not    //when not leap year it becomes a 'undefined' value. does not work.
      // const example2 = parseInt(example, 10);            
  }