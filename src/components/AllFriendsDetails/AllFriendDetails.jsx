import React from 'react';
import { useLoaderData } from 'react-router';

const AllFriendDetails = () => {
    const friendDetails=useLoaderData()
    console.log(friendDetails);
    return (
        <div>
            
        </div>
    );
};

export default AllFriendDetails;