"use client";

import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Add the script to load the chatbot
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.async = true;
    script.defer = true;
    script.setAttribute("chatbotId", "GDJCEcW6d4hcmKoPPLBAT");
    script.setAttribute("domain", "www.chatbase.co");

    // Add the window configuration for the chatbot
    const scriptConfig = document.createElement("script");
    scriptConfig.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "GDJCEcW6d4hcmKoPPLBAT",
        domain: "www.chatbase.co"
      }
    `;

    // Append both scripts to the document head
    document.head.appendChild(scriptConfig);
    document.head.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.head.removeChild(scriptConfig);
      document.head.removeChild(script);
    };
  }, []);

  return null; // No visible DOM elements are rendered
};

export default Chatbot;
