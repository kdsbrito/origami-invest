export const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      width="256px"
      height="261px"
      viewBox="0 0 256 261"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
      className={className}
    >
      <g>
        <path
          d="M92.5,92.2 L92.5,0 L0,0 L92.5,92.2 Z M256,70.9 L222.7,38.1 L176.4,84.1 L92.5,0 L92.5,260.9 L222.7,130.4 L222.7,70.9 L256,70.9 Z"
          fill="#0991FF"
        ></path>
        <path d="M0,0 L92.5,92.2 L92.5,0 L0,0" fill="#62CCFD"></path>
        <path
          d="M92.5,260.9 L92.5,0 L222.7,130.4 L92.5,260.9"
          fill="#0991FF"
        ></path>
        <path
          d="M222.7,38.1 L222.7,130.4 L176.4,84.1 L222.7,38.1 Z"
          fill="#62CCFD"
        ></path>
        <path
          d="M222.7,38.1 L222.7,70.9 L256,70.9 L222.7,38.1 Z"
          fill="#0991FF"
        ></path>
      </g>
    </svg>
  );
};
