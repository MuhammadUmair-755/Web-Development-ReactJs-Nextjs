import { signIn } from "@/app/lib/auth";
async function page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 px-14 text-center">
      <img
        className="w-80 dark:invert"
        src="https://links.papareact.com/ocw"
        alt="Instagram"
      />

      <div className="mt-30">
        {/* Auth.js v5 mein buttons Form Actions ke zariye kaam karte hain */}
        {/*Server components me buttons ka kam leny k form use krskty hain*/}
        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/" });
          }}
        >
          <button
            type="submit"
            className="p-3 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition"
          >
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default page;
