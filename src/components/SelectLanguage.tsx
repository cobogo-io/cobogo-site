import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';

export default function SelectLanguage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const router = useRouter();
  const { locale } = useRouter();

  function handleChangeLanguage(locale: string) {
    router.push(router.pathname, router.asPath, { locale });
  }

  function handleOpenModal() {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <div className="relative inline-block">
      <div
        className="w-32 p-2 bg-secondary flex justify-center items-center cursor-pointer"
        onClick={handleOpenModal}
      >
        <span className="font-bold">
          {locale === 'en' && 'english'}
          {locale === 'pt' && 'portuguese'}
          {locale === 'es' && 'spanish'}
          {locale === 'tr' && 'turkish'}{' '}
          <Image
            src="/icons/arrow-down-icon.svg"
            width={13}
            height={7}
            alt="arrow down icon"
          />
        </span>
      </div>

      {modalIsOpen && (
        <div className=" bg-secondary flex flex-col justify-center items-center absolute right-0 cursor-pointer">
          {router?.locales?.map((locale) => {
            return (
              <div
                key={locale}
                className="p-2 w-48 hover:bg-primary font-bold"
                onClick={() => handleChangeLanguage(locale)}
              >
                {locale === 'en' && 'english'}
                {locale === 'pt' && 'portuguese'}
                {locale === 'es' && 'spanish'}
                {locale === 'tr' && 'turkish'}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
