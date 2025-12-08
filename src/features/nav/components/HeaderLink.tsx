'use client';

import Link from "next/link";
import styled from "styled-components";

const Component = styled(Link)`
  text-decoration: none;
  color: var(--black);
`

type Props = {
  href: string;
  children: React.ReactNode;
}

export function HeaderLink({href, children}: Props) {
  return (
    <Component href={href}>
      {children}
    </Component>
  )
}