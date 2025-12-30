import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";

// export const metadata = {
//     title: "Cabin Details",
// }

export async function generateMetadata({ params }) {
  const { cabinid } = await params;
  const { name } = await getCabin(cabinid);
  return {
    title: `Cabin ${name}`,
  };
}

export async function generateStaticParams() {
  // Fetch all cabins to pre-render their pages
 try {
    const cabins = await getCabins();
    if (!cabins) return [];
    return cabins.map((cabin) => ({ cabinid: String(cabin.id) }));
  } catch (error) {
    console.error("Build time fetch error:", error);
    return [];
  }
}

export default async function Page({ params }) {
  const { cabinid } = await params;
  const cabin = await getCabin(cabinid);

  return (
    <div className="max-w-8xl sm:max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="text-5xl font-semibold text-center mb-10">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
