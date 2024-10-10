var yearInputElem = document.getElementById("year-input");
var monthInputElem = document.getElementById("month-input");
var dayInputElem = document.getElementById("day-input");
var yearError = document.getElementById("year-error-message")
var monthError = document.getElementById("month-error-message")
var dayError = document.getElementById("day-error-message")
var yearLabel = document.getElementById("year-label");
var monthLabel = document.getElementById("month-label");
var dayLabel = document.getElementById("day-label");
var yearOutputElem = document.getElementById("output-years")
var monthOutputElem = document.getElementById("output-months")
var dayOutputElem = document.getElementById("output-days")

function Calculate(){
    let errors = 0;

    const d = new Date();
    let current_year = d.getFullYear();
    let current_month = d.getMonth() + 1;
    let current_day = d.getDate();

    if(yearInputElem.value == "") {
        yearError.innerHTML = "This field is required";
        yearLabel.style.color = "var(--light-red)";
        yearInputElem.style.border = "1px solid var(--light-red)";
        errors++;
    }
    else if(yearInputElem.value <= 1900) {
        yearError.innerHTML = "Must be greater than 1900";
        yearLabel.style.color = "var(--light-red)";
        yearInputElem.style.border = "1px solid var(--light-red)";
        errors++;
    }
    else if(yearInputElem.value > current_year) {
        yearError.innerHTML = "Must be in the past";
        yearLabel.style.color = "var(--light-red)";
        yearInputElem.style.border = "1px solid var(--light-red)";
        errors++;
    }
    else {
        yearError.innerHTML = " ";
        yearLabel.style.color = "var(--smokeygrey)";
        yearInputElem.style.border = "1px solid var(--lightgrey)";
    }

    if(monthInputElem.value == "") {
        monthError.innerHTML = "This field is required";
        monthLabel.style.color = "var(--light-red)";
        monthInputElem.style.border = "1px solid var(--light-red)";
        errors++;
    }
    else if(monthInputElem.value > 12 || monthInputElem.value <= 0) {
        monthError.innerHTML = "Must be a valid month";
        monthLabel.style.color = "var(--light-red)";
        monthInputElem.style.border = "1px solid var(--light-red)";
        errors++;
    }
    else if(monthInputElem.value > current_month && yearInputElem.value >= current_year) {
        monthError.innerHTML = "Must be in the past";
        monthLabel.style.color = "var(--light-red)";
        monthInputElem.style.border = "1px solid var(--light-red)";
        errors++;
    }
    else {
        monthError.innerHTML = " ";
        monthLabel.style.color = "var(--smokeygrey)";
        monthInputElem.style.border = "1px solid var(--lightgrey)";
    }

    if(dayInputElem.value == "") {
        dayError.innerHTML = "This field is required";
        dayLabel.style.color = "var(--light-red)";
        dayInputElem.style.border = "1px solid var(--light-red)";
        errors++;
    }
    else if(dayInputElem.value > 31 || dayInputElem.value <= 0) {
        dayError.innerHTML = "Must be a valid day";
        dayLabel.style.color = "var(--light-red)";
        dayInputElem.style.border = "1px solid var(--light-red)";
        errors++;
    }
    else if(monthInputElem.value > current_month && yearInputElem.value >= current_year) {
        dayError.innerHTML = "Must be in the past";
        dayLabel.style.color = "var(--light-red)";
        dayInputElem.style.border = "1px solid var(--light-red)";
        errors++;
    }
    else {
        dayError.innerHTML = " ";
        dayLabel.style.color = "var(--smokeygrey)";
        dayInputElem.style.border = "1px solid var(--lightgrey)";
    }

    if(errors == 0){
        let total_years = current_year - yearInputElem.value;
        let total_months = current_month - monthInputElem.value;
        if(Math.sign(total_months) == -1) {
            total_years = total_years - 1;
            let month_diff = monthInputElem.value - current_month;
            total_months = 12 - month_diff;
        }

        let total_days = current_day - dayInputElem.value;
        if(Math.sign(total_days) == -1) {
            total_months = total_months - 1;
            let day_diff = dayInputElem.value - current_day;

            //TO GET HOW MANY DAYS IN CORRESPONDING MONTH
            let previous_month_days = 0;
            switch(monthInputElem.value) {
                case '1':
                    previous_month_days = 31;
                break;
                case '2':
                    previous_month_days = 31;
                break;
                case '3':
                    previous_month_days = 28;
                break;
                case '4':
                    previous_month_days = 31;
                break;
                case '5':
                    previous_month_days = 30;
                break;
                case '6':
                    previous_month_days = 31;
                break;
                case '7':
                    previous_month_days = 30;
                break;
                case '8':
                    previous_month_days = 31;
                break;
                case '9':
                    previous_month_days = 31;
                break;
                case '10':
                    previous_month_days = 30;
                break;
                case '11':
                    previous_month_days = 31;
                break;
                case '12':
                    previous_month_days = 30;
                break;
            }

            total_days = previous_month_days - day_diff;
        }

        numberIncrease(0, total_years, "output-years", 50);
        numberIncrease(0, total_months, "output-months", 100);
        numberIncrease(0, total_days, "output-days", 50);
    }
    else{
        yearOutputElem.innerHTML = "--";
        monthOutputElem.innerHTML = "--";
        dayOutputElem.innerHTML = "--";
    }
}

function numberIncrease(startNumber, endNumber, element, speed) {
    if (startNumber <= endNumber) {
        document.getElementById(element).innerHTML = startNumber;
        setTimeout(function() {
            numberIncrease(startNumber + 1, endNumber, element, speed)
        }, speed) 
    } else {
        element.dataset.animationRunning = false
    }
}