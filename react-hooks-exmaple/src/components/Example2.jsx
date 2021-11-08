import React from "react";
export default function Example2() {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <p>당신이 클릭한 횟수는 {count} 번 입니다. </p>
            <button onClick={click}>Click me</button>
        </div>
    );
    function click() {
        setCount(count + 1);
    };
}