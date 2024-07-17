"use client";

import React, { useEffect, useState } from 'react'

const Codewars = () => {
  const [user, setUser] = useState();
  const [challenges, setChallenges] = useState();
  

  useEffect(() => {
    const getUser = async () => {
      const user = await fetch("https://www.codewars.com/api/v1/users/egger0a6");
      setUser(await user.json());
    }
    getUser();
  }, []);

  console.log(user)

  if (!user) return 
  
  return (
    <div>{user?.id}</div>
  )
}

export default Codewars;