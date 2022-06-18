import { useTranslation } from 'next-i18next';

export default function Header() {
  const { t } = useTranslation('header');

  return (
    <section className="bg-primary flex flex-col justify-center items-center px-[20px] py-[100px]">
      <h1 className="font-bold text-[36px] sm:text-[65px] text-white text-center">
        shared creator monetization
      </h1>

      <h2 className="sm:text-[24px] text-white max-w-[975px] text-center mb-[32px]">
        cobogo allows fans to support their favorite Content Creators channels
        by splitting the rewards of their investment in an easy way.
      </h2>

      <video
        autoPlay
        preload="auto"
        loop
        muted
        className="w-[1269px] max-h-[734px]"
      >
        <source src="/videos/animation.webm" type="video/webm" />
      </video>
    </section>
  );
}
