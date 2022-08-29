import { useTranslation } from 'next-i18next';

export default function Header(): JSX.Element {
  const { t } = useTranslation('header');

  return (
    <section className="bg-primary flex flex-col justify-center items-center px-[20px] py-[50px] sm:py-[100px]">
      <h1 className="font-bold text-[50px] sm:text-[65px] text-white text-center">
        {t('Business Infrastructure for Creators')}
      </h1>

      <h2 className="text-[24px] text-white max-w-[975px] text-center mb-3">
        {t(
          'Cobogo allows Creators to become real businesses. We provide all the best tools for incorporating a US business, raising funds with whom matters the most and maximizing growth.'
        )}
      </h2>

      <video
        autoPlay
        preload="auto"
        loop
        muted
        playsInline
        className="w-[1269px] max-h-[734px] mb-3"
      >
        <source src="/videos/animation.mp4" type="video/mp4" />
      </video>

      <a
        target="_blank"
        href="https://app.cobogo.social/submit/"
        className="px-[20px] py-[10px] font-bold border-[2px] border-violet hover:cursor-pointer flex sm:hidden justify-center items-center text-white"
        rel="noreferrer"
      >
        create your profile
      </a>
    </section>
  );
}
