export default function personReducer(person, action) {
    switch (action.type) {
        case 'updated': {
            const { prev, current } = action;
            return {
                ...person,
                mentors: person.mentors.map((person)=>{
                    if(person.name === prev) {
                        return { ...person, name:current };
                    }
                    return person;
                })
            }
        }
        case 'added': {
            const { name, title } = action;
            return {
                ...person,
                mentors: [...person.mentors, {name, title}]
            }
        }
        case 'deleted': {
            return {
                ...person,
                mentors: person.mentors.filter((mentor) => mentor.name !== action.name)
            }
        }
        default: {
            throw Error(`알수없는 액션 타입 ${action.type}`)
        }
    }
}