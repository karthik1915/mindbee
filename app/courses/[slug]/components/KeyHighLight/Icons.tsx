import * as React from "react";
import { SVGProps } from "react";
export const Instructions = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32" // Adjust the viewBox to match the SVG's original dimensions
    width={props.width || 32} // Default width if not provided
    height={props.height || 32} // Default height if not provided
    fill="none"
    {...props}
  >
    <path
      fill={props.fill}
      d="M20 17a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H9.46c.35.61.54 1.3.54 2h10v11h-9v2m4-10v2H9v13H7v-6H5v6H3v-8H1.5V9a2 2 0 0 1 2-2H15ZM8 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </svg>
);

export const Videos = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48" // Adjust the viewBox to match the SVG's original dimensions
    width={props.width || 32} // Default width if not provided
    height={props.height || 32} // Default height if not provided
    {...props}
  >
    <path
      fill={props.fill}
      fillRule="evenodd"
      d="M6 6v28h22.387v-2H8V8h27v2.12h2V6H6Zm31 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm2 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      clipRule="evenodd"
    />
    <path
      fill={props.fill}
      fillRule="evenodd"
      d="M30.093 21.83a3 3 0 0 1 2.07-.83h4.082c1.464 0 2.827.498 3.877 1.49 1.01.954 1.536 2.177 1.75 3.336.339 1.822-.011 3.813-.872 5.578V39.5a2.5 2.5 0 0 1-4.966.411l-.534-3.204-.534 3.204A2.5 2.5 0 0 1 30 39.5v-9.407a3 3 0 0 1-1.5.402h-5.102a3 3 0 0 1 0-6h3.9l2.795-2.665ZM32 33.475V39.5a.5.5 0 0 0 .993.082l1.043-6.256a1 1 0 0 1 .986-.836h.956a1 1 0 0 1 .986.836l1.043 6.256A.5.5 0 0 0 39 39.5v-8.333a1 1 0 0 1 .112-.46c.772-1.491 1.053-3.124.795-4.516-.157-.846-.524-1.648-1.158-2.247-.647-.611-1.505-.944-2.504-.944h-4.081c-.257 0-.505.099-.691.276l-3.084 2.942a1 1 0 0 1-.69.277h-4.301a1 1 0 0 0 0 2H28.5a1 1 0 0 0 .69-.277l1.12-1.068a1 1 0 0 1 1.69.724v5.601Z"
      clipRule="evenodd"
    />
  </svg>
);

export const Certificate = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={props.width || 32} // Default width if not provided
    height={props.height || 32} // Default height if not provided
    {...props}
  >
    <path
      fill={props.fill}
      d="M126 136a6.003 6.003 0 0 1-1.757 4.243A6.003 6.003 0 0 1 120 142H72a6 6 0 1 1 0-12h48c1.591 0 3.117.632 4.243 1.757A6.003 6.003 0 0 1 126 136Zm-6-38H72a6 6 0 1 0 0 12h48a6.003 6.003 0 0 0 4.243-1.757 6.003 6.003 0 0 0 0-8.486A6.002 6.002 0 0 0 120 98Zm110 62.62V224a6.002 6.002 0 0 1-5.997 6.014 6.007 6.007 0 0 1-3.003-.804l-25-14.3-25 14.3a6.007 6.007 0 0 1-6.006-.003A5.998 5.998 0 0 1 162 224v-26H40a13.998 13.998 0 0 1-14-14V56a14 14 0 0 1 14-14h176a13.998 13.998 0 0 1 14 14v31.38A49.903 49.903 0 0 1 245.999 124 49.912 49.912 0 0 1 230 160.62ZM196 86a38 38 0 1 0 0 76 38 38 0 0 0 0-76Zm-34 100v-25.38a49.999 49.999 0 0 1 21.362-84.9A50.001 50.001 0 0 1 218 79.11V56a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v128a2 2 0 0 0 2 2h122Zm56-17.11a49.912 49.912 0 0 1-44 0v44.77l19-10.87a5.996 5.996 0 0 1 6 0l19 10.87v-44.77Z"
    />
  </svg>
);
