// --- global variables ---

var loans = [
    { loan_year: 2020, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2021, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2022, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2023, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2024, loan_amount: 10000.00, loan_int_rate: 0.0453 }
  ]; 

  localStorage.setItem("loans", loans);
  // --- function: loadDoc() ---
  
  function loadDoc() {
    
    // pre-fill defaults for first loan year
    var defaultYear = loans[0].loan_year;
    //$("[id='loan_year0+1']").html(defaultYear++); // Converting all doc.getElemById to $("[id = '']")
    document.getElementById("loan_year0" + 1).value = defaultYear++;
    var defaultLoanAmount = loans[0].loan_amount;
    //$("[id='loan_amt0+1']").html(defaultLoanAmount.toFixed(2));
    document.getElementById("loan_amt0" + 1).value = defaultLoanAmount.toFixed(2);
    var defaultInterestRate = loans[0].loan_int_rate;
    //$("[id='loan_int0+1']").html(defaultInterestRate);
    document.getElementById("loan_int0" + 1).value = defaultInterestRate;
    var loanWithInterest = loans[0].loan_amount * (1 + loans[0].loan_int_rate);
    //$("[id='loan_bal0+1']").html(toComma(loanWithInterest.toFixed(2)));
    document.getElementById("loan_bal0" + 1).innerHTML = toComma(loanWithInterest.toFixed(2));
    
    // pre-fill defaults for other loan years
    for(var i=2; i<6; i++) {
      $("[id='loan_year0"+i+"']").html(defaultYear++);
      // document.getElementById("[id='loan_year0 + i']").value = defaultYear++;
      $("[id='loan_year0"+i+"']").disabled = true;
      // document.getElementById("loan_year0" + i).disabled = true;
      $("[id='loan_year0"+i+"']").css("background-color", "gray"); // css ones
      $("[id='loan_year0"+i+"']").css("color", "white");
      // document.getElementById("loan_year0" + i).style.backgroundColor = "gray";
      // document.getElementById("loan_year0" + i).style.color = "white";
      $("[id='loan_amt0"+i+"']").html(defaultLoanAmount.toFixed(2));
      $("[id='loan_int0"+i+"']").html(defaultInterestRate);
      $("[id='loan_int0"+i+"']").disabled = true;
      $("[id='loan_int0"+i+"']").css("background-color", "gray");
      $("[id='loan_int0"+i+"']").css("color", "white");
      //document.getElementById("loan_amt0" + i).value = defaultLoanAmount.toFixed(2);
      //document.getElementById("loan_int0" + i).value = defaultInterestRate;
      //document.getElementById("loan_int0" + i).disabled = true;
      //document.getElementById("loan_int0" + i).style.backgroundColor = "gray";
      //document.getElementById("loan_int0" + i).style.color = "white";
     loanWithInterest = (loanWithInterest + defaultLoanAmount) * (1 + defaultInterestRate);
     $("[id='loan_bal0 + i']").html(toComma(loanWithInterest.toFixed(2)));
     // document.getElementById("loan_bal0" + i).innerHTML = toComma(loanWithInterest.toFixed(2));
      } // end: "for" loop
    
    // all input fields: select contents on focus
    $("input[type=text]").focus(function() {
      $(this).select();
      $(this).css("background-color", "yellow");
    }); 
    $("input[type=text]").blur(function() {
      $(this).css("background-color", "white");
    });
    
      let regex = /^[1-9][0-9]*/; // takes in any number that doesnt start with 0 ex: 011 not work
      
    // set focus to first year: messes up codepen
    // $("#loan_year01").focus();
    $("#loan_year01").focus( function() {
      let year = parseInt($("#loan_year01").val());
      console.log(year);
      if(regex.test(year)==true) { // Only update loans array when input is valid
        updateLoansArray();
      }
    });
    
  } // end: function loadDoc()
  
  
  function toComma(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  function updateLoansArray() {
    let loans2 = localStorage.getItem(loans);
    loans2[0].loan_year = parseInt($("#loan_year01").val());
    for(var i=1; i<5; i++) {
      loans2[i].loan_year = loans[0].loan_year + i;
      $("#loan_year0"+ (i+1) ).val(loans2[i].loan_year);
    }
    localStorage.setItem("loans", loans2);
  }
