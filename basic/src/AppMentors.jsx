import React, { useState } from 'react';

export default function AppMentors() {
    const [person, setPerson] = useState({
        name: "Noh",
        title: "Developer",
        mentors: [
            {
                name: "Syon",
                title: "Dev"
            },
            {
                name: "Sion",
                title: "Dev"
            }
        ]
    })
    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <p>{person.name}의 멘토:</p>
            <ul>
                {
                    person.mentors.map((item, i)=>{
                        return(
                            <li key={i}>
                                {item.name} ({item.title})
                            </li>
                        )
                    })
                }
            </ul>
            <button onClick={()=>{
                const prev = prompt(`누구의 이름을 바꾸고 싶은 가요?`);
                const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
                // setPerson(person=>({...person, mentors: person.mentors.map((mentor)=>{
                //     if(mentor.name === prev) {
                //         return {...mentor, name: current}
                //     }
                //     return mentor;
                // })}));
                let copy = {...person}
                copy.mentors.map((item)=>{
                    if(item.name === prev){
                        item.name = current;
                    }
                })
                setPerson(copy);

            }}>멘토의 이름 바꾸기</button>
        </div>
    );
}