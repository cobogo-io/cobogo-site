import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import Button from './Button'
import { useRouter } from 'next/router'
import Testimonial from './Testimonial'

export default function Testimonials() {
  const { t } = useTranslation('common')

  const testimonialsRef = useRef(null)
  const testimonialsRefIsInView = useInView(testimonialsRef, { once: true })

  const { locale, asPath } = useRouter()

  return (
    <div
      className={`w-full flex items-center justify-center ${
        asPath.includes('community') ? 'py-14' : 'py-16 lg:py-32'
      } px-7 relative`}
    >
      <img
        src="/images/testimonials-background.svg"
        className="absolute h-full left-0 hidden lg:flex"
      />

      <div ref={testimonialsRef} />

      <div className="w-full max-w-[1110px] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-7 lg:gap-0 min-h-[334px]">
        {testimonialsRefIsInView && (
          <div className="flex flex-col max-w-[320px] lg:max-w-[375px] w-full gap-7">
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 1 }}
              className="text-[24px] lg:text-[28px] font-bold drop-shadow-[3px_3px_0px_#00000047]"
            >
              {t('Join the most visionary and entrepreneurial Creators')}
            </motion.h2>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex items-center gap-7"
            >
              <Link
                href={
                  locale === 'pt'
                    ? 'https://docs.google.com/forms/d/e/1FAIpQLSdFwCXoiGKWTrgY1FgKYnPMB3ft0Aox7pZ_30tUU4qBJWoctQ/viewform?usp=share_link/'
                    : 'https://discord.gg/93kBxA5mbT/'
                }
                className="flex"
                target="_blank"
              >
                <Button
                  text={t('join community')}
                  borderColor="border-yellow-community"
                />
              </Link>
            </motion.div>
          </div>
        )}

        {testimonialsRefIsInView && (
          <div className="relative">
            <div className="bg-gradient-to-b from-background to-background/0 h-[100px] absolute w-full top-0" />
            <div className="bg-gradient-to-t from-background to-background/0 h-[100px] absolute w-full bottom-0" />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 1 }}
              className="flex flex-col gap-16 max-h-[600px] overflow-y-auto py-8 scrollbar-thin"
            >
              <Testimonial
                text="Cobogo is helping me take the next step in my career and become a Creator 3.0. Building and strengthening my personal brand to monetize with my audience. I’m thrilled with this partnership."
                imgSrc="/images/raul-profile-image.png"
                name="Raul"
              />

              <Testimonial
                text="You guys are helping me both to learn how to be a better creator and the mindset on how to think and act as entrepreneur."
                imgSrc="/images/nenesk-profile-image.png"
                name="Nenesk"
              />

              <Testimonial
                text="The Cobogo community made me see that it is possible to transform our creative potential into a sustainable business model."
                imgSrc="/images/gabriela-profile-image.png"
                name="Gabriela"
              />

              <Testimonial
                text="Congratulations on this startup that will be a super unicorn! And all the content you’re bringing... I’m rewatching all the classes and developing along... It’s great! Dense content that is triggering new insights, I’m listening for the second time and alongside the process!"
                imgSrc="/images/nina-profile-image.png"
                name="Nina"
              />

              <Testimonial
                text="I just to say that you have already become an essential part of my routine, and I want to thank everyone for this initiative!"
                imgSrc="/images/wesley-profile-image.png"
                name="Wesley"
              />

              <Testimonial
                text="I really enjoying participating, the idea of ​​creating a community with the intention of knowledge exchange and future investments is very good! I’m also loving the Cobogo challenge, it has given me many new ideas and opened my mind, I only have praise and gratitude for this community."
                imgSrc="/images/josy-profile-image.png"
                name="Josy"
              />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}
