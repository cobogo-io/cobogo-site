import Image from 'next/image'

interface TestimonialProps {
  text: string
  name: string
  imageSrc: string
}

export default function Testimonial(props: TestimonialProps) {
  return (
    <div className="flex gap-4">
      <strong className="text-[100px] leading-[60px]">‘</strong>

      <div className="flex flex-col gap-5 w-full max-w-[377px]">
        <p className="text-xl leading-[32px]">{props.text}</p>
        <div className="flex items-center gap-2">
          <Image
            src={props.imageSrc}
            width={36}
            height={36}
            alt="Profile image"
          />

          <h2 className="font-bold">{props.name}</h2>
        </div>
      </div>
    </div>
  )
}
