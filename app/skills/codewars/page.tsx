"use client";

import Loader from '@/components/design/Loader';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { codewars } from '@/public';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { FaArrowRightToBracket, FaLocationArrow } from 'react-icons/fa6';

const Codewars = () => {
  const [user, setUser] = useState();
  const [challenges, setChallenges] = useState<any>();
  const [totItems, setTotalItems] = useState();


  useEffect(() => {
    const getUser = async () => {
      const user = await fetch("https://www.codewars.com/api/v1/users/egger0a6");
      setUser(await user.json());
    }
    getUser();

    // const getChallenges = async () => {
    //   const challenges = await fetch("https://www.codewars.com/api/v1/users/egger0a6/code-challenges/completed");
    //   const response = await challenges.json();
    //   setTotalItems(response.totalItems)
    //   setChallenges(response.data);
    // }
    // getChallenges();
  }, []);

  console.log(user)
  // console.log(challenges)

  // if (challenges) {
  //   const getChallengeDetails = async (id: string) => {
  //     console.log(id)
  //     const details = await fetch(`https://www.codewars.com/api/v1/code-challenges/${id}`)
  //     return await details.json();
  //   }

  //   challenges.forEach(async (challenge) => {
  //     const details = await getChallengeDetails(challenge.id);
  //     challenge["details"] = details;
  //   });

  //   console.log(challenges)
  // }


  // if (!user || !challenges) return <Loader />;

  return (
    <div className='py-32 xl:py-40 -mt-[5.25rem]'>
      <div className='container'>
        <div className='flex gap-4 mb-10'>
          <Image
            src={codewars}
            alt='codewars logo'
            width={48}
            height={48}
          />
          <h2 className='h2 font-code'>
            Codewars Profile
          </h2>
        </div>

        <BackgroundGradient className='bg-dark-6 rounded-md p-8'>
          <div className='flex gap-6'>
            <a href="https://www.codewars.com/users/egger0a6" target="_blank">
              <p className='flex items-center gap-2 hover:text-red-3'>
                {user?.username}
                <FaLocationArrow />
              </p>
            </a>
            <p>
              {user?.codeChallenges?.totalCompleted} Challenges Completed
            </p>
          </div>
        </BackgroundGradient>
      </div>
    </div>
  )
}

export default Codewars;