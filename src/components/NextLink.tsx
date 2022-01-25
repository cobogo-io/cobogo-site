import NextLink, { LinkProps } from 'next/link';
import { HTMLProps, useCallback } from 'react';

interface FLinkProps
  extends Omit<HTMLProps<HTMLAnchorElement>, 'href' | 'as'>,
    LinkProps {}

export default function Link({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  locale,
  target,
  ...anchorProps
}: FLinkProps) {
  const handleClick = useCallback(
    (e) => {
      if ((href as string).startsWith('#')) {
        e.preventDefault();
        const destination = document.querySelector(href as string);
        if (destination) {
          destination.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }
    },
    [href]
  );
  return (
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      prefetch={prefetch}
      locale={locale}
    >
      <a
        tabIndex={0}
        target={target}
        role="link"
        onClick={handleClick}
        onKeyDown={handleClick}
        {...anchorProps}
      >
        {children}
      </a>
    </NextLink>
  );
}
