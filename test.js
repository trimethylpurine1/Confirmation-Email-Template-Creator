const coach = document.getElementById('coach');
const school = document.getElementById('school');
const address = document.getElementById('address');
const offDays = document.getElementById('offDays');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2')
const out1 = document.getElementById('output1');
const weeksOff = document.getElementById('weeksOff');
const subMonth = document.getElementById('subMonth');
const subDay = document.getElementById('subDay');
const subYear = document.getElementById('subYear');
const startHour = document.getElementById('startHour');
const startMinute = document.getElementById('startMinute');
const endHour = document.getElementById('endHour');
const endMinute = document.getElementById('endMinute');
const startAmPm = document.getElementById('startAmPm');
const endAmPm = document.getElementById('endAmPm');
const numberOfStudents = document.getElementById('students')
const array = []
const arrayMonth = [];
const arrayDay = [];


function createAnOffDay(){
        for (let i=0; i < weeksOff.value; i++){
            const select = document.createElement('select');
            const divider = document.createElement('div');
            const para = document.createElement('p');
            const weekOff = document.createTextNode(`Day off Number ${i + 1}`)
            para.appendChild(weekOff);
            divider.appendChild(para)
            divider.setAttribute('id', `weekOff${i}`);
            offDays.appendChild(divider);
            select.setAttribute('id', `offMonth${i}`);
            select.setAttribute('name', `offMonth${i}`);
            divider.appendChild(select);
                for (let i=0; i < 12; i++){
                    const optionMonth = document.createElement('option');
                    const monthNum = document.createTextNode(i);
                    optionMonth.setAttribute('value', i);
                    optionMonth.appendChild(monthNum);
                    select.appendChild(optionMonth);
                }
            const select2 = document.createElement('select')
            select2.setAttribute('id', `offDay${i}`)
            select2.setAttribute('name', `offDay${i}`)
            divider.appendChild(select2)
                for (let i=1; i < 32; i++){
                    const optionDay = document.createElement('option');
                    const dayNum = document.createTextNode(i);
                    optionDay.setAttribute('value', i)
                    optionDay.appendChild(dayNum)
                    select2.appendChild(optionDay)
                }    
    }
}

const monthOffObject = {};
const dayOffObject = {};


//monthArray.push(monthOffObject['counter' + 1].value)
function takeWeekOffInfo(){

    for(let i=0; i < weeksOff.value; i++){
        monthOffObject['counter' + i] = document.getElementById(`offMonth${i}`);
        dayOffObject['counter' + i] = document.getElementById(`offDay${i}`);    
    }
}


function assignWeekOffinfo(){

    for(let i=0; i < weeksOff.value; i++){
       /* let key = `counter${i}`
        monthArray.push(monthOffObject.key)
        dayArray.push(dayOffObject.key) */
        arrayMonth.push(window['offDay' + i] = dayOffObject['counter' + i].value)
        arrayDay.push(window['offmonth' + i] = monthOffObject['counter' + i].value)

    }
}


function testIfOffDateHappened(){

    let weekOffArray = []
    for(let i=0; i < weeksOff.value; i++){
        if( arrayMonth[i]  < subMonth.value + 1){
            weekOffArray.push('1')
        } else if (arrayMonth[i]  < subMonth.value + 1){
            if (arrayDay < subDay.value){
                weekOffArray.push('1')
            }
        }
    } 
    const offDaysThusFar = weekOffArray.length
    return offDaysThusFar
}

function getNumberOfWeeks(num1, num2){
    return num1 - num2
}

function createDuplicateDates(){
    
    for (i = 0; i < weeksOff.value; i++){
        array[i] = document.createElement('select')
        console.log('space')
    }
}

function getCheckedValue(el) {
    for (var i = 0, length = el.length; i < length; i++){
        if (el[i].checked) {
            return el[i].value;
            break;
        }
    }
}

function subtractClockByfifteen(){
    const subtractFifteen = startMinute.value - 15;
    if (startMinute.value < 15){
        const answer = subtractFifteen + 60;
        if (startHour.value == 1){
            return `12:${answer}`
        }
        const hourReduced = startHour.value - 1;
        return `${hourReduced}:${answer}`
    }else if (startMinute.value == 15){
        return `${startHour.value}:00`
    }
    else {

        return `${startHour.value}:${subtractFifteen}`
    }
}

function getDateDifference(){
    const startMonth = document.getElementById('startMonth');
    const startDay = document.getElementById('startDay');
    const startYear = document.getElementById('startYear');
    const startDate = moment([startYear.value, startMonth.value, startDay.value])
    const subDate = moment([subYear.value, subMonth.value, subDay.value])

    return subDate.diff(startDate, 'weeks') + 1;
}

function createLesson(){
    const dateDiff = getNumberOfWeeks(getDateDifference(), testIfOffDateHappened());
    const arrayKey = dateDiff - 1;
    const lessonArray = [
        'Lesson 1: Piece Name/Value/Movement',
        'Lesson 2: Check/Mate/Touch Move/Castling',
        'Lesson 3: Pawn Promotion/Notation',
        'Lesson 4: General Opening Theory',
        'Lesson 5: Steamroller Mate (King/Rook Queen VS King)',
        'Lesson 6: Active Moves: (Cheack, Capture, Threats)',
        'Lesson 7: Pins/Notation',
        'Lesson 8: Double Attacks/Forks',
        'Lesson 9: Discovery',
        'Novice Lesson 1: K + Q Mate',
        'Novice Lesson 2: Threats Piece Threats/Mate Threats',
        'Novice Lesson 3: Trades',
        'Intermediate Lesson 1: Remove the Defender',
        'Intermediate Lesson 2: Back-Rank Mate',
        'Intermediate Lesson 3: Decoys',
        'Intermediate Lesson 4: Using Rooks'
    ]
    return lessonArray[arrayKey]
}

function placeinator(number){
    if (number == 1){
        return '1st'
    } else if (number == 2){
        return '2nd'
    } else if (number == 3){
        return '3rd'
    } else {
        return number + 'th'
    }
}

function reapearer() {
    //need to simply create a function that makes second button appear and first one disapear
    const x = document.getElementById('btn2');
    x.style.display = 'block';
    btn1.style.display = 'none';
}
//let boxHolder =  day.forEach(choice => {console.log(choice); if (choice.checked){ const answer = choice.value; return answer }})

function emailCreator(){
    let day = getCheckedValue(document.getElementsByName('day'))
    out1.innerHTML = `Hello ${coach.value},

    As we discussed earlier this email is to confirm you will be subbing the ${placeinator(getNumberOfWeeks(getDateDifference(), testIfOffDateHappened()))} day chess club at ${school.value} from ${startHour.value}:${startMinute.value} ${startAmPm.value}-${endHour.value}:${endMinute.value} ${endAmPm.value} (arrive by ${subtractClockByfifteen()}).
    
    There are ${numberOfStudents.value} students in the club.
    
    Here are the school details:
    
    School: ${school.value}
    Address: ${address.value}
    Day: ${day.value}, 4/11/23 & 4/18/23
    Time: 3:20-4:20pm (arrive by 3:05pm)
    Lesson #8 & 9: Week #8 & 9: Double Attacks / Forks (week 8) & Discovery (week 9)
    You should  still have access to the roster in the 'My Rosters' section of the Chess Emporium Employee website.
    
    Please reply back here to confirm this sub will work for you for Tuesdays, 4/11/23  & 4/18/23 and let me know if you have any questions.
    
    Thank you again for helping with this one.
    
    Sincerely,
    Mason Carlson, Chess Emporium Liaison Manager.`;
}

function combinor() {
    createLesson();
    subtractClockByfifteen();
    reapearer();
    createDuplicateDates();
    createAnOffDay(weeksOff.value);
    
}

function combinor2(){
    takeWeekOffInfo();
    assignWeekOffinfo();
    testIfOffDateHappened();
    getNumberOfWeeks();
    emailCreator();
}

btn1.addEventListener('click', combinor);
btn2.addEventListener('click', combinor2);