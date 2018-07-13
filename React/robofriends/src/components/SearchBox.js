import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return(
      <div className='pa-2'>
          <input
              className='pa3 ba b--green bg-lightest-blue ma2'
              type='search'
              placeholder='search robots'
              onChange={searchChange}
          />
      </div>
    )
};

export default SearchBox;