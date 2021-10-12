function call_err(v1, v2){
    let msg="hello";
    if (v1)
        msg+=`, ${v1}님. 에러가 났습니다. (코드라인: ${v2})`;
    document.write(msg)
}

call_err("관리자", "40");

let a='3';
alert(a==3);
alert(a===3);
alert(a===String(3))

var i=0

document.write("<table boarder='1'>")
while (i<20){
    document.write("<tr><td>");
    document.write(i);
    document.write("</td></tr>");
    i++;
}
document.write("</table>");

// var j=0
// while(true){
//     console.log(i)
//     if (i>1000)
//         break
//     i++
// }

for (var i=0;i<20;i++)
    if (i%2)
        continue
    console.log(i)