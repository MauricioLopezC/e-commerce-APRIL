import { auth } from "@/auth"
import { signOut } from "@/auth"
export default async function DashBoard() {
  const session = await auth()

  if (!session.user) return null
  console.log(session)

  return (
    <section id="userPage" className="min-h-[70vh] max-w-lg container mx-auto mt-16">
      <div id="userCard" className="shadow rounded-md border">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">PERFIL DEL USUARIO</h3>
        </div>

        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="divide-y">
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Nombre
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {session.user.name}
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Email
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {session.user.email}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="flex justify-center items-center mt-6">
        <form
          action={async () => {
            "use server"
            await signOut()
          }}
        >
          <button type="submit" className="px-6 py-2 bg-black text-white rounded-md">CERRAR SESION</button>
        </form>
      </div>
    </section>
  )
}



