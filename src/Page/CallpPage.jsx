import React from 'react';

const CallpPage = ({ item }) => {
  return (
    <div>
      <h1>call page</h1>
       <h1>{item.name}</h1>
      <h1>{item.email}</h1>
    </div>
  );
};

export default CallpPage;