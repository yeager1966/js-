"use strick"; // говорим что используем новый формат кода (строгий режим) 

const category = 'toys';
/* console.log('https://someurl.com/'+category+'/'); */ // Это было раньше сейчас это мало где используют
console.log(`https://somelink.ru/${category}/5`); // сейчас юзают это , для этого нужны коссые ковычки


const username = 'Ivan';
alert(`Привет,${username}`);

console.log(4 + 5);

let incr = 10,
    decr = 10;

incr++; // инкримент , постфиксная форма
decr--; // дикримент , постфиксная форма

console.log(incr);
console.log(decr);

let incrim = 10,
    decrim = 10;


console.log(++incrim); // инкримент , префиксная форма
console.log(--decrim); // дикримент , префиксная форма

/* && и возвращает нам тру если оба тру , если одни из них тру а другой фолс , то будет фолс
||  или  если один из них будт тру то и весь процесс будет тру  */
 
const isChecked = true,
isClose = false;


console.log(isChecked || isClose);

// ! - оператор отрицание , фолс меняет на тру , тру на фолс , !isClose
// != не равен 

console.log(2+2*2 !=8); // то есть 6 не равен 8 

console.log(2+2*2 !=='6'); // тут числовой тип даннных не равен строчному типу данных