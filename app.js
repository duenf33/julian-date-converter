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
    const bigB = [
      jd = [
          { month: jan = range(0, 31)},
          { month: feb = range(31, 59)},
          { month: mar = range(59, 90)},
          { month: apr = range(90, 120)},
          { month: may = range(120, 151)},
          { month: jun = range(151, 181)},
          { month: jul = range(181, 212)},
          { month: aug = range(212, 243)},
          { month: sep = range(243, 273)},
          { month: oct = range(273, 304)},
          { month: nov = range(304, 334)},
          { month: dec = range(334, 365)}
        ],
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
        ]
    ];
    const inputValue = inputDate.value;    
    if (inputValue === '') {
      alert('Enter Date');
      return;
    } else {
      inputDate.value = '';
    }
    
    const yearOnly = inputValue.substr(0, 4);  // grabbing only the 4 digit year from the input date.
    const yearOnlyNum = parseInt(yearOnly, 10);   // converting the input year string to number.
    const foo = [];               // Loop years from 1970 to 2040 counting by 4 for leap year.
    for (var i = 1972; i <= 2040; i += 4) {  
        foo.push(i);
    } 
    const yearCrop = inputValue.substr(2, 2);
    const yearCropNum = parseInt(yearCrop, 10);
    console.log(yearCrop);
    console.log(yearCropNum);
    console.log(yearOnlyNum);
      year.innerHTML = foo[2];
      foo.forEach(function(item, index, array) {
        if (item === yearOnlyNum){
          leap();          
        } else {
          leapy();          
        }
      })
      function leap() {
        const month1 = inputValue.substr(5, 2);  // grabbing the 2 month digits from the input date.
        const monthValue = parseInt(month1, 10);  // converting the input month string to number.
        console.log(monthValue);
        bigB.forEach(function(item, imndex, array){
          
        })
      }
      function leapy() {
        const month1 = inputValue.substr(5, 2);  // grabbing the 2 month digits from the input date.
        const monthValue = parseInt(month1, 10);  // converting the input month string to number.
        console.log(monthValue);
      }
      // function checkList(foo) {   // Using only the find() function instead of a loop.
      //   return foo === yearOnlyNum;        
      // }
      // const example = foo.find(checkList);   // find() function is comparing the input year with foo in order to see if its a leap year or not    //when not leap year it becomes a 'undefined' value. does not work.
      // const example2 = parseInt(example, 10);

            
  }
        function range(start, end) {
            var foo2 = [];
            for (var i = start; i <= end; i++) {
                foo2.push(i);
            }
            return foo2;
        }
    // span.innerHTML = sep[5];  