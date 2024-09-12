"use client";

import Loader from '@/components/design/Loader';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { languages } from '@/constants';
import { useGetCodewarsData } from '@/hooks/useGetCodewarsData';
import { codewars } from '@/public';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { FaLocationArrow } from 'react-icons/fa6';

const Codewars = () => {
  const { user, challenges, isUserLoading, isChallengesLoading } = useGetCodewarsData();

  console.log(challenges)

  if (!user || !challenges || isUserLoading || isChallengesLoading) return <Loader />;

  const data = [];
  // challenges.challenges.forEach(challenge)

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
          <div className='flex sm:flex-row flex-col justify-around text-lg flex-wrap gap-6 items-center'>
            <a href="https://www.codewars.com/users/egger0a6" target="_blank" className='mr-4'>
              <div className='flex items-center gap-2 hover:text-red-3'>
                {user?.username}
                <FaLocationArrow />
              </div>
            </a>
            <p>
              Rank:&nbsp; <span className={`text-${user?.rankColor}-500`}>{user?.rank}</span>
            </p>
            <p>
              Challenges Completed:&nbsp; <span className='text-red-2'>{user?.totalChallenges}</span>
            </p>
            <p>
              Honor:&nbsp; <span className='text-red-2'>{user?.honor}</span>
            </p>
            <p>
              Leaderboard:&nbsp; <span className='text-red-2'>{user?.leaderboard}</span>
            </p>
            <div className='flex items-center gap-2'>
              <p>Skills:</p>
              <div>
                {user?.skills.map((skill: string, idx: number) => (
                  <div
                    key={idx}
                    className="border bg-dark-6 border-light-2/50 rounded-full flex items-center justify-center lg:w-10 lg:h-10 w-8 h-8"
                    style={{ transform: `translateX(-${3 * idx * 2}px)` }}
                  >
                    <Image
                      src={languages[skill]}
                      width={128}
                      height={128}
                      alt="tech icon"
                      className="p-2"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </BackgroundGradient>

        
      </div>
    </div>
  )
}

export default Codewars;