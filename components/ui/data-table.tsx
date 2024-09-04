import { ColumnDef, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Table, TableHeader } from "./table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

const DataTable = <TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <Table>
        {/* <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            
          ))}
        </TableHeader> */}
      </Table>
    </div>
  )
}

export default DataTable;