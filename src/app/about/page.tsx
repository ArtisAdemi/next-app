import { Cta } from "@/components/globals/Cta";
import hero from "../../../public/images/hero.jpg";
import { Footer } from "@/components/globals/Footer";
import Hero from "@/components/homepage/Hero";

export default function About() {
  return (
    <div>
      {/* Hero Section */}

      <Hero
        title="About Us"
        description="Your trusted partner for high-quality epoxy coatings and concrete polishing solutions."
      />
      <div className="py-16 px-6 md:py-28 md:px-[4%]">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center mt-6">
          About Us
        </h1>
        <p className="text-base md:text-lg leading-relaxed mb-6 text-center mt-4 max-w-4xl mx-auto">
          Welcome to Palushaj Epoxy Coatings, where quality craftsmanship and
          dedication to excellence are the foundation of everything we do.
        </p>
        <p className="text-base md:text-lg leading-relaxed mb-6 text-center mt-4 max-w-4xl mx-auto">
          Founded in 1998, our family-owned business has proudly served
          residential, commercial, and industrial clients for over two decades.
          Our journey began in the Balkans, where we grew up valuing hard work,
          integrity, and perseverance. We started this company with a dream for
          a better future. It wasn’t easy, but we embraced the challenges,
          pouring our hearts into building a business that reflects our values
          and commitment to quality.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-6 md:px-0 py-10 md:py-28">
        <img
          src={hero.src}
          alt="Hero Image"
          className="object-cover shadow-lg h-60 md:h-[600px] rounded-l-full w-full md:w-auto"
        />
        <img
          src={hero.src}
          alt="Hero Image"
          className="object-cover shadow-lg h-60 md:h-[600px] rounded-r-full w-full md:w-auto"
        />
      </div>

      {/* Text Section */}
      <div className="px-6 md:px-[4%]">
        <p className="text-base md:text-lg leading-relaxed mb-6 text-center mt-4 max-w-4xl mx-auto">
          Starting with just a few tools and a lot of determination, we quickly
          earned a reputation for our meticulous attention to detail,
          reliability, and customer-focused approach. Today, we specialize in
          epoxy flooring, concrete polishing, glue and tar removal, and
          professional painting. Whether transforming residential spaces or
          tackling large-scale industrial projects, we take pride in exceeding
          expectations and delivering stunning results.
        </p>
      </div>

      {/* Full-Width Image */}
      <div className="py-10 md:py-28 px-6 md:px-0">
        <img
          src={hero.src}
          alt="Full-Width Image"
          className="w-full object-cover shadow-lg h-60 md:h-[400px]"
        />
        <p className="text-base md:text-lg leading-relaxed text-center mt-6 max-w-4xl mx-auto">
          At Palushaj Epoxy Coatings, we treat every project as an opportunity
          to create something lasting and beautiful. Our team is passionate
          about what we do and dedicated to bringing your vision to life with
          precision and care. We believe that no project is too big or small—
          our goal is to provide top-notch service that leaves a lasting
          impression.
          <br />
          <br />
          As a family business, we understand the value of trust and long-term
          relationships. That’s why most of our work comes from referrals, a
          testament to the loyalty and satisfaction of our clients. Now, with a
          new generation stepping in, we’re blending the experience of the past
          with innovative ideas for the future to grow and serve our community
          even better.
        </p>
      </div>

      {/* Call-to-Action */}
      <div className="">
        <Cta />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
