import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/shared/SectionHeading";

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        <section className="px-4 pb-20 pt-28 sm:px-6">
          <div className="mx-auto w-full max-w-3xl">
            <SectionHeading
              label="Contact"
              title="Let's talk about your next site"
              description="Share your project details and we&apos;ll help you choose the right template or customize one for your brand."
            />

            <div className="rounded-3xl border border-border bg-white p-6 shadow-sm shadow-black/5 sm:p-8">
              <form className="grid gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                />
                <textarea
                  placeholder="Tell us about your project"
                  rows={6}
                  className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-accent px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
