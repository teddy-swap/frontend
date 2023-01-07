export default function AboutIcon(props: AboutIconProps) {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.3661 3.51562C24.9982 3.51562 31.1946 9.71201 31.1946 17.3427C31.1946 24.9748 24.9982 31.1712 17.3661 31.1712C9.73545 31.1712 3.53906 24.9748 3.53906 17.3427C3.53906 9.71201 9.73545 3.51562 17.3661 3.51562V3.51562ZM17.3661 5.59031C10.8793 5.59031 5.61375 10.8559 5.61375 17.3427C5.61375 23.8295 10.8793 29.0965 17.3661 29.0965C23.853 29.0965 29.1199 23.8295 29.1199 17.3427C29.1199 10.8559 23.853 5.59031 17.3661 5.59031V5.59031ZM17.3661 14.5806C16.7935 14.5806 16.3288 15.0453 16.3288 15.6179V23.2251C16.3288 23.7977 16.7935 24.2625 17.3661 24.2625C17.9388 24.2625 18.4035 23.7977 18.4035 23.2251V15.6179C18.4035 15.0453 17.9388 14.5806 17.3661 14.5806ZM17.3634 10.4312C18.1269 10.4312 18.7465 11.0509 18.7465 11.8144C18.7465 12.5778 18.1269 13.1975 17.3634 13.1975C16.5999 13.1975 15.9803 12.5778 15.9803 11.8144C15.9803 11.0509 16.5999 10.4312 17.3634 10.4312Z"
        fill="currentColor"
      />
    </svg>
  );
}

AboutIcon.defaultProps = {};

interface AboutIconProps {
  className?: string;
}