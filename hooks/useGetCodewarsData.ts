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
  }, []);

  if (user && challenges) setIsLoading(true);

  return {
    user,
  };
}