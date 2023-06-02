import { Variants, motion, useInView } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, SetStateAction, useRef } from 'react'
import Button from '../Button'
import ProductiveDealFlow from './ProductiveDealFlow'

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

      cube: '/images/cobogo-community-cube.svg',
      backgroundColor: 'bg-yellow-community',
      borderColor: 'border-yellow-community',
      textColor: 'text-yellow-community',
      title: 'Community',
      subtitle: (
        <h1 className="font-bold text-[27px] lg:text-[35px] leading-[37px] lg:leading-[45px]">
          Hey Creator, <br />
          <span className="text-yellow">{t('your journey begins here!')}</span>
        </h1>
      ),
      description:
        'Join the largest community of Creators who are creating their own businesses from their audiences, learn how to produce their knowledge, manage your company and attract investment to carry out your biggest projects. In addition to having access to exclusive benefits!',
      buttonHref: '/community',
    },
    {
      id: 'social',
      cube: '/images/cobogo-social-cube.svg',
      backgroundColor: 'bg-blue-social',
      borderColor: 'border-blue-social',
      textColor: 'text-blue-social',
      title: 'Crowdfunding',
      subtitle: (
        <h1 className="font-bold text-[27px] lg:text-[35px] leading-[37px] lg:leading-[45px]">
          {t('The platform where')}
          <br />{' '}
          <span className="text-blue">{t("Creators' dreams come true")}</span>
        </h1>
      ),
      description:
        'More than offering short-term benefits to the audience, at Cobogo it is possible to share the success of a Creator, offering part of your revenue or even a share in the company to your followers and investors, in exchange for enough capital to make your projects more viable. ambitious.',
      buttonHref: 'https://forms.gle/XTB2e3VDUZVDsvRn7/',
    },
  ]

  const carrouselVariants: Variants = {
    community: {
      transform: 'translateX(-0%)',
    },
    social: {
      transform: 'translateX(-50%)',
    },
  }

  const backgroundVariants: Variants = {
    community: {
      stopColor: '#E7E04F',
    },
    social: {
      stopColor: '#00B9E9',
    },
  }

  return (
    <section className="flex items-center justify-center w-full py-16 lg:py-32">
      <div ref={carrouselRef} />

      {carrouselRefIsInView && (
        <motion.div className="w-full flex flex-col relative overflow-hidden">
          <div className="flex justify-center">
            <div className="flex items-center w-full max-w-[1110px] justify-between px-7 lg:px-0 py-6">
              <h2 className="lg:text-2xl font-medium">
                {t('How it all happens')}
              </h2>

              <div className="flex items-center gap-4 transition-colors">
                {products.map(product => {
                  if (product.id === props.selectedProduct) {
                    return (
                      <button
                        key={product.id}
                        className={`${product.backgroundColor} rounded-full h-3 lg:h-4 w-3 lg:w-4`}
                      />
                    )
                  } else {
                    return (
                      <button
                        key={product.id}
                        className="bg-white/30 rounded-full h-3 lg:h-4 w-3 lg:w-4"
                        onClick={() => props.setSelectedProduct(product.id)}
                      />
                    )
                  }
                })}
              </div>
            </div>
          </div>

          <button
            className="absolute left-2 lg:left-7 top-[350px] lg:top-1/2 z-10 flex"
            onClick={() => {
              props.selectedProduct === 'social' &&
                props.setSelectedProduct('community')
            }}
            disabled={props.selectedProduct === 'community'}
          >
            <Image
              src="/images/back-icon.svg"
              width={48}
              height={48}
              alt="Back icon"
            />
          </button>

          <button
            className="absolute right-2 lg:right-7 top-[350px] lg:top-1/2 z-10 flex"
            onClick={() => {
              props.selectedProduct === 'community' &&
                props.setSelectedProduct('social')
            }}
            disabled={props.selectedProduct === 'social'}
          >
            <Image
              src="/images/skip-icon.svg"
              width={48}
              height={48}
              alt="Back icon"
            />
          </button>

          <div className="relative">
            <svg
              viewBox="0 0 1299 844"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full absolute"
            >
              <g opacity="0.2" filter="url(#filter0_f_8054_4164)">
                <path
                  d="M481.932 88.6105C725.614 103.439 1154.72 -123.693 1169.99 96.9022C1185.26 317.498 842.815 858.511 599.133 843.684C355.452 828.856 145.533 638.007 130.265 417.412C114.997 196.816 238.251 73.784 481.932 88.6105Z"
                  fill="url(#paint0_angular_8054_4164)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_8054_4164"
                  x="-271"
                  y="-400"
                  width="1841.48"
                  height="1643.98"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="200"
                    result="effect1_foregroundBlur_8054_4164"
                  />
                </filter>
                <radialGradient
                  id="paint0_angular_8054_4164"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(649.742 421.992) rotate(90) scale(421.992 520.742)"
                >
                  <stop stop-color="#B3EFFF" className="hidden lg:flex" />
                  <motion.stop
                    animate={props.selectedProduct}
                    variants={backgroundVariants}
                    offset="0.572917"
                  />
                </radialGradient>
                <linearGradient
                  id="paint1_linear_8054_4164"
                  x1="971"
                  y1="170"
                  x2="971"
                  y2="-7.17299"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>

            <ProductiveDealFlow
              selectedProduct={props.selectedProduct}
              setSelectedProduct={props.setSelectedProduct}
            />

            <motion.div
              animate={props.selectedProduct}
              variants={carrouselVariants}
              className="flex w-[200%]"
            >
              {products.map(product => {
                return (
                  <motion.div
                    key={product.id}
                    className={`z-10 relative bg-cover w-[100%] px-7 lg:px-24 pb-8 lg:pb-16 pt-[200px] lg:pt-[250px] flex flex-col items-center justify-start gap-14`}
                  >
                    <div className="w-full h-[105px] lg:h-[120px] absolute top-0 bg-white/5" />

                    {product.cube && (
                      <motion.div
                        initial={{ x: 400, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{
                          x: -400,
                          opacity: 0,
                          transition: { duration: 0.5 },
                        }}
                        className="flex lg:hidden"
                      >
                        <Image
                          src={product.cube as string}
                          width={120}
                          height={120}
                          alt="Cube"
                        />
                      </motion.div>
                    )}

                    <motion.div
                      initial={{ x: 400, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{
                        x: -400,
                        opacity: 0,
                        transition: { duration: 0.5 },
                      }}
                      className="flex w-full max-w-[1110px]"
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="flex flex-col max-w-[550px] w-full gap-6">
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
                              width={380}
                              height={380}
                              alt="Cube"
                            />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </motion.div>
      )}
    </section>
  )
}
