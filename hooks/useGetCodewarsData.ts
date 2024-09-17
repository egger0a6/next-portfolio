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

export interface ChallengeTypes {
  id: string;
  name: string;
  completedLanguages: string[];
  url?: string;
  category?: string;
  description?: string;
  rank?: string;
  rankColor?: string;
}

interface ChallengesTypes {
  totalPages: number;
  totalItems: number;
  challenges: ChallengeTypes[];
}

export const useGetCodewarsData = () => {
  const [isUserLoading, setIsUserLoading] = useState(true);
  const [isChallengesLoading, setIsChallengesLoading] = useState(true);
  const [user, setUser] = useState<UserTypes>();
  const [challenges, setChallenges] = useState<ChallengesTypes>();

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
      };

      setUser(user);
      setIsUserLoading(false);
    }
    getUser();

    const getChallenges = async () => {
      const resp = await fetch("https://www.codewars.com/api/v1/users/egger0a6/code-challenges/completed");
      const challengesData = await resp.json();
      const challengeData: ChallengesTypes = {
        totalPages: challengesData.totalPages,
        totalItems: challengesData.totalItems,
        challenges: [],
      };

      challengesData.data.forEach(async (challenge: any) => {
        const newChallenge: ChallengeTypes = {
          id: challenge.id,
          name: challenge.name,
          completedLanguages: challenge.completedLanguages,
        }

        const resp = await fetch(`https://www.codewars.com/api/v1/code-challenges/${challenge.id}`);
        const challengeDetails = await resp.json();
        newChallenge.url = challengeDetails.url;
        newChallenge.category = challengeDetails.category;
        newChallenge.description = challengeDetails.description;
        newChallenge.rank = challengeDetails.rank.name;
        newChallenge.rankColor = challengeDetails.rank.color;

        challengeData.challenges.push(newChallenge);
      });

      setChallenges(challengeData);
      setIsChallengesLoading(false);
    }
    getChallenges();
  }, []);

  return {
    user,
    challenges,
    isUserLoading,
    isChallengesLoading,
  };
}