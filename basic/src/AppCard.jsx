import React from 'react';

export default function AppCard() {
    return (
        <div>
            <Card>
                <h1>Card1</h1>
            </Card>

            <Card>
                <h1>Card2</h1>
                <p>설명</p>
            </Card>

            <Card>
                <article>
                    
                </article>
            </Card>
        </div>
    );
}

function Card({children}) {
    return(
        <div
            style={{
                backgroundColor: 'black',
                borderRadius: '20px',
                color: 'white',
                minHeight: '200px',
                maxWidth: '200px',
                margin: '1rem',
                padding: '1rem',
                textAlign: 'center'
            }}
        >
            {children}
        </div>
    )
}