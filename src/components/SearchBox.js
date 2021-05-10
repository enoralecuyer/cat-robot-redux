import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba br3'
        type='search'
        placeholder='search for name of a cat'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;