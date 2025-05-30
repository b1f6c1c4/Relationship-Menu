interface IconNotSetProps {
  className?: string;
}

export default function IconNotSet({ className = "" }: IconNotSetProps) {
  return (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle 
        cx="10" 
        cy="10" 
        r="3" 
        fill="rgba(139, 185, 193, 0.8)" 
      />
    </svg>
  );
} 