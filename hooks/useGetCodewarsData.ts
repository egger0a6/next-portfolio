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

interface ChallengeTypes {
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

      challengesData.data.forEach((challenge: any) => {
        const newChallenge: ChallengeTypes = {
          id: challenge.id,
          name: challenge.name,
          completedLanguages: challenge.completedLanguages,
        }
        challengeData.challenges.push(newChallenge);
      });

      challengeData.challenges.forEach(async (challenge: ChallengeTypes) => {
        const resp = await fetch(`https://www.codewars.com/api/v1/code-challenges/${challenge.id}`);
        const challengeDetails = await resp.json();
        challenge.url = challengeDetails.url;
        challenge.category = challengeDetails.category;
        challenge.description = challengeDetails.description;
        challenge.rank = challengeDetails.rank.name;
        challenge.rankColor = challengeDetails.rank.color;
      });

      setChallenges(challengeData);
      setIsChallengesLoading(false);
    }
    getChallenges();
  }, []);

  console.log(challenges)

  return {
    user,
    challenges,
    isUserLoading,
    isChallengesLoading,
  };
}