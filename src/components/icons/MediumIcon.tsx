interface MediumIconProps {
  size: number
}

export const MediumIcon = (props: MediumIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      fill="none"
      viewBox="0 0 40 40"
    >
      <path
        fill="#fff"
        d="M.543 0v39.537h39.291V0H.543zm32.643 9.364l-2.105 2.03a.624.624 0 00-.236.59v14.942a.61.61 0 00.236.591l2.061 2.03v.45H22.793v-.433l2.132-2.082c.21-.212.21-.274.21-.592V14.81l-5.929 15.144h-.798l-6.902-15.144v10.149a1.4 1.4 0 00.386 1.165l2.771 3.38v.45H6.787v-.45l2.772-3.38c.298-.31.43-.742.36-1.165V13.22a1.01 1.01 0 00-.334-.865L7.121 9.364v-.45h7.656l5.912 13.06 5.2-13.052h7.297v.442z"
      ></path>
    </svg>
  )
}
