

import {getServerSession} from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import grabusername from "@/actions/grabusername";
import Usernameform from "../components/forms/Usernameform";

export default async function AccountPage({searchParams}) {
    const session = getServerSession(authOptions);
    const desiredUsername = searchParams?.desiredUsername;

    if(!session){
        redirect('/');
    }
    return (
        <div>
            <Usernameform desiredUsername = {desiredUsername} />
        </div>
    )
}