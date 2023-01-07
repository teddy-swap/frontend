export default function ExpandMoreIcon(props: ExpandMoreIconProps) {
  return (
    <svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M 5.694 7.395 L 0.315 1.993 L 1.315 0.994 L 5.694 5.372 L 10.072 0.994 L 11.072 1.993 L 5.694 7.395 Z"
        fill="currentColor"
      />
    </svg>
  );
}

ExpandMoreIcon.defaultProps = {};

interface ExpandMoreIconProps {
  className?: string;
}
