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
          <div className="flex flex-col mt-14 bg-dark-4 w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Contact;