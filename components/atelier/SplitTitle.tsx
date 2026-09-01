export const SplitTitle = ({
  children,
  className = "",
  distance = 10,
}: {
  children: React.ReactNode;
  className?: string;
  distance?: number;
}) => {
  return (
    <span
      className={`
        group/split relative inline-block
        cursor-default select-none
        ${className}
      `}
    >
      {/* Garde la largeur/hauteur réelle du texte */}
      <span aria-hidden="true" className="block opacity-0">
        {children}
      </span>

      {/* Partie haute */}
      <span
        aria-hidden="true"
        className={` 
          absolute inset-0
          text-current

          [clip-path:inset(0_0_50%_0)]

          transition-transform
          duration-700
          ease-[cubic-bezier(.16,1,.3,1)]

          group-hover/split:translate-x-[${distance}px]
          group-hover/split:-translate-y-[1px]

          active:translate-x-[6px]
          active:-translate-y-[1px]

          motion-reduce:transition-none
        `}
      >
        {children}
      </span>

      {/* Partie basse */}
      <span
        aria-hidden="true"
        className={`
          absolute inset-0
          text-current

          [clip-path:inset(50%_0_0_0)]

          transition-[transform,color]
          duration-700
          ease-[cubic-bezier(.16,1,.3,1)]

          group-hover/split:-translate-x-[${distance}px]
          group-hover/split:translate-y-[1px]
          group-hover/split:text-terracotta

          active:-translate-x-[6px]
          active:translate-y-[1px]
          active:text-terracotta

          motion-reduce:transition-none
        `}
      >
        {children}
      </span>

      {/* Texte pour lecteurs d'écran */}
      <span className="sr-only">{children}</span>
    </span>
  );
};
