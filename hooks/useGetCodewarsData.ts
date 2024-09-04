import { useEffect, useState } from "react"

interface UserTypes {
  username: string;
  rank: string;
  rankColor: string;
  totalChallenges: number;
  honor: number;
  leaderboard: number;
  skills: string[];
}

interface RankTypes {
  rank: string;
  color: string;
}

interface ChallengeDataTypes {
  url: string;
  category: string;
  description: string;
  rank: RankTypes;
}

interface ChallengeTypes {
  id: string;
  name: string;
  completedLanguages: string[];
  data: ChallengeDataTypes;
}

interface ChallengesTypes {
  totalPages: number;
  totalItems: number;
  challenges: ChallengeTypes[];
}

export const useGetCodewarsData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserTypes>();
  const [challenges, setChallenges] = useState();

  useEffect(() => {
    const getUser = async () => {
      const resp = await fetch("https://www.codewars.com/api/v1/users/egger0a6");
      const userData = await resp.json();

      const user = {
        username: userData.username,
        rank: userData.ranks.overall.name,
        rankColor: userData.ranks.overall.color,
        totalChallenges: userData.codeChallenges.totalCompleted,
        honor: userData.honor,
        leaderboard: userData.leaderboardPosition,
        skills: Object.keys(userData.ranks.languages),
      }

      setUser(user);
    }
    getUser();

    const getChallenges = async () => {
      const resp = await fetch("https://www.codewars.com/api/v1/users/egger0a6/code-challenges/completed");
      const challengesData = await resp.json();
      const challengeData = {
        totalPages: challengesData.totalPages,
        totalItems: challengesData.totalItems,
        challenges: [],
      };

      // challengesData.forEach((challenge: any) => {
      //   const newChallenge = {
      //     id: challenge.id,
      //     name: challenge.name,
      //     completedLanguages: challenge.completedLanguages,
      //     data: {},
      //   }
      //   challengeData.challenges.push(newChallenge);
      // });
    }
  }, []);

  if (user && challenges) setIsLoading(true);
  console.log(isLoading)

  return {
    user,
  };
}