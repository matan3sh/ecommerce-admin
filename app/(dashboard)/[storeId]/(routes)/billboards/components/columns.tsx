'use client'

import CellAction from '@/app/(dashboard)/[storeId]/(routes)/billboards/components/cell-action'
import { ColumnDef } from '@tanstack/react-table'

export type BillboardColumn = {
  id: string
  label: string
  createdAt: string
}

export const columns: ColumnDef<BillboardColumn>[] = [
  {
    accessorKey: 'label',
    header: 'Label',
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
