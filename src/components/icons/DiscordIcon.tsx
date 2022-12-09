interface DiscordIconProps {
  size: number
}

export const DiscordIcon = (props: DiscordIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={props.size}
      fill="none"
      viewBox="0 0 39 28"
    >
      <path fill="url(#pattern0)" d="M0.483 0H38.483V28H0.483z"></path>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            transform="matrix(.0111 0 0 .01505 -.033 -.222)"
            xlinkHref="#image0_5394_8156"
          ></use>
        </pattern>
        <image
          id="image0_5394_8156"
          width="96"
          height="96"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  )
}
