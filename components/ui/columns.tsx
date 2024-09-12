import { RankTypes } from "@/hooks/useGetCodewarsData";
import { ColumnDef } from "@tanstack/react-table";

export type Challenge = {
  id: string;
  name: string;
  completedLanguages: string[];
  category: string;
  rank: RankTypes;
}

export const columns: ColumnDef<Challenge>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "rank",
    header: "Rank",
  },
  {
    accessorKey: "completedLanguages",
    header: "Completed Languages",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
];