import React from 'react';

const whatsappNumber = '+27796456489';
const whatsappLink = `https://wa.me/27796456489`;
const telLink = `tel:${whatsappNumber}`;

export default function FloatingContact() {
  return (
    <div
      className="fixed right-4 z-40 flex flex-col items-end gap-2 pointer-events-auto"
      style={{ bottom: 'calc(env(safe-area-inset-bottom, 0) + 1rem)'}}
    >
      {/* Call button (above WhatsApp) */}
      <a
        href={telLink}
        title="Call us"
        aria-label="Call us"
        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-600 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hover:scale-105 transition-transform duration-150 focus:outline-none focus:ring-2 focus:ring-sky-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.2 3.6a1 1 0 01-.217.95L8.5 10.5a11 11 0 005 5l1.27-2.709a1 1 0 01.95-.217l3.6 1.2A1 1 0 0121 17.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 4V3a2 2 0 012-2z" />
        </svg>
      </a>

      {/* WhatsApp button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hover:scale-105 transition-transform duration-150 focus:outline-none focus:ring-2 focus:ring-green-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.52 3.48A11.95 11.95 0 0012 0C5.373 0 0 5.373 0 12c0 2.116.556 4.186 1.61 6.02L0 24l6.17-1.6A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.23-6.2-3.48-8.52zM12 21.5c-1.9 0-3.75-.5-5.32-1.44l-.38-.22-3.66.95.98-3.57-.25-.39A9.5 9.5 0 012.5 12 9.5 9.5 0 1112 21.5zM17.06 14.36c-.25-.12-1.47-.72-1.7-.8-.23-.09-.4-.12-.57.12-.17.25-.66.8-.81.96-.14.17-.28.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.015-.38.11-.5.11-.11.25-.28.38-.42.13-.14.17-.25.25-.42.08-.17.04-.3-.02-.42-.06-.12-.57-1.37-.78-1.88-.21-.5-.43-.44-.57-.45-.15-.01-.32-.01-.49-.01-.17 0-.44.06-.67.3-.23.24-.86.84-.86 2.06 0 1.22.88 2.4 1 2.57.12.17 1.72 2.63 4.17 3.69 1.33.57 2.37.91 3.19 1.17 1.34.44 2.56.38 3.52.23.54-.09 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.5-.31z" />
        </svg>
      </a>
    </div>
  );
}
