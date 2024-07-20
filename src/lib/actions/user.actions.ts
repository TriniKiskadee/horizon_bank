'use server'

import {createAdminClient, createSessionClient} from "@/lib/appwrite";
import {ID} from "node-appwrite";
import {cookies} from "next/headers";
import {parseStringify} from "@/lib/utils";
import exp from "node:constants";

export const signIn = async ({email, password}: SignUpParams) => {
    try {
        const {account} = await createAdminClient()
        const response = await account.createEmailPasswordSession(email, password)

        if (response) return parseStringify(response)
    } catch (error: any) {
        console.error(`SignIn Error: ${error}`)
    }
}
export const signUp = async (userData: SignUpParams) => {
    const {email, password, firstName, lastName} = userData
    try {
        const {account} = await createAdminClient()
        const newUserAccount = await account.create(
            ID.unique(),
            email,
            password,
            `${firstName} ${lastName}`
        )
        const session = await account.createEmailPasswordSession(email, password)

        cookies().set('appwrite-session', session.secret, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: true,
        })

        return parseStringify(newUserAccount)

    } catch (error: any) {
        console.error(`SignUp Error: ${error}`)
    }
}
export const getLoggedInUser = async () => {
    try {
        const {account} = await createSessionClient()
        const user = await account.get()
        return parseStringify(user)
    } catch (error: any) {
        console.error(`getLoggedInUser Error: ${error}`)
    }
}

export const loggoutAccount = async () => {
    try {
        const {account} = await createSessionClient()

        cookies().delete('appwrite-session')

        await account.deleteSession('current')

    } catch (error: any) {
        console.error(`logoutAccount Error: ${error}`)
        return null
    }
}