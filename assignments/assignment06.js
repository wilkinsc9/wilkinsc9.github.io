// --- global variables ---

var loans = [
    { loan_year: 2020, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2021, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2022, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2023, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2024, loan_amount: 10000.00, loan_int_rate: 0.0453 }
  ]; 
  
  // --- function: loadDoc() ---
  
  function loadDoc() {
    
    // pre-fill defaults for first loan year
    var defaultYear = loans[0].loan_year;
    $("[id='loan_year0'+1]").innerHTML(defaultYear++);
    // document.getElementById("loan_year0" + 1).value = defaultYear++;
    var defaultLoanAmount = loans[0].loan_amount;
    $("[id='loan_amt0'+1]").innerHTML(defaultLoanAmount.toFixed(2));
    // document.getElementById("loan_amt0" + 1).value = defaultLoanAmount.toFixed(2);
    var defaultInterestRate = loans[0].loan_int_rate;
    $("[id='loan_int0'+1]").innerHTML(defaultInterestRate);
    // document.getElementById("loan_int0" + 1).value = defaultInterestRate;
    var loanWithInterest = loans[0].loan_amount * (1 + loans[0].loan_int_rate);
    $("[id='loan_bal0'+1]").innerHTML(toComma(loanWithInterest.toFixed(2)));
    // document.getElementById("loan_bal0" + 1).innerHTML = toComma(loanWithInterest.toFixed(2));
    
    // pre-fill defaults for other loan years
    for(var i=2; i<6; i++) {
      $("[id='loan_year0 + i']").innerHTML(defaultYear++);
      document.getElementById("loan_year0" + i).disabled = true;
      document.getElementById("loan_year0" + i).style.backgroundColor = "gray";
      document.getElementById("loan_year0" + i).style.color = "white";
      document.getElementById("loan_amt0" + i).value = defaultLoanAmount.toFixed(2);
      document.getElementById("loan_int0" + i).value = defaultInterestRate;
      document.getElementById("loan_int0" + i).disabled = true;
      document.getElementById("loan_int0" + i).style.backgroundColor = "gray";
      document.getElementById("loan_int0" + i).style.color = "white";
     loanWithInterest = (loanWithInterest + defaultLoanAmount) * (1 + defaultInterestRate);
     document.getElementById("loan_bal0" + i).innerHTML = toComma(loanWithInterest.toFixed(2));
      } // end: "for" loop
    
    // all input fields: select contents on focus
    $("input[type=text]").focus(function() {
      $(this).select();
      $(this).css("background-color", "yellow");
    }); 
    $("input[type=text]").blur(function() {
      $(this).css("background-color", "white");
    });
    
    // set focus to first year: messes up codepen
    // $("#loan_year01").focus();
    $("#loan_year01").blur( function() {
      updateLoansArray();
    });
    
  } // end: function loadDoc()
  
  
  function toComma(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  function updateLoansArray() {
    loans[0].loan_year = parseInt($("#loan_year01").val());
    for(var i=1; i<5; i++) {
      loans[i].loan_year = loans[0].loan_year + i;
      $("#loan_year0"+ (i+1) ).val(loans[i].loan_year);
    }
  }