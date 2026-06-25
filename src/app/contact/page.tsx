'use client';

import Navbar from "@/components/layout/Navbar";
import Footer, { SocialIcon } from "@/components/layout/Footer";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import { Email, InstagramIcon, Linkedin01Icon, NewTwitterIcon } from '@hugeicons/core-free-icons';

export default function Contact() {
  const socials = [
    { icon: InstagramIcon, href: "https://instagram.com/shani.develops", label: "Instagram" },
    { icon: NewTwitterIcon, href: "https://x.com/shanidevelops", label: "X (Twitter)" },
    { icon: Linkedin01Icon, href: "https://linkedin.com/in/shanitiwarii", label: "LinkedIn" },
    { icon: Email, href: "mailto:shanitiwari2021@gmail.com", label: "Email" },
  ];
  
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
              <ContactForm />
            </div>
            
            <div className="flex w-full justify-center items-center gap-3 my-8 bg-black/60 px-6 py-3 rounded-xl rounded-t-4xl outline-2 outline-offset-1 outline-black/30">
                {socials.map((social) => (
                    <SocialIcon key={social.label} icon={social.icon} href={social.href} label={social.label} />
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

