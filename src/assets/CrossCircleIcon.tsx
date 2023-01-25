export default function CrossCircleIcon(props: Props) {
  return (
    <svg
      width="193"
      height="193"
      viewBox="0 0 193 193"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M88.7812 162.43C129.344 162.43 162.531 129.242 162.531 88.6797C162.531 48.1172 129.344 14.9297 88.7812 14.9297C48.2187 14.9297 15.0312 48.1172 15.0312 88.6797C15.0312 129.242 48.2187 162.43 88.7812 162.43Z"
        stroke="currentColor"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M67.9062 109.551L109.649 67.8086"
        stroke="currentColor"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M109.649 109.551L67.9062 67.8086"
        stroke="currentColor"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

CrossCircleIcon.defaultProps = {};

interface Props {
  className?: string;
}
