import type { ReactNode } from 'react';

type WideContainerProps = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'header' | 'footer';
};

export function WideContainer({
  children,
  className = '',
  as: Tag = 'div',
}: WideContainerProps) {
  return (
    <Tag className={`mx-auto w-full max-w-[1440px] px-5 md:px-10 ${className}`}>
      {children}
    </Tag>
  );
}
