import Hero from "@/components/homepage/Hero";

export default function About() {
  return (
    <div className="bg-gray-50">
      <Hero
        title="About Us"
        description="Welcome to Palushaj Epoxy Coatings, where quality craftsmanship and dedication to excellence are the foundation of everything we do."
      />
      <main className="flex flex-col gap-16  px-[4%] py-20">
        <h1 className="text-5xl font-extrabold text-gray-900">About Us</h1>

        <div className="bg-white shadow-md rounded-xl p-10 max-w-4xl">
          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Welcome to Palushaj Epoxy Coatings, where quality craftsmanship
              and dedication to excellence are the foundation of everything we
              do. Founded in 1998, our family-owned business has proudly served
              residential, commercial, and industrial clients for over two
              decades.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our journey began in the Balkans, where we grew up valuing hard
              work, integrity, and perseverance. We started this company with a
              dream for a better future. It wasn’t easy, but we embraced the
              challenges, pouring our hearts into building a business that
              reflects our values and commitment to quality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              What We Do
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, we specialize in epoxy flooring, concrete polishing, glue
              and tar removal, and professional painting. Whether transforming
              residential spaces or tackling large-scale industrial projects, we
              take pride in exceeding expectations and delivering stunning
              results.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Our Commitment
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At Palushaj Epoxy Coatings, we treat every project as an
              opportunity to create something lasting and beautiful. Our team is
              passionate about what we do and dedicated to bringing your vision
              to life with precision and care.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We believe that no project is too big or small—our goal is to
              provide top-notch service that leaves a lasting impression. As a
              family business, we understand the value of trust and long-term
              relationships.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Now, with a new generation stepping in, we’re blending the
              experience of the past with innovative ideas for the future to
              grow and serve our community even better.
            </p>
          </section>

          <div className="mt-8 text-center">
            <strong className="text-2xl text-gray-900">
              Palushaj Epoxy Coatings
            </strong>
            <p className="text-lg text-gray-600">Precision. Quality. Trust.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
