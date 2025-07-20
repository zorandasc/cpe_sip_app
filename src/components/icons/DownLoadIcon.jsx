const DownLoadIcon = ({ className, ...props }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="40px"
    height="40px"
    viewBox="0 0 24 24"
    version="1.1"
    {...props}
  >
    <title>Download</title>
    <g
      id="Page-1"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g id="Download">
        <rect
          id="Rectangle"
          fillRule="nonzero"
          x="0"
          y="0"
          width="24"
          height="24"
        ></rect>
        <line
          x1="12"
          y1="10"
          x2="12"
          y2="19"
          id="Path"
          stroke="#0C0310"
          strokeWidth="2"
          strokeLinecap="round"
        ></line>
        <path
          d="M15,18 L12.7071,20.2929 C12.3166,20.6834 11.6834,20.6834 11.2929,20.2929 L9,18"
          id="Path"
          stroke="#0C0310"
          strokeWidth="2"
          strokeLinecap="round"
        ></path>
        <path
          d="M8,15 L6,15 C4.34315,15 3,13.6569 3,12 C3,10.3431 4.34315,9 6,9 C6,5.68629 8.68629,3 12,3 C15.3137,3 18,5.68629 18,9 C19.6569,9 21,10.3431 21,12 C21,13.6569 19.6569,15 18,15 L16,15"
          id="Path"
          stroke="#0C0310"
          strokeWidth="2"
          strokeLinecap="round"
        ></path>
      </g>
    </g>
  </svg>
);

export default DownLoadIcon;
