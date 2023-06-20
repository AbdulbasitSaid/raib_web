"use strict";
"use client";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function WhatAppClient() {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="+234 903 000 9873"
        accountName="RAIB Consultants"
        avatar="/img/sample_female.jpeg"
        chatMessage="Hello, how can we help you?"
        darkMode={true}
        allowClickAway={true}
        allowEsc={true}
      />
    </div>
  );
}
