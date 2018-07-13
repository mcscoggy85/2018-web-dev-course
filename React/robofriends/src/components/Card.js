import React from 'react';

const Card = ({id, name, email}) => {
    // const {name, email, id} = props;
    return (
        <div className='tc bg-light-green grow dib br3 pa3 ma2 bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
};

export default Card;