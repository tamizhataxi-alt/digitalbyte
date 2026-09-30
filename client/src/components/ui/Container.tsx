import type { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'header' | 'footer';
};

export function Container({
  children,
  className = '',
  as: Tag = 'div',
}: ContainerProps) {
  return (
    <Tag
      className={`mx-auto w-full max-w-container px-5 md:px-8 ${className}`}
    >
      {children}
    </Tag>
  );
}
