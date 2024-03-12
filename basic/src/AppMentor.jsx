import React, { useState } from 'react';

export default function AppMentor() {
    const [person, setPerson] = useState({
        name: "Noh",
        title: "Developer",
        mentor: {
            name: "Sion",
            title: "Developer"
        },
    });
    return (
        <div>
            <h1>{person.name}는 {person.title}</h1>
            <p>{person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})</p>
            <button onClick={()=> {
                const name = prompt(`what's your mentor's name?`);
                let copy = {...person};
                copy.mentor.name = name;
                setPerson(copy);
            }}>멘토 이름 바꾸기</button>
            <button onClick={()=> {
                const title = prompt(`what's your mentor's title?`);
                setPerson((person)=>({
                    ...person, 
                    mentor: {...person.mentor, title}
                }));
            }}>멘토 타이틀 바꾸기</button>
        </div>
    );
}