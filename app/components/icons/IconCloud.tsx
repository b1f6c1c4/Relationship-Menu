interface IconCloudProps {
  className?: string;
}

export default function IconCloud({ className = "h-5 w-5" }: IconCloudProps) {
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
        strokeWidth={1.5} 
        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
      />
    </svg>
  );
} 