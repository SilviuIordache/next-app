'use client';
import React from 'react';

const TableNameHeader = () => {
  function handleNameSort() {
    console.log('sort');
  }

  return <th onClick={handleNameSort}>Name</th>;
};

export default TableNameHeader;
