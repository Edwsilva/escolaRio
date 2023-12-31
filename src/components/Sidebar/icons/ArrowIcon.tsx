// interface para receber a cor
interface ArrowIconProps {
  color: string;
}

export default function ArrowIcon(props: ArrowIconProps) {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 17C10.744 17 10.488 16.902 10.293 16.707C9.90201 16.316 9.90201 15.684 10.293 15.293L13.598 11.988L10.418 8.695C10.035 8.297 10.046 7.664 10.443 7.281C10.841 6.898 11.474 6.909 11.857 7.305L15.719 11.305C16.098 11.698 16.093 12.321 15.707 12.707L11.707 16.707C11.512 16.902 11.256 17 11 17Z"
        // fill="#395BFC"
        fill={props.color ? props.color : '#1d1d1d'}
      />
    </svg>
  );
}
