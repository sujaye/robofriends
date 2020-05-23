import React from 'react';
import Card from '../card/card.component';

import './card-list.styles.css';

const CardList = ({robots}) => {

    const CardArray = robots.map((user) => {
        return (
            <Card
                key={user.id}
                id={user.id} 
                name={user.name} 
                email={user.email}
            />
        );
    })
    return (
        <div className='card-list'>
            {CardArray}
        </div>
    );
}

export default CardList;