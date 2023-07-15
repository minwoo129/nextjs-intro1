import Link from "next/link";
export default function NavBar() {
  return (
    <nav>
      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a>About</a>
      </Link>
    </nav>
  );
}
