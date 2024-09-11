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
          data: <ChallengeDataTypes>{},
        }
        challengeData.challenges.push(newChallenge);
      });

      challengeData.challenges.forEach(async (challenge: ChallengeTypes) => {
        const resp = await fetch(`https://www.codewars.com/api/v1/code-challenges/${challenge.id}`);
        const challengeDetails = await resp.json();
        const challengeData: ChallengeDataTypes = {
          url: challengeDetails.id,
          category: challengeDetails.category,
          description: challengeDetails.description,
          rank: {
            rank: challengeDetails.rank.name,
            color: challengeDetails.rank.color,
          },
        }

        challenge.data = challengeData;
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