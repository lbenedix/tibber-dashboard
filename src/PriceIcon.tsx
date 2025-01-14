export function PriceIcon({ level }: { level: string }) {
  const size = 56;
  const color = "rgb(68 115 158)";
  switch (level) {
    case "VERY_CHEAP":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 88 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.812 25.25c-4.508 0-7.813 4.383-7.813 9.375a1.564 1.564 0 0 0 1.563 1.563 1.564 1.564 0 0 0 1.563-1.563c0-3.64 2.293-6.25 4.687-6.25 2.395 0 4.688 2.61 4.688 6.25a1.564 1.564 0 0 0 2.668 1.105c.293-.292.457-.69.457-1.105 0-4.992-3.305-9.375-7.813-9.375ZM61.188 25.25c-4.508 0-7.813 4.383-7.813 9.375a1.564 1.564 0 0 0 2.669 1.105c.293-.292.457-.69.457-1.105 0-3.64 2.293-6.25 4.687-6.25 2.395 0 4.688 2.61 4.688 6.25a1.564 1.564 0 0 0 2.668 1.105c.293-.292.457-.69.457-1.105 0-4.992-3.305-9.375-7.813-9.375ZM28.375 53.375c-.863 0-1.563.7-1.563 1.563 0 7.96 7.883 14.061 17.189 14.061 9.305 0 17.188-6.101 17.188-14.061 0-.864-.7-1.563-1.563-1.563H28.375ZM30.34 56.5h27.32c-1.004 5.137-6.45 9.375-13.66 9.375-7.211 0-12.656-4.238-13.66-9.375Z"
            fill={color}
          />
          <path
            d="M25.25.25c-13.824 0-25 11.176-25 25v37.5c0 13.824 11.176 25 25 25h37.5c13.824 0 25-11.176 25-25v-37.5c0-13.824-11.176-25-25-25h-37.5Zm0 3.125h37.5A21.794 21.794 0 0 1 84.625 25.25v37.5A21.794 21.794 0 0 1 62.75 84.625h-37.5A21.794 21.794 0 0 1 3.375 62.75v-37.5A21.794 21.794 0 0 1 25.25 3.375Z"
            fill={color}
          />
        </svg>
      );

    case "CHEAP":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 88 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M59.98 54.949a1.565 1.565 0 0 0-1.117.414A21.867 21.867 0 0 1 44 61.179a21.866 21.866 0 0 1-14.863-5.816 1.564 1.564 0 0 0-2.203.086 1.567 1.567 0 0 0 .086 2.21A24.992 24.992 0 0 0 44 64.31a24.992 24.992 0 0 0 16.98-6.65 1.567 1.567 0 0 0 .086-2.21 1.557 1.557 0 0 0-1.086-.5ZM61.188 36.754c4.508 0 7.813-4.383 7.813-9.375a1.568 1.568 0 0 0-1.563-1.563c-.863 0-1.563.704-1.563 1.563 0 3.64-2.292 6.25-4.687 6.25-2.395 0-4.688-2.61-4.688-6.25a1.568 1.568 0 0 0-1.563-1.563c-.862 0-1.562.703-1.562 1.563 0 4.992 3.305 9.375 7.813 9.375ZM26.812 36.754c4.508 0 7.812-4.383 7.812-9.375a1.568 1.568 0 0 0-1.563-1.563c-.862 0-1.561.704-1.561 1.563 0 3.64-2.294 6.25-4.688 6.25-2.395 0-4.688-2.61-4.688-6.25a1.568 1.568 0 0 0-1.563-1.563c-.862 0-1.562.703-1.562 1.563 0 4.992 3.305 9.375 7.813 9.375Z"
            fill={color}
          />
          <path
            d="M25.25.25c-13.824 0-25 11.176-25 25v37.5c0 13.824 11.176 25 25 25h37.5c13.824 0 25-11.176 25-25v-37.5c0-13.824-11.176-25-25-25h-37.5Zm0 3.125h37.5A21.794 21.794 0 0 1 84.625 25.25v37.5A21.794 21.794 0 0 1 62.75 84.625h-37.5A21.794 21.794 0 0 1 3.375 62.75v-37.5A21.794 21.794 0 0 1 25.25 3.375Z"
            fill={color}
          />
        </svg>
      );

    case "NORMAL":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 88 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.812 25.25c-4.297 0-7.813 3.516-7.813 7.813 0 4.296 3.516 7.812 7.813 7.812s7.812-3.516 7.812-7.813c0-4.296-3.515-7.812-7.812-7.812Zm0 3.125a4.666 4.666 0 0 1 4.688 4.688 4.666 4.666 0 0 1-4.688 4.687 4.666 4.666 0 0 1-4.688-4.688 4.666 4.666 0 0 1 4.688-4.687ZM61.188 25.25c-4.297 0-7.813 3.516-7.813 7.813 0 4.296 3.516 7.812 7.813 7.812s7.813-3.516 7.813-7.813c0-4.296-3.516-7.812-7.813-7.812Zm0 3.125a4.666 4.666 0 0 1 4.688 4.688 4.666 4.666 0 0 1-4.688 4.687 4.666 4.666 0 0 1-4.688-4.688 4.666 4.666 0 0 1 4.688-4.687ZM31.5 59.625a1.562 1.562 0 1 0 0 3.125h25a1.564 1.564 0 0 0 1.105-2.668 1.564 1.564 0 0 0-1.105-.457h-25Z"
            fill={color}
          />
          <path
            d="M25.25.25c-13.824 0-25 11.176-25 25v37.5c0 13.824 11.176 25 25 25h37.5c13.824 0 25-11.176 25-25v-37.5c0-13.824-11.176-25-25-25h-37.5Zm0 3.125h37.5A21.794 21.794 0 0 1 84.625 25.25v37.5A21.794 21.794 0 0 1 62.75 84.625h-37.5A21.794 21.794 0 0 1 3.375 62.75v-37.5A21.794 21.794 0 0 1 25.25 3.375Z"
            fill={color}
          />
        </svg>
      );

    case "EXPENSIVE":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 88 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M44.164 58.07c-2.602-.082-5.172 1.18-7.531 3.59v-.004a1.57 1.57 0 0 0 .023 2.21 1.57 1.57 0 0 0 2.211-.023c1.969-2.011 3.64-2.703 5.2-2.656 1.558.047 3.253.895 5.097 2.688v-.004a1.557 1.557 0 0 0 2.211-.035c.285-.297.445-.7.438-1.114a1.559 1.559 0 0 0-.477-1.097c-2.18-2.118-4.57-3.477-7.172-3.559v.004ZM29.938 31.5c-4.297 0-7.813 3.516-7.813 7.813 0 4.296 3.516 7.812 7.813 7.812s7.813-3.516 7.813-7.813c0-4.296-3.516-7.812-7.813-7.812Zm0 3.125a4.666 4.666 0 0 1 4.688 4.688A4.666 4.666 0 0 1 29.938 44a4.666 4.666 0 0 1-4.688-4.688 4.666 4.666 0 0 1 4.688-4.687ZM58.062 31.5c-4.297 0-7.813 3.516-7.813 7.813 0 4.296 3.516 7.812 7.813 7.812s7.813-3.516 7.813-7.813c0-4.296-3.516-7.812-7.813-7.812Zm0 3.125a4.666 4.666 0 0 1 4.688 4.688A4.666 4.666 0 0 1 58.061 44a4.666 4.666 0 0 1-4.688-4.688 4.666 4.666 0 0 1 4.688-4.687ZM52.879 20.641c-.39.133-.719.418-.902.79a1.562 1.562 0 0 0 .703 2.093l12.5 6.25a1.562 1.562 0 0 0 1.39-2.797l-12.5-6.25a1.577 1.577 0 0 0-1.191-.086ZM35.121 20.641a1.576 1.576 0 0 0-1.191.086l-12.5 6.25a1.562 1.562 0 0 0 1.39 2.797l12.5-6.25a1.563 1.563 0 0 0-.199-2.883Z"
            fill={color}
          />
          <path
            d="M25.25.25c-13.824 0-25 11.176-25 25v37.5c0 13.824 11.176 25 25 25h37.5c13.824 0 25-11.176 25-25v-37.5c0-13.824-11.176-25-25-25h-37.5Zm0 3.125h37.5A21.794 21.794 0 0 1 84.625 25.25v37.5A21.794 21.794 0 0 1 62.75 84.625h-37.5A21.794 21.794 0 0 1 3.375 62.75v-37.5A21.794 21.794 0 0 1 25.25 3.375Z"
            fill={color}
          />
        </svg>
      );

    case "VERY_EXPENSIVE":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 88 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M52.68 17.602a1.562 1.562 0 0 0-.703 2.094s3.48 7.117 10.773 7.117a1.564 1.564 0 0 0 1.105-2.668 1.564 1.564 0 0 0-1.105-.457c-5.207 0-7.977-5.383-7.977-5.383a1.562 1.562 0 0 0-2.093-.703ZM35.32 17.602a1.562 1.562 0 0 0-2.094.703s-2.77 5.383-7.976 5.383a1.562 1.562 0 1 0 0 3.125c7.293 0 10.773-7.117 10.773-7.117a1.562 1.562 0 0 0-.703-2.094ZM44 50.25c-2.66 0-4.969 1.61-6.508 3.895-1.539 2.285-2.422 5.3-2.422 8.605 0 3.305.883 6.32 2.422 8.606C39.032 73.64 41.34 75.25 44 75.25s4.969-1.61 6.508-3.894c1.539-2.286 2.422-5.301 2.422-8.606 0-3.305-.883-6.32-2.422-8.605-1.54-2.286-3.848-3.895-6.508-3.895Zm0 3.125c1.406 0 2.785.84 3.914 2.516 1.129 1.675 1.89 4.125 1.89 6.859s-.765 5.188-1.89 6.86c-1.129 1.675-2.508 2.515-3.914 2.515-1.406 0-2.785-.84-3.914-2.516-1.129-1.675-1.89-4.125-1.89-6.859s.765-5.188 1.89-6.86c1.129-1.675 2.508-2.515 3.914-2.515ZM20.434 34.625a1.562 1.562 0 1 0 0 3.125h4.816v4.7a1.564 1.564 0 0 0 2.669 1.105c.292-.293.456-.692.456-1.106V37.75h4.688a1.564 1.564 0 0 0 1.105-2.668 1.564 1.564 0 0 0-1.105-.457H20.434ZM26.812 47.125c-.863 0-1.563.7-1.563 1.563v6.25a1.564 1.564 0 0 0 1.563 1.562 1.564 1.564 0 0 0 1.563-1.563v-6.25a1.564 1.564 0 0 0-1.563-1.562ZM26.812 59.625c-.863 0-1.563.7-1.563 1.563v6.25A1.564 1.564 0 0 0 26.813 69a1.564 1.564 0 0 0 1.563-1.563v-6.25a1.564 1.564 0 0 0-1.563-1.562ZM26.812 72.125c-.863 0-1.563.7-1.563 1.563v8.257a1.564 1.564 0 0 0 1.563 1.563 1.564 1.564 0 0 0 1.563-1.563v-8.257a1.564 1.564 0 0 0-1.563-1.563ZM53.254 34.625a1.562 1.562 0 1 0 0 3.125h4.809v4.7a1.564 1.564 0 0 0 2.668 1.105c.293-.293.457-.692.457-1.106V37.75h4.687a1.564 1.564 0 0 0 1.106-2.668 1.564 1.564 0 0 0-1.106-.457H53.254ZM59.625 47.125c-.863 0-1.563.7-1.563 1.563v6.25a1.564 1.564 0 0 0 1.563 1.562 1.564 1.564 0 0 0 1.563-1.563v-6.25a1.564 1.564 0 0 0-1.563-1.562ZM59.625 59.625c-.863 0-1.563.7-1.563 1.563v6.25A1.564 1.564 0 0 0 59.626 69a1.564 1.564 0 0 0 1.563-1.563v-6.25a1.564 1.564 0 0 0-1.563-1.562ZM59.625 72.125c-.863 0-1.563.7-1.563 1.563v8.257a1.564 1.564 0 0 0 1.563 1.563 1.564 1.564 0 0 0 1.563-1.563v-8.257a1.564 1.564 0 0 0-1.563-1.563Z"
            fill={color}
          />
          <path
            d="M25.25.25c-13.824 0-25 11.176-25 25v37.5c0 13.824 11.176 25 25 25h37.5c13.824 0 25-11.176 25-25v-37.5c0-13.824-11.176-25-25-25h-37.5Zm0 3.125h37.5A21.794 21.794 0 0 1 84.625 25.25v37.5A21.794 21.794 0 0 1 62.75 84.625h-37.5A21.794 21.794 0 0 1 3.375 62.75v-37.5A21.794 21.794 0 0 1 25.25 3.375Z"
            fill={color}
          />
        </svg>
      );

    default:
      return null;
  }
}
