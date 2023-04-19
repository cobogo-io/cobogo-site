import { AnimatePresence, motion, useInView } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, SetStateAction, useRef } from 'react'
import Button from './Button'

interface CarrouselProps {
  selectedProduct: string
  setSelectedProduct: Dispatch<SetStateAction<string>>
}

export default function Carrousel(props: CarrouselProps) {
  const { t } = useTranslation('common')

  const carrouselRef = useRef(null)
  const carrouselRefIsInView = useInView(carrouselRef, { once: true })

  const products = [
    {
      id: 'community',
      background:
        'bg-home-carrousel-community-background-mobile lg:bg-home-carrousel-community-background',
      image: '/images/home-productive-deal-flow-community.svg',
      cube: '/images/cobogo-community-cube.svg',
      backgroundColor: 'bg-yellow-community',
      borderColor: 'border-yellow-community',
      textColor: 'text-yellow-community',
      title: 'Community',
      subtitle: (
        <h1 className="font-bold text-[27px] lg:text-[40px] leading-[37px] lg:leading-[55px]">
          {t('A game changer')} <br />
          <span className="text-yellow">{t('community')}</span>
        </h1>
      ),
      description:
        'Formed by Creators, investors and enthusiasts of the Creator Economy created boosting market knowledge, research and development to find the next early stage Creators to be invested.',
      buttonHref: '/community',
    },
    {
      id: 'social',
      background:
        'bg-home-carrousel-social-background-mobile lg:bg-home-carrousel-social-background',
      image: '/images/home-productive-deal-flow-social.svg',
      cube: '/images/cobogo-social-cube.svg',
      backgroundColor: 'bg-blue-social',
      borderColor: 'border-blue-social',
      textColor: 'text-blue-social',
      title: 'Social',
      subtitle: (
        <h1 className="font-bold text-[27px] lg:text-[40px] leading-[37px] lg:leading-[55px]">
          {t('Creator as a')}
          <br /> <span className="text-blue">{t('business platform')}</span>
        </h1>
      ),
      description:
        'A all in one tool to showcase a Creators work and engagement metrics to investors and partners in a professional and automated way. All data is verified and authenticated by the Creators social media.',
      buttonHref: 'https://cobogo.social/',
    },

    {
      id: 'launchpad',
      background:
        'bg-home-carrousel-launchpad-background-mobile lg:bg-home-carrousel-launchpad-background',
      image: '/images/home-productive-deal-flow-launchpad.svg',
      cube: '/images/cobogo-launchpad-cube.svg',
      backgroundColor: 'bg-pink-launchpad',
      borderColor: 'border-pink-launchpad',
      textColor: 'text-pink-launchpad',
      title: 'Launchpad',
      subtitle: (
        <h1 className="font-bold text-[27px] lg:text-[40px] leading-[37px] lg:leading-[55px]">
          {t('Getting Creators')} <br />{' '}
          <span className="text-pink">{t('ready to fly')}</span>
        </h1>
      ),
      description:
        'A complete training and acceleration program for Creators who need to professionalize and grow their businesses.',
      buttonHref: '/launchpad',
    },
  ]

  return (
    <section className="flex items-center justify-center w-full py-16 lg:py-32 min-h-[945px]">
      <div ref={carrouselRef} />

      {carrouselRefIsInView && (
        <motion.div className="w-full max-w-[1300px] flex flex-col">
          <div className="flex items-center w-full justify-between px-7 lg:px-24 py-6">
            <h2 className="lg:text-2xl font-medium">
              {t('Productized deal-flow')}
            </h2>

            <div className="flex items-center gap-4 transition-colors">
              {products.map(product => {
                if (product.id === props.selectedProduct) {
                  return (
                    <div
                      key={product.id}
                      className={`${product.backgroundColor} rounded-full h-3 lg:h-4 w-3 lg:w-4`}
                    />
                  )
                } else {
                  return (
                    <div
                      key={product.id}
                      className="bg-white/30 rounded-full h-3 lg:h-4 w-3 lg:w-4"
                    />
                  )
                }
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {products.map(product => {
              if (product.id === props.selectedProduct) {
                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                    transition={{ delay: 0.25, duration: 1 }}
                    className={`${product.background} bg-cover lg:rounded-[40px] w-full h-[892px] lg:h-[865px] px-7 lg:px-24 py-16 flex flex-col items-center justify-start gap-14`}
                  >
                    {product.image && (
                      <div className="relative min-w-[125px] lg:min-w-[257px] min-h-[107px] lg:min-h-[220px]">
                        <Image src={product.image as string} fill alt="Image" />
                      </div>
                    )}

                    {product.cube && (
                      <div className="flex lg:hidden">
                        <Image
                          src={product.cube as string}
                          width={120}
                          height={120}
                          alt="Cube"
                        />
                      </div>
                    )}

                    <div className="flex items-center justify-between w-full">
                      <div className="flex flex-col max-w-[630px] w-full gap-6">
                        <h2
                          className={`font-bold text-xl ${product.textColor}`}
                        >
                          {product.title}
                        </h2>

                        {product.subtitle}

                        <p className="lg:text-xl leading-[26px] lg:leading-[32px]">
                          {t(product.description)}
                        </p>

                        <Link href={product.buttonHref as string}>
                          <Button
                            text={t('learn more')}
                            borderColor={`${product.borderColor}`}
                          />
                        </Link>
                      </div>

                      {product.cube && (
                        <div className="hidden lg:flex">
                          <Image
                            src={product.cube as string}
                            width={431}
                            height={439}
                            alt="Cube"
                          />
                        </div>
                      )}
                    </div>
                  </motion.div>
                )
              }
            })}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  )
}
