import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'
import Button from './Button'

const products = [
  {
    id: 'social',
    background: 'bg-home-carrousel-social-background',
    image: '/images/productive-deal-flow-social-image.svg',
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
    image: '/images/productive-deal-flow-community-image.svg',
    cube: '/images/cobogo-community-cube.svg',
    backgroundColor: 'bg-yellow-community',
    borderColor: 'border-yellow-community',
    textColor: 'text-yellow-community',
    title: 'Community',
    subtitle: (
      <h1 className="font-bold text-xl lg:text-[40px] leading-[55px]">
        The creator <br />
        economy game <br /> changer
      </h1>
    ),
    description:
      'A community formed by Creators, investors and enthusiasts of the Creator Economy created to boost knowledge, research and development of this market, discussing new movements, trends and selecting the next early stage Creators to be invested.',
    buttonHref: '/community',
  },
  {
    id: 'launchpad',
    background: 'bg-home-carrousel-launchpad-background',
    image: '/images/productive-deal-flow-launchpad-image.svg',
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
  selectedProduct: 'social' | 'community' | 'launchpad'
  setSelectedProduct: Dispatch<
    SetStateAction<'social' | 'community' | 'launchpad'>
  >
}

export default function Carrousel(props: CarrouselProps) {
  return (
    <section className="flex items-center justify-center w-full py-16 lg:py-32">
      <div className="w-full max-w-[1300px] flex flex-col">
        <div className="flex items-center w-full justify-between px-24 py-6">
          <h2 className="text-2xl font-medium">Productized deal-flow</h2>

          <div className="flex items-center gap-4">
            <button
              onClick={() => props.setSelectedProduct('community')}
              className={`${
                props.selectedProduct === 'community'
                  ? `${
                      products.find(
                        product => product.id === props.selectedProduct
                      )?.backgroundColor
                    }`
                  : 'bg-white/30'
              } rounded-full h-4 w-4`}
            />

            <button
              onClick={() => props.setSelectedProduct('social')}
              className={`${
                props.selectedProduct === 'social'
                  ? `${
                      products.find(
                        product => product.id === props.selectedProduct
                      )?.backgroundColor
                    }`
                  : 'bg-white/30'
              } rounded-full h-4 w-4`}
            />

            <button
              onClick={() => props.setSelectedProduct('launchpad')}
              className={`${
                props.selectedProduct === 'launchpad'
                  ? `${
                      products.find(
                        product => product.id === props.selectedProduct
                      )?.backgroundColor
                    }`
                  : 'bg-white/30'
              } rounded-full h-4 w-4`}
            />
          </div>
        </div>

        <div
          className={`${
            products.find(product => product.id === props.selectedProduct)
              ?.background
          } bg-cover lg:rounded-[40px] w-full h-[833px] px-24 py-14 flex flex-col items-center justify-start gap-14`}
        >
          {products.find(product => product.id === props.selectedProduct)
            ?.image && (
            <Image
              src={
                products.find(product => product.id === props.selectedProduct)
                  ?.image as string
              }
              width={257}
              height={220}
              alt="Image"
            />
          )}

          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col max-w-[510px] w-full gap-3 lg:gap-6">
              <h2
                className={`font-bold text-md lg:text-xl ${
                  products.find(product => product.id === props.selectedProduct)
                    ?.textColor
                }`}
              >
                {
                  products.find(product => product.id === props.selectedProduct)
                    ?.title
                }
              </h2>

              {
                products.find(product => product.id === props.selectedProduct)
                  ?.subtitle
              }

              <p className="text-md lg:text-xl leading-[32px]">
                {
                  products.find(product => product.id === props.selectedProduct)
                    ?.description
                }
              </p>

              <Link
                href={
                  products.find(product => product.id === props.selectedProduct)
                    ?.buttonHref as string
                }
              >
                <Button
                  text="learn more"
                  borderColor={`${
                    products.find(
                      product => product.id === props.selectedProduct
                    )?.borderColor
                  }`}
                />
              </Link>
            </div>

            {products.find(product => product.id === props.selectedProduct)
              ?.cube && (
              <Image
                src={
                  products.find(product => product.id === props.selectedProduct)
                    ?.cube as string
                }
                width={431}
                height={439}
                alt="Cube"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
