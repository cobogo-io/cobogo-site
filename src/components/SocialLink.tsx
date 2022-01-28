import Image from 'next/image';

interface SocialLinkProps {
  href?: string;
  icon: string;
  placeholder: string;
}

export default function SocialLink({
  href,
  icon,
  placeholder,
}: SocialLinkProps) {
  return (
    <div className="min-w-full md:min-w-0">
      <a
        className="flex items-center md:pb-0 cursor-pointer justify-center group"
        target="_blank"
        href={href}
        rel="noopener noreferrer"
      >
        <div className="w-24 h-11 relative">
          <Image
            layout="fill"
            objectFit="contain"
            src={icon}
            alt="Email icon"
          />
        </div>
        <div className="bold-18 group-hover:text-blue">{placeholder}</div>
      </a>
    </div>
  );
}
