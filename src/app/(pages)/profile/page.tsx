import Link from "next/link";

const profile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header banner */}
      <div className="bg-gradient-to-br from-green-600 to-green-400 text-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs">
            <Link href="/" className="opacity-90 hover:opacity-100">
              Home
            </Link>
            <span className="opacity-70">/</span>
            <b>My Account</b>
          </nav>

          <div className="flex items-center gap-4">
            <span className="grid size-14 place-items-center rounded-2xl bg-white/20 text-2xl shadow-lg">
              <i className="fa-solid fa-user"></i>
            </span>
            <div className="leading-tight">
              <h1 className="text-3xl font-bold">My Account</h1>
              <p className="text-sm opacity-90">
                Manage your addresses and account settings
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full shrink-0 lg:w-64">
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md">
            <h2 className="border-b border-gray-100 px-4 py-3 text-sm font-bold text-gray-900">
              My Account
            </h2>

            <div className="flex flex-col gap-1 p-2">
              <Link
                href="/addresses"
                className="flex items-center justify-between rounded-xl bg-green-50 px-2 py-2 text-sm font-medium text-green-700"
              >
                <span className="flex items-center gap-3">
                  <span className="grid size-8 place-items-center rounded-lg bg-green-500 text-white">
                    <i className="fa-solid fa-location-dot text-xs"></i>
                  </span>
                  My Addresses
                </span>
                <i className="fa-solid fa-chevron-right text-xs text-gray-400"></i>
              </Link>

              <Link
                href="/settings"
                className="flex items-center justify-between rounded-xl px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <span className="flex items-center gap-3">
                  <span className="grid size-8 place-items-center rounded-lg bg-gray-100 text-gray-500">
                    <i className="fa-solid fa-gear text-xs"></i>
                  </span>
                  Settings
                </span>
                <i className="fa-solid fa-chevron-right text-xs text-gray-400"></i>
              </Link>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-gray-900">My Addresses</h2>
              <p className="text-xs text-gray-500">
                Manage your saved delivery addresses
              </p>
            </div>

            <button
              type="button"
              className="cursor-pointer flex items-center gap-2 rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-green-600/25 transition-colors hover:bg-green-700"
            >
              <i className="fa-solid fa-plus text-xs"></i>
              Add Address
            </button>
          </div>

          {/* Empty state */}
          <div className="flex flex-col items-center justify-center rounded-3xl border border-gray-100 bg-white px-6 py-14 text-center">
            <span className="mb-5 grid size-18 place-items-center rounded-full bg-gray-100 text-2xl text-gray-400">
              <i className="fa-solid fa-location-dot"></i>
            </span>
            <h3 className="mb-2 text-base font-bold text-gray-900">
              No Addresses Yet
            </h3>
            <p className="mb-6 max-w-xs text-sm text-gray-500">
              Add your first delivery address to make checkout faster and easier.
            </p>
            <button
              type="button"
              className="cursor-pointer flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-600/25 transition-colors hover:bg-green-700"
            >
              <i className="fa-solid fa-plus text-xs"></i>
              Add Your First Address
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default profile;