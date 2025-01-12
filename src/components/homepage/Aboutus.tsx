import Link from "next/link";
import hero from "../../../public/images/hero.jpg";
import { useRouter } from "next/navigation";

export const About = () => {
  const router = useRouter();
  const servicesClick = (url: string) => {
    router.push(url);
  };

  return (
    <div className="px-[4%] py-16 xl:py-28 flex flex-col lg:gap-y-12 xl:flex-row justify-between">
      <div className="xl:mt-20 xl:w-[60%]">
        <h5 className="font-semibold mb-4 text-xl text-[#FF8C00]">About Us</h5>
        <h1 className="text-5xl font-bold text-black leading-tight">
          Building Your <br /> Dream Floors Together.
        </h1>
        <p className="text-xl font-md text-black leading-7 xl:w-[80%] mt-4">
          {" "}
          Welcome to your trusted partner in epoxy flooring and concrete
          polishing. <br /> We’re dedicated to bringing your vision to life with
          precision and expertise, ensuring that each project stands out for its
          durability and beauty. <br /> <br />{" "}
          <span className="font-semibold text-black">
            {" "}
            Let us help you create floors that elevate your space from the
            ground up.
          </span>
        </p>
        <Link href={"/bookings"}>
          <button className="group relative px-6 py-4 mt-4 text-white bg-[#FF8C00] w-1/2 md:w-1/3 lg:w-1/3  font-semibold transition-transform duration-300 hover:scale-105">
            Book Now
            {/* Bottom line */}
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-orange-400 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100 group-hover:delay-0"></span>
            {/* Right line */}
            <span className="absolute top-0 -right-2 w-0.5 h-full bg-orange-400 transition-transform duration-300 origin-top scale-y-0 group-hover:scale-y-100 group-hover:delay-150"></span>
          </button>
        </Link>
      </div>
      <div className="flex gap-6 mt-12 lg:mt-0">
        <div className="flex flex-row gap-4 xl:justify-end">
          <img
            src={hero.src}
            alt="Image 1"
            className="rounded-lg shadow-md object-cover w-[50%]"
          />
          <div className=" flex flex-col gap-4">
            <img
              src={hero.src}
              alt="Image 2"
              className="rounded-lg shadow-md object-cover xl:w-96 "
            />
            <img
              src={hero.src}
              alt="Image 2"
              className="rounded-lg shadow-md object-cover w-[100%] h-56"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
