import Link from "next/link";
import { prisma } from "../db";
import { redirect } from "next/navigation";

async function createTodo (data: FormData) {
    "use server"

    const title = data.get("title")?.valueOf()
    if (typeof title != "string" || title.length === 0){
        return
    }
    await prisma.todo.create({ data : { title, complete : false }})
    console.log("created")
    redirect("/")
}


export default function New() {
    return <>
        <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New</h1>
        </header>
        <form action={createTodo} className="flex gap-2 flex-column">
            <input type="text" style={{color : "black"}} name="title"></input>
            <div>
                <Link href="..">Cancel</Link>
                <button type="submit" style={{marginLeft : "12px"}}>Create</button>
            </div>
        </form>
    </>
}