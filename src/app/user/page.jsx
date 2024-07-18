import { auth } from "@/auth"
import { signOut } from "@/auth"
export default async function DashBoard() {
  const session = await auth()

  if (!session.user) return null
  console.log(session)

  return (
    <div className="flex justify-center items-center">
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <form
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <button type="submit" className="px-4 py-2 bg-sky-400">Sign Out</button>
      </form>
    </div>
  )
}
