import React from "react";
import { Icon } from "@iconify/react";

const WhatsAppFab: React.FC = () => {
  const whatsappNumber = "923299865814";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <Icon icon="logos:whatsapp-icon" width={32} height={32} />
    </a>
  );
};

export default WhatsAppFab;
