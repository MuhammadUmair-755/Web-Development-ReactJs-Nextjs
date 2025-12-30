import Image from "next/image";
import image1 from "@/public/about-1.jpg";
import image2 from "@/public/about-2.jpg";
import Link from "next/link";
import { getCabins } from "../_lib/data-service";
export const metadata = {
  title: "About",
};

export const revalidate = 86400; // REVALIDATE EVERY 24 HOURS
export default async function Page() {
  const cabins = await getCabins(); // FETCH CABINS DATA

  return (
    <div className="grid lg:grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="lg:col-span-3">
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl mb-10 text-accent-400 font-medium">
          Welcome to The Wild Oasis
        </h1>

        <div className="space-y-8">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Where nature&apos;s beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it&apos;s not just about the luxury
            cabins. It&apos;s about the experience of reconnecting with nature
            and enjoying simple pleasures with family.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Our {cabins.length} luxury cabins provide a cozy base, but the real
            freedom and peace you&apos;ll find in the surrounding mountains.
            Wander through lush forests, breathe in the fresh air, and watch the
            stars twinkle above from the warmth of a campfire or your hot tub.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
            This is where memorable moments are made, surrounded by
            nature&apos;s splendor. It&apos;s a place to slow down, relax, and
            feel the joy of being together in a beautiful setting.
          </p>
        </div>
      </div>

      <div className="lg:col-span-2">
        <Image
          src={image1}
          alt="Family sitting around a fire pit in front of cabin"
        />
      </div>
      

      <div className="lg:col-span-3">
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl mb-10 text-accent-400 font-medium">
          Managed by our family since 1962
        </h1>

        <div className="space-y-8">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Since 1962, The Wild Oasis has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Over the years, we&apos;ve maintained the essence of The Wild Oasis,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, you&apos;re not just a
            guest; youre part of our extended family. So join us at The Wild
            Oasis soon, where tradition meets tranquility, and every visit is
            like coming home.
          </p>

          <div>
            <Link
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxury cabins
            </Link>
          </div>
        </div>
      </div>
      <div className="relative aspect-square lg:col-span-2">
        <Image
          src="/about-2.jpg"
          className="object-cover"
          fill
          alt="Family that manages The Wild Oasis"
        />
      </div>
    </div>
  );
}
