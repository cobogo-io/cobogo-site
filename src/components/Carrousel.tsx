import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'
import Button from './Button'

const sections = [
  {
    id: 'social',
    background: 'bg-home-carrousel-social-background',
    image: '/images/productive-deal-flow-image.svg',
    cube: '/images/cobogo-social-cube.svg',
    backgroundColor: 'bg-blue-social',
    borderColor: 'border-blue-social',
    textColor: 'text-blue-social',
    title: 'Social',
    subtitle: (
      <h1 className="font-bold text-xl lg:text-[40px] leading-[55px]">
        Creator as <br /> <span className="text-blue">a business platform</span>
      </h1>
    ),
    description:
      'A all in one tool to showcase a Creators work and engagement metrics to investors and partners in a professional and automated way. All data is verified and authenticated by the Creators social media.',
    buttonHref: 'https://cobogo.social/',
  },
  {
    id: 'community',
    background: 'bg-home-carrousel-community-background',
    image: null,
    cube: '/images/cobogo-community-cube.svg',
    backgroundColor: 'bg-yellow-community',
    borderColor: 'border-yellow-community',
    textColor: 'text-yellow-community',
    title: 'Community',
    subtitle: (
      <h1 className="font-bold text-xl lg:text-[40px] leading-[55px]">
        The creator economy game changer
      </h1>
    ),
    description:
      'A community formed by Creators, investors and enthusiasts of the Creator Economy created to boost knowledge, research and development of this market, discussing new movements, trends and selecting the next early stage Creators to be invested.',
    buttonHref: '/community',
  },
  {
    id: 'launchpad',
    background: 'bg-home-carrousel-launchpad-background',
    image: null,
    cube: '/images/cobogo-launchpad-cube.svg',
    backgroundColor: 'bg-pink-launchpad',
    borderColor: 'border-pink-launchpad',
    textColor: 'text-pink-launchpad',
    title: 'Launchpad',
    subtitle: (
      <h1 className="font-bold text-xl lg:text-[40px] leading-[55px]">
        Getting Creators <br /> <span className="text-pink">ready to fly</span>
      </h1>
    ),
    description:
      'A complete training and acceleration program for Creators who need to professionalize and grow their businesses.',
    buttonHref: '/launchpad',
  },
]

interface CarrouselProps {
  selectedSection: 'social' | 'community' | 'launchpad'
  setSelectedSection: Dispatch<
    SetStateAction<'social' | 'community' | 'launchpad'>
  >
}

export default function Carrousel(props: CarrouselProps) {
  return (
    <section
      className={`${
        sections.find(section => section.id === props.selectedSection)
          ?.background
      } bg-cover lg:rounded-[40px] w-full min-h-[840px] p-12 lg:p-24 flex flex-col items-center justify-center gap-16 relative`}
    >
      <div className="flex flex-col items-center absolute top-12 left-12 lg:left-24 gap-4">
        <button
          onClick={() => props.setSelectedSection('community')}
          className={`${
            props.selectedSection === 'community'
              ? `${
                  sections.find(section => section.id === props.selectedSection)
                    ?.backgroundColor
                } h-8 w-4`
              : 'bg-white/30 h-4 w-4'
          } rounded-full`}
        />

        <button
          onClick={() => props.setSelectedSection('social')}
          className={`${
            props.selectedSection === 'social'
              ? `${
                  sections.find(section => section.id === props.selectedSection)
                    ?.backgroundColor
                } h-8 w-4`
              : 'bg-white/30 h-4 w-4'
          } rounded-full`}
        />

        <button
          onClick={() => props.setSelectedSection('launchpad')}
          className={`${
            props.selectedSection === 'launchpad'
              ? `${
                  sections.find(section => section.id === props.selectedSection)
                    ?.backgroundColor
                } h-8 w-4`
              : 'bg-white/30 h-4 w-4'
          } rounded-full`}
        />
      </div>

      {sections.find(section => section.id === props.selectedSection)
        ?.image && (
        <Image
          src={
            sections.find(section => section.id === props.selectedSection)
              ?.image as string
          }
          width={417}
          height={149}
          alt="Image"
        />
      )}

      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col max-w-[510px] w-full gap-6 lg:gap-12">
          <h2
            className={`font-bold text-md lg:text-xl ${
              sections.find(section => section.id === props.selectedSection)
                ?.textColor
            }`}
          >
            {
              sections.find(section => section.id === props.selectedSection)
                ?.title
            }
          </h2>

          {
            sections.find(section => section.id === props.selectedSection)
              ?.subtitle
          }

          <p className="text-md lg:text-xl leading-[32px]">
            {
              sections.find(section => section.id === props.selectedSection)
                ?.description
            }
          </p>

          <div className="flex items-center gap-7">
            <Link
              href={
                sections.find(section => section.id === props.selectedSection)
                  ?.buttonHref as string
              }
            >
              <Button
                text="learn more"
                borderColor={`${
                  sections.find(section => section.id === props.selectedSection)
                    ?.borderColor
                }`}
              />
            </Link>
          </div>
        </div>

        {sections.find(section => section.id === props.selectedSection)
          ?.cube && (
          <Image
            src={
              sections.find(section => section.id === props.selectedSection)
                ?.cube as string
            }
            width={431}
            height={439}
            alt="Cube"
          />
        )}
      </div>
    </section>
  )
}
