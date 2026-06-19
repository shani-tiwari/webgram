import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/shared/SectionHeading";

export default function Terms() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        <section className="px-4 pb-20 pt-28 sm:px-6">
          <div className="mx-auto w-full max-w-4xl">
            <SectionHeading
              label="Terms"
              title="Simple terms, clear expectations"
              description="This page is centered and padded like the rest of the site so the layout stays consistent."
            />

            <div className="space-y-6 rounded-3xl border border-border bg-white p-6 shadow-sm shadow-black/5 sm:p-8">
              <div>
                <h2 className="mb-2 text-lg font-semibold text-foreground">
                  Usage
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Use the templates and content responsibly and follow any
                  agreed project scope when commissioning a custom build.
                </p>
              </div>
              <div>
                <h2 className="mb-2 text-lg font-semibold text-foreground">
                  Delivery
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Delivery windows are estimates and can vary based on the
                  amount of customization required.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
