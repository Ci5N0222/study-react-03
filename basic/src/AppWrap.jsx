import React from 'react';

/**
 * High order Component
 */

export default function AppWrap() {
    return (
        <div>
            <Navbar>
                <Avatar 
                    image="/image/profile.jpg"
                    name="SionNoh"
                    size={100}
                />
                <p>안녕하세요</p>
            </Navbar>
        </div>
    );
}

function Navbar({children}) {
    return(
        <header style={{ backgroundColor: 'yellow'}}>{children}</header>
    );
}

function Avatar({image, name, size}) {
    return(
        <div>
            <img 
                src={image}
                alt={name}
                width={size}
                height={size}
                style={{borderRadius: '50%'}}
            />
        </div>
    )
}