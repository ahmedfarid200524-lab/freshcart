"use client";

import Link from "next/link";
import { useState } from "react";

const Settings = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

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
                className="flex items-center justify-between rounded-xl px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <span className="flex items-center gap-3">
                  <span className="grid size-8 place-items-center rounded-lg bg-gray-100 text-gray-500">
                    <i className="fa-solid fa-location-dot text-xs"></i>
                  </span>
                  My Addresses
                </span>
                <i className="fa-solid fa-chevron-right text-xs text-gray-400"></i>
              </Link>

              <Link
                href="/settings"
                className="flex items-center justify-between rounded-xl bg-green-50 px-2 py-2 text-sm font-medium text-green-700"
              >
                <span className="flex items-center gap-3">
                  <span className="grid size-8 place-items-center rounded-lg bg-green-500 text-white">
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
          <div className="mb-4">
            <h2 className="text-lg font-bold text-gray-900">Account Settings</h2>
            <p className="text-xs text-gray-500">
              Update your profile information and change your password
            </p>
          </div>

          {/* Profile Information */}
          <section className="mb-6 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
            <div className="p-6">
              <div className="mb-6 flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-xl bg-green-100 text-green-600">
                  <i className="fa-solid fa-user"></i>
                </span>
                <div className="leading-tight">
                  <h3 className="text-sm font-bold text-gray-900">
                    Profile Information
                  </h3>
                  <p className="text-xs text-gray-500">Update your personal details</p>
                </div>
              </div>

              <form className="flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-1.5 block text-xs font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    defaultValue="Ahmed"
                    className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-xs font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="01xxxxxxxxx"
                    className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
                  />
                </div>

                <button
                  type="submit"
                  className="cursor-pointer flex w-fit items-center gap-2 rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-green-600/25 transition-colors hover:bg-green-700"
                >
                  <i className="fa-solid fa-floppy-disk text-xs"></i>
                  Save Changes
                </button>
              </form>
            </div>

            {/* Account information */}
            <div className="border-t border-gray-100 bg-gray-50 px-6 py-5">
              <h4 className="mb-4 text-xs font-bold text-gray-900">
                Account Information
              </h4>
              <div className="mb-3 flex items-center justify-between text-xs">
                <span className="text-gray-500">User ID</span>
                <span className="font-mono text-gray-700">
                  6ae14e30cfea3d0013facc9e
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">Role</span>
                <span className="rounded-full bg-green-100 px-3 py-0.5 text-[11px] font-medium text-green-700">
                  User
                </span>
              </div>
            </div>
          </section>

          {/* Change Password */}
          <section className="overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-amber-100 text-orange-500">
                <i className="fa-solid fa-lock"></i>
              </span>
              <div className="leading-tight">
                <h3 className="text-sm font-bold text-gray-900">Change Password</h3>
                <p className="text-xs text-gray-500">Update your account password</p>
              </div>
            </div>

            <form className="flex flex-col gap-5">
              <div>
                <label
                  htmlFor="currentPassword"
                  className="mb-1.5 block text-xs font-medium text-gray-700"
                >
                  Current Password
                </label>
                <div className="relative">
                  <input
                    id="currentPassword"
                    type={showCurrent ? "text" : "password"}
                    placeholder="Enter your current password"
                    className="h-11 w-full rounded-xl border border-gray-200 bg-white pl-4 pr-11 text-sm text-gray-900 placeholder:text-gray-400 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
                  />
                  <button
                    type="button"
                    aria-label="Toggle current password visibility"
                    onClick={() => setShowCurrent((prev) => !prev)}
                    className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <i
                      className={`fa-solid ${showCurrent ? "fa-eye-slash" : "fa-eye"} text-sm`}
                    ></i>
                  </button>
                </div>
              </div>

              <div>
                <label
                  htmlFor="newPassword"
                  className="mb-1.5 block text-xs font-medium text-gray-700"
                >
                  New Password
                </label>
                <div className="relative">
                  <input
                    id="newPassword"
                    type={showNew ? "text" : "password"}
                    placeholder="Enter your new password"
                    className="h-11 w-full rounded-xl border border-gray-200 bg-white pl-4 pr-11 text-sm text-gray-900 placeholder:text-gray-400 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
                  />
                  <button
                    type="button"
                    aria-label="Toggle new password visibility"
                    onClick={() => setShowNew((prev) => !prev)}
                    className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <i
                      className={`fa-solid ${showNew ? "fa-eye-slash" : "fa-eye"} text-sm`}
                    ></i>
                  </button>
                </div>
                <p className="mt-1.5 text-[11px] text-gray-500">
                  Must be at least 6 characters
                </p>
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-1.5 block text-xs font-medium text-gray-700"
                >
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirm ? "text" : "password"}
                    placeholder="Confirm your new password"
                    className="h-11 w-full rounded-xl border border-gray-200 bg-white pl-4 pr-11 text-sm text-gray-900 placeholder:text-gray-400 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
                  />
                  <button
                    type="button"
                    aria-label="Toggle confirm password visibility"
                    onClick={() => setShowConfirm((prev) => !prev)}
                    className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <i
                      className={`fa-solid ${showConfirm ? "fa-eye-slash" : "fa-eye"} text-sm`}
                    ></i>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="cursor-pointer flex w-fit items-center gap-2 rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-colors hover:bg-orange-600"
              >
                <i className="fa-solid fa-lock text-xs"></i>
                Change Password
              </button>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Settings;