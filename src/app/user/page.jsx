import { auth } from "@/auth"
async function UserPage() {
  const session = await auth()
  if (!session) {
    return (
      <div>
        <h1>NO AUTENTICADO</h1>
      </div>
    )
  }
  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}

export default UserPage
