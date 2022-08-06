function Logo({ strokeClass, sizeClass }) {
  return (
    <svg
      className={sizeClass}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 79 41"
    >
      <path
        className={strokeClass}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
        d="M2.3 39h15c9.4 0 14-2.5 14-8.5s-.8-9-14-9h-6.6c-2.8 0-8.4-1.9-8.4-9.5S7.5 2 13 2h53c5.8 0 10.8 5.6 10.8 10 0 5.5-4 10.5-10.8 10.5H51.7c-1.8-.2-5.5.8-5.5 6V39"
      />
    </svg>
  );
}

export default Logo;
