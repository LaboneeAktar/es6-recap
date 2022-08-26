// ১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।

const pie = 3.1416 // we can not changeable this value
let digit = 45;
digit = 50; // if we need we can change value


// ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 

const myText = `I am a student
I want to learn web development`;
// console.log(`Something About Me: ${myText}`);

// Another
const a = 45;
const b = 22;
const add = `THis additon Result of ${a} and ${b} is : ${a + b}`;
// console.log(add);

// from object
const student = {
    name: 'Rita Mita',
    id: 30,
    class: 10,
}
//show output system -1
// console.log(`Name of the student is: ${student.name}, And Id Number is: ${student.id}, She read in class ${student.class}`);

//show output system -2
const aboutStudent = `Name of the student is: ${student.name}, And Id Number is: ${student.id}, She read in class ${student.class}`;
// console.log(aboutStudent);


// ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 

const dividedByFives = number => number / 5;
const result = dividedByFives(20);
// console.log(result);


//৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 

const addAndSum = (first, second) => (first + 2) * (second + 2);
const answer = addAndSum(6, 9);
// console.log(answer);


// ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। 

const multiply = (first, second, third) => first * second * third;
const showResult = multiply(4, 5, 2);
// console.log(showResult);


// ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 

const addAndMultiply = (a, b) => {
    const add1 = a + 2;
    const add2 = b + 2;
    const multiplyResult = add1 * add2;
    return multiplyResult;
}
// console.log(addAndMultiply(3, 4));


//৪. javascript function declaration vs arrow function and difference among var , let, cost


// ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।

// solve in details
const numbers = [4, 5, 6, 7];
const multiplyArray = numbers.map(n => n * 5);
// console.log(multiplyArray);

// solve in one line
const fiveTimes = [8, 5, 9, 10, 3].map(x => x * 5);
// console.log(fiveTimes);


//৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো

const arrays = [22, 33, 44, 555, 654, 78, 34, 657, 3567, 889, 335, 77, 55, 6, 454, 66];
const findOddNumber = arrays.filter(number => number % 2 !== 0);
// console.log(findOddNumber);



//৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 

const dress = [
    { hijab: 3, price: 3000 },
    { borkha: 1, price: 2000 },
    { shoe: 1, price: 5000 },
    { tops: 2, price: 5500 },
    { shal: 1, price: 1000 },
]
const find = dress.find(x => x.price == 5000);
// console.log(find);

// ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 

//৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 

const outFit = {
    name: 'dress',
    hijab: 3,
    borkha: 21,
    shoe: 31,
    tops: 42,
    shal: 31,
}
const { name, shal, tops } = outFit;
// console.log(`Name of Outfit: ${name}, Number of shal: ${shal}, Number of tops:${tops}`);



//৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 

const destructuring = [3, 4, 5, 6777, 88, 944];
const [one, two, three] = destructuring;
// console.log(three);

// another way
const moreNumber = [55, 3, 32, 6, 7, 5];
const [, , three1] = moreNumber;
// console.log(three1);


//১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 
function addNumber(a, b, c = 7) {
    const additon = a + b + c;
    return additon;
}
// console.log(addNumber(40, 15));



// ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )

const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: [
            { lat: "-37.3159" },
            { lng: "81.1496" }
        ]
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
}

// ১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো। 
console.log(user.address.goe?.lat);