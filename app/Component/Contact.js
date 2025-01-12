export default function Contact() {
    return (
        <div className="w-full max-w-lg mx-auto rounded-lg bg-white px-6 sm:px-10 pb-10 pt-8 mb-16 shadow-md dark:bg-zinc-900">
            <div className="mb-6">
                <h2 className="text-center text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Contact Us
                </h2>
                <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
                    We&apos;d love to hear from you!
                </p>
            </div>
            <form className="space-y-6">
                <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                    <label className="block font-medium" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-2 focus:ring-sky-500 dark:border-zinc-700 dark:bg-zinc-800"
                        id="name"
                        placeholder="Your Name"
                        name="name"
                        type="text"
                    />
                </div>
                <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                    <label className="block font-medium" htmlFor="_email">
                        Email
                    </label>
                    <input
                        className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-2 focus:ring-sky-500 dark:border-zinc-700 dark:bg-zinc-800"
                        id="_email"
                        placeholder="Your Email"
                        name="email"
                        type="email"
                    />
                </div>
                <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                    <label className="block font-medium" htmlFor="_message">
                        Message
                    </label>
                    <textarea
                        className="min-h-[80px] w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-2 focus:ring-sky-500 dark:border-zinc-700 dark:bg-zinc-800"
                        id="_message"
                        placeholder="What's on your mind?"
                        name="message"
                    />
                </div>
                <button className="w-full rounded-md bg-sky-500 px-4 py-2 text-white font-medium transition-colors hover:bg-sky-600 focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 dark:bg-sky-700 dark:hover:bg-sky-600">
                    Submit
                </button>
            </form>
        </div>
    );
}
