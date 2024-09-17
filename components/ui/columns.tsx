import { ChallengeTypes } from "@/hooks/useGetCodewarsData";
import { ColumnDef } from "@tanstack/react-table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "./dropdown-menu";
import { Button } from "./button";
import { MoreHorizontal } from "lucide-react";
import { FaLocationArrow } from "react-icons/fa6";

export const columns: ColumnDef<ChallengeTypes>[] = [
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
  {
    id: "actions",
    cell: ({ row }) => {
      const challenge = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>
              <a href={challenge.url} target="_blank">
                <div className='flex items-center gap-2 hover:text-red-3'>
                  <p>Visit challenge</p>
                  <FaLocationArrow />
                </div>
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
];