import { useTranslation } from 'next-i18next';

export default function Header(): JSX.Element {
  const { t } = useTranslation('header');

  return (
    <section className="bg-primary flex flex-col justify-center items-center px-[20px] py-[100px]">
      <h1 className="font-bold text-[50px] sm:text-[65px] text-white text-center">
        shared creator monetization
      </h1>

      <h2 className="text-[24px] text-white max-w-[975px] text-center mb-[12px]">
        cobogo allows fans to support their favorite Content Creators channels
        by splitting the rewards of their investment in an easy way.
      </h2>

      <video
        autoPlay
        preload="auto"
        loop
        playsInline
        className="w-[1269px] max-h-[734px]"
      >
        <source src="/videos/animation.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
