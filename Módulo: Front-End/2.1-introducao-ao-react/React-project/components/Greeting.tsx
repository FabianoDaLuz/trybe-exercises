import React from 'react';
//type GreetingProps = {
//    person: {
//        firstName: string;
//        lastName: string;
//    };
//};

function Greeting() {

    const firstName = 'Fabiano';
    const lastName = 'Escotto';

    return <h1 className="greeting" > Olá {`${firstName} ${lastName}`} </h1>
}

export default Greeting;