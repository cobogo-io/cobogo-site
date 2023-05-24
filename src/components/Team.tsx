import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { useRef } from 'react'
import Profile from './Profile'

export default function Team() {
  const { t } = useTranslation('common')

  const teamRef = useRef(null)
  const teamRefIsInView = useInView(teamRef, { once: true })

  return (
    <section className="flex items-center justify-center w-full py-16 lg:py-32 relative min-h-[437px]">
      {teamRefIsInView && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ delay: 0.25, duration: 1 }}
          className="absolute hidden lg:flex"
        >
          <Image
            src="/images/home-related-content-background.svg"
            width={1052}
            height={1044}
            alt="Home related content background"
          />
        </motion.div>
      )}

      <div className="w-full max-w-[1110px] flex flex-col lg:flex-row items-center justify-between z-10 relative">
        <div ref={teamRef} />

        {teamRefIsInView && (
          <div className="flex flex-col w-full gap-8 lg:gap-16">
            <div className="flex flex-col gap-5 lg:gap-10 px-7 lg:px-0">
              <motion.h2
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25, duration: 1 }}
                className="text-[30px] lg:text-[40px] text-transparent bg-clip-text bg-meet-the-team-text-gradient"
              >
                {t('Founders')}
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex justify-between lg:grid lg:grid-cols-4 overflow-auto gap-10 bg-gray lg:bg-transparent py-8 lg:py-0 px-7 lg:px-0"
            >
              <Profile
                imageSrc="/images/giovana-simao-profile-image.svg"
                name="Giovana Simão"
                position="Co-founder / CEO"
                socials={[
                  {
                    href: 'https://www.instagram.com/bitdasminas/',
                    icon: (
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14 18.375C16.4162 18.375 18.375 16.4162 18.375 14C18.375 11.5838 16.4162 9.625 14 9.625C11.5838 9.625 9.625 11.5838 9.625 14C9.625 16.4162 11.5838 18.375 14 18.375Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M18.8125 3.9375H9.1875C6.28801 3.9375 3.9375 6.28801 3.9375 9.1875V18.8125C3.9375 21.712 6.28801 24.0625 9.1875 24.0625H18.8125C21.712 24.0625 24.0625 21.712 24.0625 18.8125V9.1875C24.0625 6.28801 21.712 3.9375 18.8125 3.9375Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19.6875 9.625C20.4124 9.625 21 9.03737 21 8.3125C21 7.58763 20.4124 7 19.6875 7C18.9626 7 18.375 7.58763 18.375 8.3125C18.375 9.03737 18.9626 9.625 19.6875 9.625Z"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                  {
                    href: 'https://www.linkedin.com/in/giovana-sim%C3%A3o/',
                    icon: (
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.1875 3.9375H4.8125C4.32925 3.9375 3.9375 4.32925 3.9375 4.8125V23.1875C3.9375 23.6707 4.32925 24.0625 4.8125 24.0625H23.1875C23.6707 24.0625 24.0625 23.6707 24.0625 23.1875V4.8125C24.0625 4.32925 23.6707 3.9375 23.1875 3.9375Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.125 12.25V19.25"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.625 12.25V19.25"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.125 15.3125C13.125 14.5003 13.4477 13.7213 14.022 13.147C14.5963 12.5727 15.3753 12.25 16.1875 12.25C16.9997 12.25 17.7787 12.5727 18.353 13.147C18.9273 13.7213 19.25 14.5003 19.25 15.3125V19.25"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.625 10.0625C10.3499 10.0625 10.9375 9.47487 10.9375 8.75C10.9375 8.02513 10.3499 7.4375 9.625 7.4375C8.90013 7.4375 8.3125 8.02513 8.3125 8.75C8.3125 9.47487 8.90013 10.0625 9.625 10.0625Z"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                ]}
                titleForDescription="Engineer and Creator"
                description="Reference Creator in Brazil. Elected by Forbes one of the top 5 most influential woman entrepreneur in the Brazilian market."
              />

              <Profile
                imageSrc="/images/andre-pannos-profile-image.svg"
                name="André Pannos"
                position="Co-founder / CMO"
                socials={[
                  {
                    href: 'https://www.instagram.com/andre.pannos/',
                    icon: (
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14 18.375C16.4162 18.375 18.375 16.4162 18.375 14C18.375 11.5838 16.4162 9.625 14 9.625C11.5838 9.625 9.625 11.5838 9.625 14C9.625 16.4162 11.5838 18.375 14 18.375Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M18.8125 3.9375H9.1875C6.28801 3.9375 3.9375 6.28801 3.9375 9.1875V18.8125C3.9375 21.712 6.28801 24.0625 9.1875 24.0625H18.8125C21.712 24.0625 24.0625 21.712 24.0625 18.8125V9.1875C24.0625 6.28801 21.712 3.9375 18.8125 3.9375Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19.6875 9.625C20.4124 9.625 21 9.03737 21 8.3125C21 7.58763 20.4124 7 19.6875 7C18.9626 7 18.375 7.58763 18.375 8.3125C18.375 9.03737 18.9626 9.625 19.6875 9.625Z"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                  {
                    href: 'https://www.tiktok.com/@andrepannos/',
                    icon: (
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.375 11.5938C20.16 12.8754 22.3025 13.5641 24.5 13.5625V9.1875C22.8755 9.1875 21.3176 8.54219 20.169 7.39353C19.0203 6.24487 18.375 4.68695 18.375 3.0625H14V17.0625C14 17.6106 13.8529 18.1486 13.574 18.6204C13.2952 19.0922 12.8949 19.4806 12.4148 19.7449C11.9347 20.0093 11.3925 20.14 10.8447 20.1234C10.2969 20.1068 9.76362 19.9435 9.30044 19.6505C8.83726 19.3576 8.46119 18.9457 8.21145 18.4579C7.96171 17.97 7.84745 17.4241 7.88061 16.877C7.91376 16.33 8.09311 15.8019 8.39994 15.3478C8.70677 14.8936 9.12983 14.5302 9.625 14.2953V9.74531C8.2322 9.99502 6.93953 10.6369 5.89873 11.5955C4.85793 12.5542 4.1122 13.7898 3.74907 15.1574C3.38595 16.5251 3.42049 17.9679 3.84866 19.3166C4.27682 20.6653 5.08083 21.8638 6.16631 22.7715C7.2518 23.6793 8.5737 24.2585 9.97686 24.4413C11.38 24.6241 12.8062 24.4028 14.088 23.8034C15.3698 23.204 16.454 22.2514 17.2133 21.0574C17.9727 19.8634 18.3757 18.4775 18.375 17.0625V11.5938Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    ),
                  },
                  {
                    href: 'https://www.linkedin.com/in/andr%C3%A9-pannos-bba72869/',
                    icon: (
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.1875 3.9375H4.8125C4.32925 3.9375 3.9375 4.32925 3.9375 4.8125V23.1875C3.9375 23.6707 4.32925 24.0625 4.8125 24.0625H23.1875C23.6707 24.0625 24.0625 23.6707 24.0625 23.1875V4.8125C24.0625 4.32925 23.6707 3.9375 23.1875 3.9375Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.125 12.25V19.25"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.625 12.25V19.25"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.125 15.3125C13.125 14.5003 13.4477 13.7213 14.022 13.147C14.5963 12.5727 15.3753 12.25 16.1875 12.25C16.9997 12.25 17.7787 12.5727 18.353 13.147C18.9273 13.7213 19.25 14.5003 19.25 15.3125V19.25"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.625 10.0625C10.3499 10.0625 10.9375 9.47487 10.9375 8.75C10.9375 8.02513 10.3499 7.4375 9.625 7.4375C8.90013 7.4375 8.3125 8.02513 8.3125 8.75C8.3125 9.47487 8.90013 10.0625 9.625 10.0625Z"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                ]}
                titleForDescription="Intl. Business and Creator"
                description="+10 years of experience in consumer goods, agencies and video production companies developing creator marketing strategies."
              />

              <Profile
                imageSrc="/images/pedro-alves-profile-image.svg"
                name="Pedro Alves"
                position="Co-founder / CFO"
                socials={[
                  {
                    href: 'https://twitter.com/pdotal?t=FQjEMEJ00nohZWzfL79WLQ&s=09/',
                    icon: (
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.9996 9.62491C13.9996 7.21866 16.0231 5.2171 18.4293 5.24991C19.272 5.25964 20.0939 5.51254 20.7963 5.97821C21.4987 6.44388 22.0516 7.10251 22.3887 7.87491H26.2496L22.7168 11.4077C22.4888 14.9565 20.9179 18.2852 18.3234 20.7171C15.7289 23.1491 12.3057 24.5017 8.74961 24.4999C5.24961 24.4999 4.37461 23.1874 4.37461 23.1874C4.37461 23.1874 7.87461 21.8749 9.62461 19.2499C9.62461 19.2499 2.62461 15.7499 4.37461 6.12491C4.37461 6.12491 8.74961 10.4999 13.9996 11.3749V9.62491Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    ),
                  },
                  {
                    href: 'https://www.linkedin.com/in/pedro-alves-2313a51b2/',
                    icon: (
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.1875 3.9375H4.8125C4.32925 3.9375 3.9375 4.32925 3.9375 4.8125V23.1875C3.9375 23.6707 4.32925 24.0625 4.8125 24.0625H23.1875C23.6707 24.0625 24.0625 23.6707 24.0625 23.1875V4.8125C24.0625 4.32925 23.6707 3.9375 23.1875 3.9375Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.125 12.25V19.25"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.625 12.25V19.25"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.125 15.3125C13.125 14.5003 13.4477 13.7213 14.022 13.147C14.5963 12.5727 15.3753 12.25 16.1875 12.25C16.9997 12.25 17.7787 12.5727 18.353 13.147C18.9273 13.7213 19.25 14.5003 19.25 15.3125V19.25"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.625 10.0625C10.3499 10.0625 10.9375 9.47487 10.9375 8.75C10.9375 8.02513 10.3499 7.4375 9.625 7.4375C8.90013 7.4375 8.3125 8.02513 8.3125 8.75C8.3125 9.47487 8.90013 10.0625 9.625 10.0625Z"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                ]}
                titleForDescription="MSc Economics"
                description="Creator Monetization Specialist Experience in Blockchain and Creator Economy for 3 years."
              />

              <Profile
                imageSrc="/images/rafael-lima-profile-image.svg"
                name="Rafael Lima"
                position="Co-founder / CTO"
                socials={[
                  {
                    href: 'https://rafael.adm.br/',
                    icon: (
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14 24.5C19.799 24.5 24.5 19.799 24.5 14C24.5 8.20101 19.799 3.5 14 3.5C8.20101 3.5 3.5 8.20101 3.5 14C3.5 19.799 8.20101 24.5 14 24.5Z"
                          stroke="black"
                          stroke-width="2"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M3.5 14H24.5"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14 24.2154C16.4162 24.2154 18.375 19.6417 18.375 13.9998C18.375 8.35787 16.4162 3.78418 14 3.78418C11.5838 3.78418 9.625 8.35787 9.625 13.9998C9.625 19.6417 11.5838 24.2154 14 24.2154Z"
                          stroke="black"
                          stroke-width="2"
                          stroke-miterlimit="10"
                        />
                      </svg>
                    ),
                  },
                ]}
                titleForDescription="Software Developer"
                description="Founder of Impulso and Kobana. Software development experience for over 25 years."
              />
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}
