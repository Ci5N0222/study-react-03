import React, { useReducer } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppReducer() {
    const [person, dispatch] = useReducer(personReducer, initialPerson);

    const handleUpdate = ()=>{
        const prev = prompt(`누구의 이름을 바꾸고 싶은 가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
        dispatch({type:'updated', prev, current});
    }

    const handleAdd = ()=>{
        const name = prompt(`추가할 멘토의 이름을 입력해주세요.`);
        const title = prompt(`추가할 멘토의 타이틀을 입력해주세요.`);
        dispatch({type:'added', name, title});
    }

    const handleDelelte = ()=>{
        const name = prompt(`삭제할 이름을 입력해주세요.`);
        dispatch({type:'delete', name});
    }

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
            <button onClick={handleUpdate}>멘토의 이름 바꾸기</button>

            <button onClick={handleAdd}>멘토 추가하기</button>

            <button onClick={handleDelelte}>멘토 삭제하기</button>
        </div>
    );
}

const initialPerson = {
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
}