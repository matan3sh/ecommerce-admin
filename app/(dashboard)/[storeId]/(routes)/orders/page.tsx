import OrderClient from '@/app/(dashboard)/[storeId]/(routes)/orders/components/client'
import { OrderColumn } from '@/app/(dashboard)/[storeId]/(routes)/orders/components/columns'
import prismadb from '@/lib/prismadb'
import { formatter } from '@/lib/utils'
import { format } from 'date-fns'

const OrdersPage = async ({ params }: { params: { storeId: string } }) => {
  const orders = await prismadb.order.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  const formattedOrders: OrderColumn[] = orders.map((order) => ({
    id: order.id,
    phone: order.phone,
    address: order.address,
    products: order.orderItems
      .map((orderItem) => orderItem.product.name)
      .join(', '),
    totalPrice: formatter.format(
      order.orderItems.reduce(
        (acc, item) => acc + Number(item.product.price),
        0
      )
    ),
    createdAt: format(order.createdAt, 'MMMM do, yyyy'),
    isPaid: order.isPaid,
  }))

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <OrderClient data={formattedOrders} />
      </div>
    </div>
  )
}

export default OrdersPage
