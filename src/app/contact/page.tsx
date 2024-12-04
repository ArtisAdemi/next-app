
export default function Contact() {
    return (
        <div className="grid grid-rows-[1fr] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <main className="flex flex-col gap-8 items-center sm:items-start max-w-2xl w-full">
                <h1 className="text-4xl font-bold">Contact Us</h1>

                <form className="w-full space-y-6 bg-black/[.05] dark:bg-white/[.06] p-6 rounded-lg">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 rounded-lg border border-black/[.08] dark:border-white/[.145] bg-background"
                            placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 rounded-lg border border-black/[.08] dark:border-white/[.145] bg-background"
                            placeholder="your@email.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            className="w-full px-4 py-2 rounded-lg border border-black/[.08] dark:border-white/[.145] bg-background"
                            placeholder="Your message..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12"
                    >
                        Send Message
                    </button>
                </form>

                <div className="w-full bg-black/[.05] dark:bg-white/[.06] p-6 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Other Ways to Reach Us</h2>
                    <div className="space-y-2 text-sm">
                        <p>Email: contact@example.com</p>
                        <p>Phone: (555) 123-4567</p>
                        <p>Address: 123 Web Dev Street, Digital City, 12345</p>
                    </div>
                </div>
            </main>
        </div>
    );
}