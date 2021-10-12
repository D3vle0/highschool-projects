function isAge(user) {
    if (user.age < 20)
        return true
    else
        return false
}

const Mike = {
    name: "Mike",
    age: 30,
    alias: "mycol",
    sample: function (age) {
        if (age > 20)
            return true
        else
            return false
    }
    // sayHello
};
// let sayHello = () => {
//     document.write(`hello i'm ${this.name}`);
// }
const Jane = {
    name: "Jane",
    age: 20
};

document.write(isAge(Mike))
document.write(isAge(Jane))

for (let aa in Mike) {
    document.write(`<br>${aa}:${Mike[aa]}`)
}

document.write(Mike.sample(21))

const gangwon={
    resort:["용평", "평창", "강촌", "강릉", "홍천"],
    print: function(delay=1000){
        setTimeout(function(){
            document.getElementById("test").innerHTML = gangwon.resort
        }, delay);
    }
}
gangwon.print()