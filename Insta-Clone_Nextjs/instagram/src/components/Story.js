import Image from "next/image";

 function Story({ img, username }) {
  return (     
      <div className="flex flex-col gap-2 items-center cursor-pointer">
        {/* Outer Div with Gradient */}
        <div className="relative h-16 w-16 hover:scale-110 rounded-full p-0.5 bg-linear-to-tr from-insta-gold to-insta-pink transition-transform duration-200 ease-out group-hover:scale-110">
          {/* Inner Div - Iska background-color aapke page ke background se match hona chahiye */}
          <div className="bg-primary h-full w-full rounded-full p-0.5 flex items-center justify-center">
            <div className="relative h-full w-full">
              <Image
                src={img}
                fill
                alt={username}
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        <span className="text-[11px] w-16 truncate text-center text-app-text">
          {username}
        </span>
      </div>    
  );
}

export default Story;
