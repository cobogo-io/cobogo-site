import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

export default function Main() {
  const [weeSeeText, setWeeSeeText] = useState('')
  const [creatorsText, setCreatorsText] = useState('')
  const [asText, setAsText] = useState('')
  const [foundersText, setFoundersText] = useState('')

  const [line, setLine] = useState(0)

  const [andTheirText, setAndTheirText] = useState('')
  const [brandsText, setBrandsText] = useState('')
  const [as2Text, setAs2Text] = useState('')
  const [startupsText, setStartupsText] = useState('')

  const [switchText, setSwitchText] = useState(false)

  const mainRef = useRef(null)
  const mainRefIsInView = useInView(mainRef, { once: true })

  async function writeEffect(
    setText: Dispatch<SetStateAction<string>>,
    text: string,
    internalSwitchText: boolean,
    line: number
  ) {
    const arrayText = text.split('')
    let element = ''

    arrayText.forEach((letter, index) => {
      setTimeout(() => {
        const newText = (element += letter)
        setText(newText)
      }, 150 * index)
    })

    if (internalSwitchText) {
      setTimeout(() => {
        setSwitchText(!switchText)
        setWeeSeeText('')
        setCreatorsText('')
        setAsText('')
        setFoundersText('')
        setAndTheirText('')
        setBrandsText('')
        setAs2Text('')
        setStartupsText('')
      }, 1000 * 2)
    }

    if (line === 0) {
      setLine(0)
    } else if (line === 1) {
      setLine(1)
    } else if (line === 2) {
      setLine(2)
    } else if (line === 3) {
      setLine(3)
    }
  }

  useEffect(() => {
    if (!switchText) {
      writeEffect(setWeeSeeText, 'Wee see', false, 0)

      setTimeout(() => {
        writeEffect(setCreatorsText, 'Creators', false, 1)
      }, 1000 * 1.5)

      setTimeout(() => {
        writeEffect(setAsText, 'as', false, 2)
      }, 1000 * 3)

      setTimeout(() => {
        writeEffect(setFoundersText, 'founders', true, 3)
      }, 1000 * 3.5)
    } else {
      writeEffect(setAndTheirText, 'and their', false, 0)

      setTimeout(() => {
        writeEffect(setBrandsText, 'brands', false, 1)
      }, 1000 * 1.5)

      setTimeout(() => {
        writeEffect(setAs2Text, 'as', false, 2)
      }, 1000 * 3)

      setTimeout(() => {
        writeEffect(setStartupsText, 'startups', true, 3)
      }, 1000 * 3.5)
    }
  }, [switchText])

  return (
    <section className="flex items-center justify-center w-full py-32 relative px-7 min-h-[892px]">
      <div className="absolute top-0 right-0 hidden lg:flex">
        <Image
          src="/images/home-main-background.svg"
          width={1763}
          height={1083}
          alt="Home main background"
        />
      </div>

      <div className="absolute top-0 right-0 flex w-full h-[951px] lg:hidden">
        <Image
          src="/images/home-main-background-mobile.svg"
          fill
          alt="Home main background"
        />
      </div>

      <div ref={mainRef} />

      {mainRefIsInView && (
        <div className="w-full max-w-[1110px] flex flex-col gap-24 lg:gap-52 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-0 justify-between lg:items-center">
            <div className="flex flex-col h-[190px] lg:h-[333px]">
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="leading-[55px] lg:leading-[110px] text-[22px] lg:text-[45px] text-blue-2 flex items-center"
              >
                {!switchText ? weeSeeText : andTheirText}{' '}
                {line === 0 && (
                  <div className="border h-[80px] animate-pulse" />
                )}
              </motion.h1>

              <h1 className="leading-[55px] lg:leading-[110px] text-[42px] lg:text-[75px] font-extrabold text-white flex items-center">
                {!switchText ? creatorsText : brandsText}
                {line === 1 && (
                  <div className="border h-[80px] animate-pulse" />
                )}
              </h1>

              <div className="flex items-center gap-2">
                <h1 className="text-[42px] lg:text-[75px] text-white mr-3 flex items-center">
                  {!switchText ? asText : as2Text}
                  {line === 2 && (
                    <div className="border h-[80px] animate-pulse" />
                  )}
                </h1>

                <h1 className="text-[42px] lg:text-[75px] font-extrabold text-white flex items-center">
                  {!switchText ? foundersText : startupsText}
                  {line === 3 && (
                    <div className="border h-[80px] animate-pulse" />
                  )}
                </h1>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="hidden lg:flex"
            >
              <Image
                src="/images/home-main-cubes.svg"
                width={460}
                height={474}
                alt="Home main cube"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="flex lg:hidden w-full justify-center"
            >
              <Image
                src="/images/home-main-cubes.svg"
                width={247}
                height={255}
                alt="Home main cube"
              />
            </motion.div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 justify-between">
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="leading-[45px] lg:leading-[70px] text-[30px] lg:text-[44px] bg-related-content-text-gradient bg-clip-text text-transparent"
            >
              Scaling up <br /> equity financing <br /> for{' '}
              <strong>Creators</strong>
            </motion.h2>

            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="leading-[32px] lg:leading-[40px] text-[20px] lg:text-[26px] max-w-[450px]"
            >
              A fund manager with a technological and productized deal-flow that
              counts with a community of Creators acting as the Creator Economy
              market intelligence.
            </motion.p>
          </div>
        </div>
      )}
    </section>
  )
}
