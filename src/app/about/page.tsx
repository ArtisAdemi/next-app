export default function About() {
    return (
        <div className="grid grid-rows-[1fr] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <main className="flex flex-col gap-8 items-center sm:items-start max-w-4xl">
                <h1 className="text-4xl font-bold">About Us</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-black/[.05] dark:bg-white/[.06] p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                        <p className="text-sm">
                            We are dedicated to creating exceptional web experiences using cutting-edge
                            technologies like Next.js and React. Our mission is to build fast,
                            scalable, and user-friendly applications.
                        </p>
                    </div>

                    <div className="bg-black/[.05] dark:bg-white/[.06] p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                        <p className="text-sm">
                            We envision a web thats accessible, performant, and beautiful.
                            Through innovative solutions and modern technologies, we&apos;re working
                            to make this vision a reality.
                        </p>
                    </div>
                </div>

                <div className="w-full bg-black/[.05] dark:bg-white/[.06] p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
                    <p className="text-sm">
                        Our team consists of passionate developers, designers, and creators
                        who are committed to delivering excellence in every project we undertake.
                    </p>
                </div>
            </main>
        </div>
    );
}