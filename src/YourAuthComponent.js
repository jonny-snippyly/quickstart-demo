import { useVeltClient } from "@veltdev/react";
import { useEffect, useState } from "react";
import "./App.css";

export default function YourAuthComponent() {
  let [user, setUser] = useState(null);

  const userService = () => {
    let randomNum = Math.floor(Math.random() * 10);
    return {
      uid: "user" + randomNum,
      displayName: "User: " + randomNum,
      email: "user" + randomNum + "@gmail.com",
      photoURL: "https://i.pravatar.cc/30" + randomNum
    };
  };

  // Fetch user data from user service
  let yourAuthenticatedUser = userService();

  // Get the Velt Client
  const { client } = useVeltClient();

  useEffect(() => {
    const initVelt = async () => {
      if (client && yourAuthenticatedUser) {
        const { uid, displayName, email, photoURL } = yourAuthenticatedUser;

        // Create the Velt user object
        const user = {
          userId: uid,
          name: displayName,
          email: email,
          photoUrl: photoURL
        };
        // Identify the user with the Velt client
        await client.identify(user);
        setUser(user);
      }
    };
    initVelt().catch(console.error);
  }, [client]);

  return <div className="user">User: {user?.userId}</div>;
}
