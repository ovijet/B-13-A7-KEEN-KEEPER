import { useEffect, useState } from "react";
import AllFriendsDetails from "./AllFriends";
import HomeCard from "../../Page/HomeCard";
import AllFriends from "./AllFriends";

const AllFriend = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  // ✅ Loading
  if (data.length === 0) {
    return <span className="loading loading-spinner loading-md mx-auto"></span>;
  }

  return (
    <div>
      <HomeCard data={data}></HomeCard>
      <h2 className="container mx-auto text-2xl mt-4">Your Friends</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 container mx-auto">
        {data.map((friends) => (
          <AllFriends key={friends.id} friends={friends} />
        ))}
      </div>
    </div>
  );
};

export default AllFriend;
