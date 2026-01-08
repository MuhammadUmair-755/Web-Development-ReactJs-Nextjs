import { auth, signIn, signOut } from "@/app/lib/auth";

async function MiniProfile() {
  const session = await auth(); 
  return (
    <form
      action={async () => {
        "use server";
        if (session) {
          await signOut({ redirectTo: "/" });
        } else {
          await signIn("google", { redirectTo: "/" });
        }
      }}
    >
      <div className="flex items-center justify-between ms-2">
        <div className="flex items-center gap-3">
          
          {/* Profile Image - Ab ye bhi form submit karega */}
          <button type="submit" className="focus:outline-none">
            <img
              src={session?.user?.image || "/default-user.png"}
              className="h-12 w-12 rounded-full border p-0.5 mt-2 ml-3 object-cover"
              alt="profile pic"
            />
          </button>

          <div className="flex flex-col items-start mt-2">
            <p className="font-semibold text-sm">
              {session ? session?.user?.name : "Unknown User"}
            </p>
            <p className="text-gray-400 text-sm">
              {session ? `@${session?.user?.username}` : "Welcome!"}
            </p>
          </div>
        </div>

        {/* Sign In/Out Button */}
        <button 
          type="submit" 
          className="text-blue-400 font-semibold text-sm pe-4 hover:text-blue-500"
        >
          {session ? "Sign Out" : "Sign In"}
        </button>
      </div>
    </form>
  );
}

export default MiniProfile;