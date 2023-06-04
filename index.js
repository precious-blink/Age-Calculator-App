let date = document.getElementById('date')
let month = document.getElementById('month')
let year = document.getElementById('year')
let errordate = document.getElementById('errordate')
let errormonth = document.getElementById('errormonth')
let erroryear = document.getElementById('erroryear')
let error = document.getElementById('error')
let showAge = document.getElementById('showAge')


function submit() {
    
    let date_value = `${month.value.trim()}-${date.value.trim()}-${year.value.trim()}`
    let current_date = new Date()
        let selected_date = new Date(date_value )
        let age = current_date.getFullYear() - selected_date.getFullYear()
        let later_month = current_date - selected_date
        let no_of_days = Math.floor(later_month / (1000 * 60 * 60 *24))
        let later_date = selected_date.getDate() + current_date.getDate()
        
        // let getday = current_date.getDay()
        // console.log(getday);
        if (!date.value.trim() || !month.value.trim() || !year.value.trim() ) {
            error.innerText = 'please enter values'
            error.style.color = 'red'
        }else
        if (date.value > 31 || date.value < 1 ) {
            errordate.innerText = 'Invalid Date'
            errordate.style.color = 'red'
            date.style.border = '1px solid red'
            month.style.border = '1px solid red'
            // console.log('hello');
        }else if (month.value > 12 || month.value < 1) {
            errormonth.innerText = 'Invalid Month'
            errormonth.style.color = 'red'
            month.style.border = '1px solid red'
        }else if (year.value > 2023) {
            erroryear.innerText = 'year must not be above the current year'
            erroryear.style.color = 'red'
            year.style.border = '1px solid red'
        }else
        if (current_date.getMonth() < selected_date.getMonth() || (current_date.getMonth() == selected_date.getMonth() && current_date.getDate() < selected_date.getDate())) {
            showAge.innerHTML = `<div class="ageDiv">
                                    <p class="p"><span id ="span">${age - 1}</span> years old</p>
                                    <p class="p"><span id ="span">You've used ${no_of_days}</span> days on earth</p>
                                    <p class="wish"><span id ="span">Happy Birthday</span> In  Advance</p>
                                    </div>`
                                    // <p> ${later_date} days to your birthday</p>
        }else 
        if(current_date.getMonth() > selected_date.getMonth() || (current_date.getMonth() == selected_date.getMonth() && current_date.getDate() > selected_date.getDate())){
        showAge.innerHTML = `<div class="ageDiv">
                              <p class="p"> <span id="span">${age}</span> years old</p>
                              <p class="p"><span id ="span">You've used ${no_of_days}</span> days on earth</p>
                              <p class="wish"><span id="span">Done</span> your birthday already</p>
                             </div>`
        }
    // console.log(month.value);
    
}