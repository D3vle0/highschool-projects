import React from "react";
import PersonContext from '../contexts/PersonContext';
export default function Example11() {
    return (
        <PersonContext.Consumer>
            {(persons) => (
                <ul>
                    {persons.map((person) => {
                        <li>{person.name}</li>
                    })}
                </ul>
            )}
        </PersonContext.Consumer>
    );
}