import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/shared/SectionHeading";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        <section className="px-4 pb-20 pt-28 sm:px-6">
          <div className="mx-auto w-full max-w-4xl">
            <SectionHeading
              label="About"
              title="Built to launch beautiful websites faster"
              description="WebGram packages responsive layouts, Tailwind styling, and polished UI patterns into template-based sites that are easy to customize."
            />

            <div className="grid gap-6 rounded-3xl border border-border bg-white p-6 shadow-sm shadow-black/5 sm:p-8">
              <p className="leading-relaxed text-muted-foreground">
                Our focus is on giving you a centered, balanced experience
                across desktop and mobile. Every major section uses a
                constrained container, consistent padding, and responsive
                spacing so the design feels intentional instead of pinned to
                the left edge.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                The templates are structured to be modular, so the page layout,
                header, and cards can evolve without breaking the overall
                rhythm.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
