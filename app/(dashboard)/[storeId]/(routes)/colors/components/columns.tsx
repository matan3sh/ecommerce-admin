'use client'

import CellAction from '@/app/(dashboard)/[storeId]/(routes)/sizes/components/cell-action'
import { ColumnDef } from '@tanstack/react-table'

export type ColorColumn = {
  id: string
  name: string
  value: string
  createdAt: string
}

export const columns: ColumnDef<ColorColumn>[] = [
  {
    accessorKey: 'name',
    header: 'Hame',
  },
  {
    accessorKey: 'value',
    header: 'Value',
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        {row.original.value}
        <div
          className="h-6 w-6 rounded-full border"
          style={{ backgroundColor: row.original.value }}
        />
      </div>
    ),
  },
  {
    accessorKey: 'createdAt',
    header: 'Date',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      return <CellAction data={row.original} />
    },
  },
]
