"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/about" },
  { id: 4, title: "Contact", url: "/contact" },
];

const Menucom = () => {
  const [open, setOpen] = useState(false);
  const user = false;
  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      <div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-3xl gap-8">
        {links.map((item) => (
          <Link href={item.url} key={item.id}>
            {item.title}
          </Link>
        ))}
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Odrers</Link>
        )}
        <Link href="/cart">
          <CartIcon />
        </Link>
      </div>
    </div>
  );
};

export default Menucom;
