"use client";

import { useEffect, useState } from "react";
import Section from "./design/Section";

const Contact = () => {
  const [footerHeight, setFooterHeight] = useState<number>();

  useEffect(() => {
    let footerHeight = document.getElementById("footer")?.getBoundingClientRect().height;
    setFooterHeight(footerHeight);
  }, []);

  return (
    <Section 
      id="contact"
      crosses
    >
      <div className={`container h-[calc(100vh-${footerHeight})]`}>
        Contact
      </div>
    </Section>
  )
}

export default Contact;