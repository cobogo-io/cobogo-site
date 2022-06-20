import Image from 'next/image';

interface SocialLinkProps {
  href?: string;
  icon: string;
}

export default function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <div className="min-w-full md:min-w-0">
      <a
        className="flex items-center md:pb-0 cursor-pointer justify-center group"
        target="_blank"
        href={href}
        rel="noopener noreferrer"
      >
        <div className="w-[50px] h-[50px] relative">
          <Image
            layout="fill"
            objectFit="contain"
            src={icon}
            alt="Email icon"
          />
        </div>
      </a>
    </div>
  );
}
