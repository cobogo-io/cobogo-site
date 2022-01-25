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
          className="bold-24 bg-purple hover:bg-purplehover h-[50px] py-0 px-5 flex justify-center items-center"
          onClick={onClick}
        >
          <span className="text-sm md:text-xl lg:text-2xl">{placeholder}</span>
        </button>
      )}

      {color === 'purple-light' && (
        <button
          className="bold-24 bg-purplelight hover:bg-purplelighthover h-[50px] py-0 px-5 flex justify-center items-center"
          onClick={onClick}
        >
          <span className="text-sm md:text-xl lg:text-2xl">{placeholder}</span>
        </button>
      )}
    </>
  );
}
