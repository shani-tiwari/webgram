'use client';

import emailjs from '@emailjs/browser';
import Navbar from "@/components/layout/Navbar";
import Footer, { SocialIcon } from "@/components/layout/Footer";
import SectionHeading from "@/components/shared/SectionHeading";
import { useState } from 'react';
import { Email, InstagramIcon, Linkedin01Icon, NewTwitterIcon } from '@hugeicons/core-free-icons';

type FormEvent = React.FormEvent<HTMLFormElement>;
interface Form{
    name: string;
    email: string;
    instagram: string;
    message: string;
}

export default function Contact() {

    const [form, setForm] = useState<Form>({
      name: "",
        email: "", 
        instagram: "",
        message: "",
    });

    let message = '';

    const sendEmail = (e:FormEvent) => {
    e.preventDefault();
    emailjs.send(
      // process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      // process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      "service_9wh2vje",
      "template_mb05fjs",
      {
        name: form.name,
        email: form.email,
        instagram: form.instagram,
        message: form.message,
      },
      "Qmvgk6TmgzEtWkpwC"
      // process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!, 
    ) 
    .then(() => {
      console.log('SUCCESS!');
      message = "You will be contacted shortly."
      setForm({
        name: "",
        email: "",
        instagram: "",
        message: "",
      });
    }, (error) => {
      console.log('FAILED...', error);
      // message = "Failed to send message. Please try again."
    });
  };
  const socials = [
    { icon: InstagramIcon, href: "https://instagram.com/shani.develops", label: "Instagram" },
    { icon: NewTwitterIcon, href: "https://x.com/shanidevelops", label: "X (Twitter)" },
    { icon: Linkedin01Icon, href: "https://linkedin.com/in/shanitiwarii", label: "LinkedIn" },
    // { icon: Github01Icon, href: "https://github.com/shani-tiwari", label: "GitHub" },
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
              <form onSubmit={sendEmail} className="grid gap-4">
                {/* add labels in each of them */}
                <div className="flex flex-col">
                  <label htmlFor="name">Your Name*</label>
                <input
                  type="text"
                  placeholder="Shani Tiwari"
                  required
                  value={form.name}
                  onChange={(e) => setForm({...form, name: e.target.value})}
                  name="name"
                  className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                />
                </div>
                <div className="flex flex-col">
                <label htmlFor="instagram">Instagram Handle*</label>
                <input
                  type="text" 
                  placeholder="@shani.develops"
                  required
                  value={form.instagram}
                  onChange={(e) => setForm({...form, instagram: e.target.value})}
                  name="instagram"
                  className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                />
                </div>
                <div className="flex flex-col">
                <label htmlFor="email">Email address*</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="shannitiwari2021@gmail.com"
                  value={form.email}
                  onChange={(e) => setForm({...form, email: e.target.value})}
                  className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                />
                </div>
                <div className="flex flex-col">
                <label htmlFor="message">Tell us about your project*</label>
                <textarea
                  placeholder="I need a modern and responsive website for my café."
                  name="message"
                  rows={6}
                  required
                  value={form.message}
                  onChange={(e) => setForm({...form, message: e.target.value})}
                  className="w-full rounded-xl resize-none border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-xl rounded-t-4xl outline-offset-2 outline-2 outline-accent/50 bg-accent px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
                >
                  Send Message
                </button>
              </form>
              {
                message.length > 2 && (
                  <p className="mt-4 text-center text-sm text-muted-foreground">{message}</p>
                )
              }
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
