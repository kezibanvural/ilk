import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export const newChatAction = () => {

    window.location.reload()
}