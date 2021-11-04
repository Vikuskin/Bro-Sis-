import { useContext } from "react";
import { Context } from "../Functions/context";

export const LastMessage = () => {
  const { 
    authGoogle,
    authGit,
    authFB,
    database,
    lastMessageBro,
    lastMessageSis
  } = useContext(Context);
  console.log(lastMessageBro);

  return (
    <p>Last message:</p>
    
  )
}