import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";
import Posts from "./Posts";
import Stories from "./Stories";
import { auth } from "@/app/lib/auth";

async function Feed() {
  const session = await auth();
  return (
    <div
      className={`grid grid-cols-1 md:cols-2 lg:grid-cols-3 pb-20 md:pb-0 lg:pb-0 
        `}
        //  ${!session && " grid-cols-1! md:grid-cols-1! lg:grid-cols-1! text-center!"} 
    >
      <section className="col-span-1 md:col-span-2 lg:col-span-2">
        <Stories />
        <Posts />
      </section>
      <section
        className={`hidden lg:block lg:col-span-1`}
      >
        {/* mini profile + suggestions */}
        <MiniProfile />

        {session && <Suggestions />}
      </section>
    </div>
  );
}

export default Feed;
