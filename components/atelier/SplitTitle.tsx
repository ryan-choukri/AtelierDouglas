export const SplitTitle = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={`group relative inline-block cursor-default select-none ${className}`}
    >
      {/* Garde exactement la taille du texte */}
      <span aria-hidden="true" className="block opacity-0">
        {children}
      </span>

      {/* Moitié haute */}
      <span
        aria-hidden="true"
        style={{ clipPath: "inset(0 0 50% 0)" }}
        className="
          pointer-events-none
          absolute inset-0
          text-current

          transition-transform
          duration-700
          ease-[cubic-bezier(.16,1,.3,1)]

          group-hover:translate-x-[10px]
          group-hover:-translate-y-[1px]

          motion-reduce:transition-none
        "
      >
        {children}
      </span>

      {/* Moitié basse */}
      <span
        aria-hidden="true"
        style={{ clipPath: "inset(50% 0 0 0)" }}
        className="
          pointer-events-none
          absolute inset-0
          text-current

          transition-all
          duration-700
          ease-[cubic-bezier(.16,1,.3,1)]

          group-hover:-translate-x-[10px]
          group-hover:translate-y-[1px]
          group-hover:text-terracotta

          motion-reduce:transition-none
        "
      >
        {children}
      </span>

      <span className="sr-only">{children}</span>
    </span>
  );
};
