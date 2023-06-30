/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const PokeSearch = ({ searchTerm, onSearch }) => (
  <div className="search">
    <input
      type="text"
      placeholder="Find your favorite..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
    />
  </div>
);

PokeSearch.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default PokeSearch;
