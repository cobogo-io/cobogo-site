import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import Button from '../Button'

export default function LaunchpadMain() {
  const { t } = useTranslation('common')

  const mainFoldRef = useRef(null)
  const mainFoldRefIsInView = useInView(mainFoldRef, { once: true })

  return (
    <div className="flex flex-col items-center relative">
      <div className="absolute top-0 right-0">
        <Image
          src="/images/launchpad-main-background.svg"
          width={1300}
          height={1269}
          alt="Launchpad main background"
        />
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="w-full max-w-[1110px] flex items-start lg:items-center justify-center py-20 lg:py-36 px-7 lg:px-0 relative z-10 min-h-[900px] lg:min-h-screen">
          <div ref={mainFoldRef} />

          {mainFoldRefIsInView && (
            <div className="w-full flex items-center justify-between">
              <div className="flex flex-col max-w-[500px] w-full gap-10 lg:gap-[50px]">
                <div className="flex flex-col w-full gap-10 lg:gap-[30px]">
                  <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.25, duration: 1 }}
                    className="text-[36px] lg:text-[48px] font-extrabold lg:leading-[68px]"
                  >
                    {t('Getting Creators')} <br />
                    <span className="text-pink">{t('ready to fly')}</span>
                  </motion.h1>

                  <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-[24px] lg:text-[20px] lg:leading-[32px]"
                  >
                    {t(
                      'A complete training and acceleration program for Creators who need to professionalize and grow their businesses.'
                    )}
                  </motion.p>
                </div>

                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.75, duration: 1 }}
                  className="flex items-center gap-7"
                >
                  <Link
                    href="https://desafio.cobogo.io/"
                    className="flex"
                    target="_blank"
                  >
                    <Button
                      text={t('apply now')}
                      borderColor="border-pink-launchpad"
                    />
                  </Link>
                </motion.div>
              </div>

              <svg
                width="285"
                height="481"
                viewBox="0 0 285 481"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-[-50px] right-0 flex lg:hidden"
              >
                <path
                  d="M508 186.911L288.94 0L146.216 83.3245L146.187 83.2973L146.178 83.3426L146.072 83.4061L146.149 83.524L137.783 130.995L92.3479 113.609L18.909 159.076L18.8418 159.094L18.8514 159.112L18.7555 159.175L18.8994 159.23L34.0189 204.144L0.182281 226.111L0 226.165L0.0191766 226.22L0.00957369 226.229L0.0287796 226.238L22.2092 293.4L22.1612 293.499L76.2595 318.922L97.3846 387.526L284.565 480.293L285.86 481L356.93 435.433L347.509 395.444L428.191 340.871L428.229 340.889L451.235 298.27L451.206 298.261L451.215 298.252L431.539 281.056L471.986 253.32H471.995C472.005 253.311 472.005 253.311 472.014 253.302C472.283 253.048 472.571 252.794 472.887 252.595C472.897 252.586 472.916 252.576 472.926 252.567C472.974 252.522 473.031 252.477 473.079 252.431C473.175 252.259 473.271 252.096 473.377 251.923L473.367 251.905L507.559 187.237L508 186.911ZM429.524 126.061L364.365 170.631L293.391 108.611L357.112 64.2778L429.524 126.061ZM288.393 5.65051L354.934 62.4276L291.242 106.743L220.749 45.1496L288.393 5.65051ZM218.216 46.628L361.995 172.263L300.759 214.157L149.948 86.4808L218.216 46.628ZM239.667 258.436L266.088 264.83L202.396 307.712L180.196 298.234L239.667 258.436ZM179.803 292.937L156.212 210.882L220.777 167.601L238.084 253.937L179.803 292.937ZM272.967 265.764L287.683 343.13L225.162 384.742L205.389 311.258L272.967 265.764ZM290.014 347.129L332.303 358.04L266.241 403.317L230.918 386.465L290.014 347.129ZM92.8756 118.706L215.453 165.606L153.171 207.363L28.9439 158.287L92.8756 118.706ZM24.6939 161.534L151.464 211.608L175.831 296.366L52.2755 243.588L52.3139 243.579L24.6939 161.534ZM35.5251 208.66L46.4426 241.085L9.73749 225.403L35.5251 208.66ZM26.2097 290.343L5.86167 228.741L200.621 311.929L219.214 381.032L26.2097 290.343ZM101.385 384.47L82.2075 321.716L226.438 389.485L226.428 389.449L226.476 389.422L265.109 407.852L281.783 473.563L101.385 384.47ZM351.528 433.402L287.021 474.769L269.714 406.546L334.711 361.995L351.528 433.402ZM346.367 390.619L342.779 375.391L344.976 368.761L387.092 340.608L373.949 371.899L373.997 371.917L346.367 390.619ZM346.396 364.48L357.15 332.046L404.264 299.74L389.049 335.983L346.396 364.48ZM424.517 337.76L381.125 367.11L394.268 335.819L443.234 303.095L424.517 337.76ZM444.74 298.751L396.215 331.185L411.508 294.769L427.577 283.749L444.74 298.751ZM469.232 249.592L359.549 324.799L374.601 279.378L499.097 193.087L469.232 249.592ZM372.702 275.07L302.947 216.007L431.712 127.921L500.421 186.539L372.702 275.07Z"
                  fill="#F5AEFF"
                />
              </svg>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 1 }}
                className="hidden lg:flex"
              >
                <Image
                  src="/images/cobogo-launchpad-cube.svg"
                  width={510}
                  height={510}
                  alt="Cobogo Launchpad cube"
                />
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
