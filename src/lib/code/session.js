import { headers } from "next/headers"
import { auth } from "../auth"
import { redirect } from "next/navigation";



export const getUserSession = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    return session?.user || null;
}

export const getUserToken = async () => {
   const session = await auth.api.getSession({
        headers: await headers()
    })

    return session?.session?.token || null;
}

export const roleValidator = async (role) => {
    const user = await getUserSession();
    // console.log(role, user?.role);
    
    if(!user || user.role !== role){
        redirect('/unauthorize')
    }
}