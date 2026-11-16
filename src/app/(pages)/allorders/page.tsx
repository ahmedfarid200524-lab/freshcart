import AllorderCard, { type Order } from '@/app/_components/allorderscard/AllorderCard'
import { GetuserOrdersAction } from '@/cashAction/Orders'
import Link from 'next/link'

const Allorders = async () => {
  const data = await GetuserOrdersAction()
  console.log(data);
  

  
  const orders: Order[] = Array.isArray(data) ? data : data?.data ?? []

  return (
    <div className="bg-white min-h-screen pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm">
          <Link href="/" className="text-gray-500 hover:text-green-600">Home</Link>
          <p className="text-gray-300">/</p>
          <p className="text-gray-900 font-medium">My Orders</p>
        </div>

        {/* Title */}
        <div className="flex items-start justify-between mt-6">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl size-14 flex items-center justify-center shadow-lg shadow-green-600/25">
              <i className="fa-solid fa-box text-white text-xl"></i>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>
              <p className="text-gray-500 text-sm">
                Track and manage your {orders.length} {orders.length === 1 ? 'order' : 'orders'}
              </p>
            </div>
          </div>
          <Link
            href="/shop"
            className="flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700 mt-4"
          >
            <i className="fa-solid fa-bag-shopping text-xs"></i>
            Continue Shopping
          </Link>
        </div>

        {/* Order cards */}
        {orders.length === 0 ? (
          <div className="mt-8 flex flex-col items-center rounded-3xl border border-gray-200 py-16 text-center">
            <i className="fa-solid fa-box-open text-4xl text-gray-300"></i>
            <h2 className="mt-4 text-lg font-bold text-gray-900">No Orders Yet</h2>
            <p className="mt-1 text-sm text-gray-500">
              When you place an order, it will show up here.
            </p>
          </div>
        ) : (
          orders.map((order) => <AllorderCard key={order._id} order={order} />)
        )}

      </div>
    </div>
  )
}

export default Allorders