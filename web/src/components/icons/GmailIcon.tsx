export default function GmailIcon({ 
  className = "w-6 h-6",
  colored = true
}: { 
  className?: string;
  colored?: boolean;
}) {
  if (colored) {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left blue pillar */}
        <path
          d="M3 18.5V7.5L9.5 12.5L3 17.5V18.5Z"
          fill="#4285F4"
        />
        {/* Right green pillar */}
        <path
          d="M21 18.5V7.5L14.5 12.5L21 17.5V18.5Z"
          fill="#34A853"
        />
        {/* Left top red fold */}
        <path
          d="M3 5.5C3 4.4 3.9 3.5 5 3.5H6.5L12 7.7L17.5 3.5H19C20.1 3.5 21 4.4 21 5.5V7.5L12 14.5L3 7.5V5.5Z"
          fill="#EA4335"
        />
        {/* Yellow corner accent */}
        <path
          d="M19 3.5H20C20.55 3.5 21 3.95 21 4.5V7.5L17.5 3.5H19Z"
          fill="#FBBC04"
        />
        {/* Bottom bar / envelope body */}
        <path
          d="M3 18.5C3 19.6 3.9 20.5 5 20.5H19C20.1 20.5 21 19.6 21 18.5V17.5L12 10.5L3 17.5V18.5Z"
          fill="#EA4335"
          opacity="0.9"
        />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
    </svg>
  );
}
