interface CallToActionButtonProps {
  color: 'purple' | 'purple-light';
  placeholder: string;
  onClick?: () => void;
}

export default function CallToActionButton({
  color,
  placeholder,
  onClick,
}: CallToActionButtonProps) {
  return (
    <>
      {color === 'purple' && (
        <button
          className="bold-24 bg-purple hover:bg-purplehover px-8 py-4 m-2"
          onClick={onClick}
        >
          <span className="text-sm md:text-md lg:text-lg">{placeholder}</span>
        </button>
      )}

      {color === 'purple-light' && (
        <button
          className="bold-24 bg-purplelight hover:bg-purplelighthover px-8 py-4 m-2 text-sm"
          onClick={onClick}
        >
          <span className="text-sm md:text-md lg:text-lg">{placeholder}</span>
        </button>
      )}
    </>
  );
}
