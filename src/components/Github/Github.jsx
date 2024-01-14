// import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/kunal021")
  //       .then((res) => res.json())
  //       .then((d) => setData(d));
  //   }, []);
  return (
    <>
      <div className="text-center bg-gray-600 text-white text-3xl m-4 p-4">
        Github Followers: {data.followers}
      </div>
      <img src={data.avatar_url} alt="image" height="300" width="300" />
    </>
  );
}

export default Github;

export const GithubInfo = async () => {
  const res = await fetch("https://api.github.com/users/kunal021");
  return res.json();
};
