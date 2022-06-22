const quotes = [
    {
        quote: "자신감은 위대한 과업의 첫째 요건이다.",
        author: "Samuel Johnson"
    },
    {
        quote: "너무 멀리 갈 위험을 감수하는 자만이 얼마나 멀리 갈 수 있는 지 알 수 있다",
        author: "T. S. Eliot"
    },
    {
        quote: "길을 떠나기 전, 여행자는 여행에서 달성할 목적과 동기를 가지고 있어야 한다.",
        author: "George Santayana"
    },
    {
        quote: "작은 변화가 일어날 때 진정한 삶을 살게 된다.",
        author:"Leo Tolstoy"
    },
    {
        quote: "성공이란 열정을 잃지 않고 실패를 거듭할 수 있는 능력이다.",
        author: "Sir Winston Churchill"
    },
    {
        quote:"기회는 자기소개서를 보내지 않는다.",
        author:"Unknown"
    },
    {
        quote:"나는 법을 가르칠 수 없는 자에게는 더 빨리 추락하는 법을 가르쳐라!",
        author:"Friderich Nietzsche"
    },
    {
        quote:"우리가 노력 없이 얻는 거의 유일한 것은 노년이다.",
        author:"Gloria Pitzer"
    },
    {
        quote:"삶이 있는 한 희망은 있다.",
        author:"Cicero"
    },
    {
        quote:"가장 위대한 영광은 한 번도 실패하지 않음이 아니라 실패할 때마다 다시 일어서는 데에 있다",
        author:"공자"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const toDaysQuote = quotes[Math.floor(Math.random() * quotes.length)];




console.log(quotes[toDaysQuote]);
// console.log(toDaysQuote.quote);

quote.innerText = toDaysQuote.quote;
author.innerText = toDaysQuote.author;