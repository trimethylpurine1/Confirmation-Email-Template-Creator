const coach = document.getElementById('coach');
const school = document.getElementById('school');
const address = document.getElementById('address');

const btn1 = document.getElementById('btn1');
const out1 = document.getElementById('output1');

function getCheckedValue(el) {
    for (var i = 0, length = el.length; i < length; i++){
        if (el[i].checked) {
            return el[i].value;
            break;
        }
    }
}

function 

//let boxHolder =  day.forEach(choice => {console.log(choice); if (choice.checked){ const answer = choice.value; return answer }})

function fun1(){
    let day = getCheckedValue(document.getElementsByName('day'))
    out1.innerHTML = `Hello ${coach.value},

    As we discussed earlier this email is to confirm you will be subbing the 8th and 9th day chess club at ${school.value} from 3:20-4:20pm (arrive by 3:05pm).
    
    There are 11 students in the club.
    
    Here are the school details:
    
    School: ${school.value}
    Address: ${address.value}
    Day: ${day}, 4/11/23 & 4/18/23
    Time: 3:20-4:20pm (arrive by 3:05pm)
    Lesson #8 & 9: Week #8 & 9: Double Attacks / Forks (week 8) & Discovery (week 9)
    You should  still have access to the roster in the 'My Rosters' section of the Chess Emporium Employee website.
    
    Please reply back here to confirm this sub will work for you for ${day}, 4/11/23  & 4/18/23 and let me know if you have any questions.
    
    Thank you again for helping with this one.
    
    Sincerely,
    Mason Carlson, Chess Emporium Liaison Manager.`;
}

btn1.addEventListener('click', fun1);
