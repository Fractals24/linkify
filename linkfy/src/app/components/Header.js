import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Logoutbutton from "./buttons/Logoutbutton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default async function Header() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <header className="bg-white border-b flex justify-between py-4 mx-4">
      <div className="flex gap-2 ">
        <FontAwesomeIcon icon={faLink} />
        <Link href={" "}>
          <span>Linkify</span>
        </Link>
        <nav className="ml-2 flex gap-4 text-gray-500">
          <Link href={"/about"}>About</Link>
          <Link href={"/pricing"}>Pricing</Link>
          <Link href={"/contact"}>Contact</Link>
        </nav>
      </div>
      <div className="flex items-center gap-3">
        {!!session && (
          <>
            <Link href={"/account"}>
              Hello, {session?.user?.name}
            </Link>
            <Logoutbutton />
          </>
        )}
        {!session && (
          <>
            <Link href={"/login"}>Login</Link>
            <Link href={"/create"}>Create-Account</Link>
          </>
        )}
      </div>
    </header>
  );
}
