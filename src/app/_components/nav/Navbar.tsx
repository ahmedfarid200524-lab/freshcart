"use client";

import Link from "next/link";
import { useContext, useEffect, useRef, useState, type FormEvent } from "react";
import logo from "./../../../../public/images/logo.png";
import { useSession, signOut } from "next-auth/react";
import {
  ChevronDown,
  Gift,
  Headset,
  Heart,
  LogOut,
  Mail,
  Menu,
  Phone,
  Search,
  ShoppingCart,
  Truck,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cartCtontext } from "@/cartaction/Cartcontext";

type NavbarProps = {
  onSearch?: (query: string) => void;
};

export default function Navbar({ onSearch }: NavbarProps) {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const { data: session, status } = useSession();

  const isAuthenticated = status === "authenticated";
  const isLoading = status === "loading";
  const userName = session?.user?.name;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch?.(query.trim());
  };

  const handleSignOut = () => signOut({ callbackUrl: "/login" });
  const { toatalcartitem, wish } = useContext(cartCtontext);
  return (
    <>
      <header className="hidden md:block w-full">
        {/* Top bar */}
        <div className="border-b border-gray-200 bg-gray-50 text-xs text-gray-600 w-full">
          <div className="w-full flex h-9 items-center justify-between gap-4 px-6">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 whitespace-nowrap text-sm">
                <Truck className="size-3.5 text-green-600" />
                Free Shipping on Orders 500 EGP
              </span>
              <span className="hidden items-center gap-1.5 whitespace-nowrap sm:flex text-sm">
                <Gift className="size-3.5 text-green-600" />
                New Arrivals Daily
              </span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="tel:+18001234567"
                className="hidden items-center gap-1.5 whitespace-nowrap hover:text-green-600 lg:flex"
              >
                <Phone className="size-3.5" />
                +1 (800) 123-4567
              </a>
              <a
                href="mailto:support@freshcart.com"
                className="hidden items-center gap-1.5 whitespace-nowrap hover:text-green-600 lg:flex"
              >
                <Mail className="size-3.5" />
                support@freshcart.com
              </a>

              {isLoading ? null : isAuthenticated ? (
                <>
                  <span className="flex items-center gap-1.5 whitespace-nowrap">
                    <User className="size-3.5" />
                    {userName}
                  </span>
                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="flex items-center gap-1.5 whitespace-nowrap hover:text-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  >
                    <LogOut className="size-3.5" />
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="flex items-center gap-1.5 whitespace-nowrap hover:text-green-600"
                  >
                    <User className="size-3.5" />
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="whitespace-nowrap hover:text-green-600"
                  >
                    Sign-up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <nav
        aria-label="Main"
        className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 py-10 gap-4 lg:gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-[22px] font-bold tracking-tight text-gray-900"
          >
            <Image src={logo} alt="FreshCart" />
          </Link>

          <form
            role="search"
            onSubmit={handleSubmit}
            className="relative hidden md:block max-w-lg flex-1"
          >
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for products, brands and more..."
              aria-label="Search"
              className="h-10 w-full rounded-full border border-gray-200 bg-gray-50 pl-4 pr-12 text-[13px] text-gray-900 placeholder:text-gray-500 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
            />
            <button
              type="submit"
              aria-label="Search"
              className="absolute right-0 top-0 grid size-10 place-items-center rounded-full bg-green-600 text-white transition-colors hover:bg-green-700"
            >
              <Search className="size-4" />
            </button>
          </form>

          <ul className="ml-auto hidden items-center gap-5 md:flex lg:gap-6">
            <li>
              <Link
                href="/"
                className="flex items-center gap-1 text-sm font-medium text-gray-900 transition-colors hover:text-green-600"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/shop"
                className="flex items-center gap-1 text-sm font-medium text-gray-900 transition-colors hover:text-green-600"
              >
                Shop
              </Link>
            </li>

            <li className="group relative">
              <Link
                href="/allCategories"
                className="flex items-center gap-1 text-sm font-medium text-gray-900 transition-colors hover:text-green-600 group-hover:text-green-600 group-focus-within:text-green-600"
              >
                Categories
                <ChevronDown className="size-3.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
              </Link>

              {/* pt-3 (not margin) keeps the hover area continuous between link and menu */}
              <div className="invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <ul
                  role="menu"
                  className="min-w-52 translate-y-2 rounded-xl border border-gray-200 bg-white p-2 shadow-xl transition-transform duration-200 group-hover:translate-y-0 group-focus-within:translate-y-0"
                >
                  <li role="none">
                    <Link
                      role="menuitem"
                      href="/allCategories"
                      className="block rounded-lg px-3.5 py-2.5 text-sm text-gray-700 transition-colors hover:bg-green-50 hover:text-green-600 focus-visible:bg-green-50 focus-visible:text-green-600 focus-visible:outline-none"
                    >
                      All Categories
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      role="menuitem"
                      href="/electronics"
                      className="block rounded-lg px-3.5 py-2.5 text-sm text-gray-700 transition-colors hover:bg-green-50 hover:text-green-600 focus-visible:bg-green-50 focus-visible:text-green-600 focus-visible:outline-none"
                    >
                      Electronics
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      role="menuitem"
                      href="/womenfashion"
                      className="block rounded-lg px-3.5 py-2.5 text-sm text-gray-700 transition-colors hover:bg-green-50 hover:text-green-600 focus-visible:bg-green-50 focus-visible:text-green-600 focus-visible:outline-none"
                    >
                      Women&apos;s Fashion
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      role="menuitem"
                      href="/MenFashion"
                      className="block rounded-lg px-3.5 py-2.5 text-sm text-gray-700 transition-colors hover:bg-green-50 hover:text-green-600 focus-visible:bg-green-50 focus-visible:text-green-600 focus-visible:outline-none"
                    >
                      Men&apos;s Fashion
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link
                href="/brands"
                className="flex items-center gap-1 text-sm font-medium text-gray-900 transition-colors hover:text-green-600"
              >
                Brands
              </Link>
            </li>
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <span className="grid size-8 place-items-center rounded-full bg-green-600/10 text-green-600">
              <Headset className="size-4" />
            </span>
            <span className="leading-tight">
              <small className="block text-[11px] text-gray-500">Support</small>
              <b className="block text-xs font-semibold text-gray-900">
                24/7 Help
              </b>
            </span>
          </div>

          <div className="ml-auto flex items-center gap-4 text-gray-600 md:ml-0">
            <Link href="/wishlist" aria-label="Wishlist" className="hover:text-green-600">
              <div className="relative">
                <Heart className="size-5 " />
                {wish.length ? (
                  <Badge className="bg-red-500 text-white absolute w-1 text-xs bottom-3 left-3">
                    {wish.length}
                  </Badge>
                ) : null}
              </div>
            </Link>
            <Link href="/cart" aria-label="Cart" className="hover:text-green-600 flex">
              <div className="relative">
                <ShoppingCart className="size-5" />
                {toatalcartitem ? (
                  <Badge className="bg-green-400 text-white absolute w-1 text-xs bottom-3 left-3">
                    {toatalcartitem}
                  </Badge>
                ) : null}
              </div>
            </Link>

            {isLoading ? null : isAuthenticated ? (
              <div ref={menuRef} className="relative hidden md:block">
                <button
                  type="button"
                  aria-label="Account"
                  aria-expanded={menuOpen}
                  onClick={() => setMenuOpen((prev) => !prev)}
                  className="cursor-pointer text-2xl text-gray-600 hover:text-green-600"
                >
                  <i className="fa-regular fa-circle-user"></i>
                </button>

                {menuOpen && (
                  <div className="absolute right-0 top-full mt-3 w-60 rounded-2xl bg-white shadow-xl border border-gray-100 z-50 overflow-hidden">
                    <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 text-xl">
                        <i className="fa-regular fa-circle-user"></i>
                      </span>
                      <b className="text-gray-800">{userName}</b>
                    </div>

                    <div className="py-2">
                      <Link
                        href="/profile"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-600"
                      >
                        <i className="fa-regular fa-user w-5 text-center"></i>
                        My Profile
                      </Link>

                      <Link
                        href="/Allorders"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-600"
                      >
                        <i className="fa-solid fa-box-open w-5 text-center"></i>
                        My Orders
                      </Link>

                      <Link
                        href="/wishlist"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-600"
                      >
                        <i className="fa-regular fa-heart w-5 text-center"></i>
                        My Wishlist
                      </Link>

                      <Link
                        href="/profile"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-600"
                      >
                        <i className="fa-regular fa-address-book w-5 text-center"></i>
                        Addresses
                      </Link>

                      <Link
                        href="/settings"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-600"
                      >
                        <i className="fa-solid fa-gear w-5 text-center"></i>
                        Settings
                      </Link>
                    </div>

                    <div className="border-t border-gray-100 py-2">
                      <button
                        type="button"
                        onClick={() => {
                          setMenuOpen(false);
                          handleSignOut();
                        }}
                        className="cursor-pointer flex w-full items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50"
                      >
                        <i className="fa-solid fa-right-from-bracket w-5 text-center"></i>
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                aria-label="Sign in"
                className="hover:text-green-600 hidden md:block"
              >
                <div className="bg-theme rounded-4xl text-white flex gap-2 p-2 ps-3 pe-3 items-center">
                  <i className="fa-regular fa-user"></i>
                  <p>
                    <b>sign in</b>
                  </p>
                </div>
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label="Menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="grid size-10 place-items-center rounded-lg bg-green-600 text-white hover:bg-green-700 md:hidden"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        {mobileOpen && (
          <div className="absolute left-0 right-0 top-full max-h-[80vh] overflow-y-auto border-b border-gray-200 bg-white shadow-xl md:hidden">
            <div className="flex flex-col gap-1 p-4">
              {/* Search */}
              <form
                role="search"
                onSubmit={(e) => {
                  handleSubmit(e);
                  setMobileOpen(false);
                }}
                className="relative mb-2"
              >
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for products..."
                  aria-label="Search"
                  className="h-10 w-full rounded-full border border-gray-200 bg-gray-50 pl-4 pr-12 text-[13px] focus:border-green-600 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Search"
                  className="absolute right-0 top-0 grid size-10 place-items-center rounded-full bg-green-600 text-white"
                >
                  <Search className="size-4" />
                </button>
              </form>

              {/* Main links */}
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-900 hover:bg-green-50 hover:text-green-600"
              >
                Home
              </Link>
              <Link
                href="/shop"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-900 hover:bg-green-50 hover:text-green-600"
              >
                Shop
              </Link>

              {/* Categories (expandable) */}
              <button
                type="button"
                onClick={() => setCatOpen((prev) => !prev)}
                className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-gray-900 hover:bg-green-50 hover:text-green-600"
              >
                Categories
                <ChevronDown
                  className={`size-4 transition-transform ${catOpen ? "rotate-180" : ""}`}
                />
              </button>
              {catOpen && (
                <div className="ml-3 flex flex-col border-l border-gray-100 pl-3">
                  <Link
                    href="/allCategories"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-green-600"
                  >
                    All Categories
                  </Link>
                  <Link
                    href="/electronics"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-green-600"
                  >
                    Electronics
                  </Link>
                  <Link
                    href="/womenfashion"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-green-600"
                  >
                    Women&apos;s Fashion
                  </Link>
                  <Link
                    href="/MenFashion"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-green-600"
                  >
                    Men&apos;s Fashion
                  </Link>
                </div>
              )}

              <Link
                href="/brands"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-900 hover:bg-green-50 hover:text-green-600"
              >
                Brands
              </Link>

              {/* Account section */}
              <div className="mt-2 border-t border-gray-100 pt-2">
                {isLoading ? null : isAuthenticated ? (
                  <>
                    <div className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-800">
                      <i className="fa-regular fa-circle-user text-xl text-green-600"></i>
                      {userName}
                    </div>
                    <Link
                      href="/profile"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-600"
                    >
                      <i className="fa-regular fa-user w-5 text-center"></i>
                      My Profile
                    </Link>
                    <Link
                      href="/Allorders"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-600"
                    >
                      <i className="fa-solid fa-box-open w-5 text-center"></i>
                      My Orders
                    </Link>
                    <Link
                      href="/wishlist"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-600"
                    >
                      <i className="fa-regular fa-heart w-5 text-center"></i>
                      My Wishlist
                    </Link>
                    <Link
                      href="/profile"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-600"
                    >
                      <i className="fa-regular fa-address-book w-5 text-center"></i>
                      Addresses
                    </Link>
                    <Link
                      href="/settings"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-600"
                    >
                      <i className="fa-solid fa-gear w-5 text-center"></i>
                      Settings
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        setMobileOpen(false);
                        handleSignOut();
                      }}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-500 hover:bg-red-50"
                    >
                      <i className="fa-solid fa-right-from-bracket w-5 text-center"></i>
                      Sign Out
                    </button>
                  </>
                ) : (
                  <div className="flex gap-2">
                    <Link
                      href="/login"
                      onClick={() => setMobileOpen(false)}
                      className="flex-1 rounded-full bg-green-600 py-2.5 text-center text-sm font-semibold text-white hover:bg-green-700"
                    >
                      Sign in
                    </Link>
                    <Link
                      href="/register"
                      onClick={() => setMobileOpen(false)}
                      className="flex-1 rounded-full border border-green-600 py-2.5 text-center text-sm font-semibold text-green-600 hover:bg-green-50"
                    >
                      Sign up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}