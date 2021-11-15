import { useState, useMemo } from 'react';

function sum(persons) {
    console.log("sum...");
    return persons.map((person) => person.age).reduce((l, r) => l + r, 0);
}

export default function Example7() {
    const [value, setValue] = useState("");

    const [persons] = useState([
        { name: "Make", age: 49 },
        { name: "Jane", age: 29 }
    ])

    // const count = sum(persons);
    const count = useMemo(() => {
        return sum(persons);
    }, [persons]);
    return (
        <div>
            <input value={value} onChange={change}></input>
            <p>{count}</p>
        </div>
    )
    function change(e) {
        setValue(e.target.value);
    }
}