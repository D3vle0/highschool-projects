function try1() {
    let num=100;
    console.log("num", num);
    let num1=3.14;
    console.log("num1", num1)


    // console.log("[try1] before", a);
    const a = "cocoa";
    if (true) {
        const a = "leaf";
        console.log("[if] before", a);
        console.log("[if] after", a);
    }
    console.log("[try1] after", a);
}

try1();