import Image from "next/image";
import Link from "next/link";
const cartIcon = () => {
  return (
    <Link href="/cart">
      <div className="relative w-8 h-8">
        <Image src="/cart.png" alt="" fill />
      </div>
      <span>Cart {3}</span>
    </Link>
  );
};
export default cartIcon;
