'use client'

import CellAction from '@/app/(dashboard)/[storeId]/(routes)/sizes/components/cell-action'
import { ColumnDef } from '@tanstack/react-table'

export type SizeColumn = {
  id: string
  name: string
  value: string
  createdAt: string
}

export const columns: ColumnDef<SizeColumn>[] = [
  {
    accessorKey: 'name',
    header: 'Hame',
  },
  {
    accessorKey: 'value',
    header: 'Value',
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
