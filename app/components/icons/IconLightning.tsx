interface IconLightningProps {
  className?: string;
}

export default function IconLightning({ className = "h-5 w-5" }: IconLightningProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M13 10V3L4 14h7v7l9-11h-7z" 
      />
    </svg>
  );
} 