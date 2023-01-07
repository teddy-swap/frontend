export default function TickCircleIcon(props: SwapIconProps) {
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
        d="M95.4449 177.925C139.556 177.925 175.648 141.834 175.648 97.7223C175.648 53.6108 139.556 17.5195 95.4449 17.5195C51.3334 17.5195 15.2422 53.6108 15.2422 97.7223C15.2422 141.834 51.3334 177.925 95.4449 177.925Z"
        stroke="currentColor"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M62.4297 96.6544L85.1271 119.352L130.602 73.957"
        stroke="currentColor"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

TickCircleIcon.defaultProps = {};

interface SwapIconProps {
  className?: string;
}
