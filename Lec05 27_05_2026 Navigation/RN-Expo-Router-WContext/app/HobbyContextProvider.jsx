import { useState } from "react";
import { createContext } from "react";

import uuid from 'react-native-uuid';

export const HobbyContext = createContext();

export default function HobbyContextProvider(props) {
  const [hobbies, setHobbies] = useState([{ id: '1', name: 'Flight', times: 2 }]);

  const AddHobby = (name, times) => {
    let newHobbies = [...hobbies, { id: uuid.v4(), name, times }];
    setHobbies(newHobbies);
  }

  const RemoveHobby = (id) => {
    let newHobbies = hobbies.filter(hob => hob.id !== id);
    setHobbies(newHobbies);
  }

  return (
    <HobbyContext.Provider value={{hobbies, AddHobby, RemoveHobby}}>
      {props.children}
    </HobbyContext.Provider>
  )
}