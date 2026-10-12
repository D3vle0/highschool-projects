let sayHello = (v) => {
	document.write("Hello" + v)
	return "ok"
}
alert(sayHello("배상혁"))

const superman = {
	name: "배상혁",
	age: 18
}

superman.name2 = "devleo";
if ("name3" in superman)
	alert(superman.name3);
else
	alert("no")
alert(Object.keys(superman).length);
// for (let key in superman)
// alert()