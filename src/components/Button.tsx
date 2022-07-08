import { ReactElement } from 'react';

interface ButtonProps {
  text: string;
  icon: ReactElement;
  url: string;
  style: string;
}

export function Button({
  text,
  icon,
  url,
  style
}: ButtonProps) {
  return (
    <a
      href={url}
      className={`p-4 text-sm flex items-center rounded font-bold uppercase gap-2 justify-center transition-colors ${style} `}>
      {icon}
      {text}
    </a>
  );
}
