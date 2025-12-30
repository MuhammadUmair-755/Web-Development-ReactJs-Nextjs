import TextExpander from "@/app/_components/TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;
  return (
    <div className="grid grid-cols-1 md:grid-cols-7 gap-10 sm:gap-20 border border-primary-800 py-3  mb-24">
      <div className="col-span-1 h-80 md:col-span-3 relative scale-[1.02] lg:translate-x-4  md:scale-[1.05] md:translate-x-2">
        <Image
          src={image}
          fill
          className="object-cover"
          alt={`Cabin ${name}`}
        />
      </div>

      <div className="col-span-1 md:col-span-4">
        <h3 className="text-accent-100 font-black text-2xl sm:text-3xl md:text-5xl lg:text-7xl mb-5 bg-primary-950 p-6 pb-1 ">
          Cabin {name}
        </h3>

        <p className="text-lg sm:text-xl md:text-2xl text-primary-300 mb-10">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg sm:text-xl md:text-2xl">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg sm:text-xl md:text-2xl">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg sm:text-xl md:text-2xl">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;
