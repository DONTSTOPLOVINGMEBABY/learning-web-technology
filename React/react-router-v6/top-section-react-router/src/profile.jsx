import { useParams } from "react-router-dom";
import DefaultProfile from "./defaultProfile";
import Spinach from "./Spinach";
import Popeye from "./Popeye";
import { useEffect } from "react";

const Profile = () => {
  const { name } = useParams();

  useEffect( () => {
    console.log('i am working here? ')
  }, [])

  console.log(name)
  console.log('hi')

  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      {name === "popeye" ? (
        <Popeye />
      ) : name === "spinach" ? (
        <Spinach />
      ) : (
        <DefaultProfile />
      )}
    </div>
  );
};

export default Profile;