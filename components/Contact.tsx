"use client";

import { useEffect, useState } from "react";
import Section from "./design/Section";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [footerHeight, setFooterHeight] = useState<number>();

  // useEffect(() => {
  //   let footerHeight = document.getElementById("footer")?.getBoundingClientRect().height;
  //   setFooterHeight(footerHeight);
  // }, []);

  return (
    <Section 
      id="contact"
      crosses
    >
      <div className="container h-screen p-16 lg:p-0">
        <div className="flex flex-col min-w-[50%] max-w-[56rem] mx-auto">
          <h1 className="h1 text-center">Get in Touch</h1>
          <p className="text-center text-lg mt-4">Have a project idea or in need of a dev? I&apos;m just a couple clicks away.</p>
          {/* <h1 className="h1 text-center">Contact</h1>
          <p className="text-center text-2xl">Let's Connect</p> */}
          <ContactForm />
        </div>
      </div>
    </Section>
  )
}

export default Contact;