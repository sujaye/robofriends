import React, {Fragment} from 'react';

import './card.styles.css';

const Card = ({id, name, email}) => {
    return (
        <Fragment>
            <div className='card-container'>
                <img alt='Robots' src={`https://robohash.org/${id}?set=set2&200x200`} />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </Fragment>
    );
}

export default Card;