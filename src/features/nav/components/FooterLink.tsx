'use client';

import Link from "next/link";
import styled from "styled-components";

const Component = styled(Link)`
  text-decoration: none;
  color: #fff;
`

type Props = {
  href: string;
  children: React.ReactNode;
}

export function FooterLink({href, children}: Props) {
  return (
    <Component href={href}>
      {children}
    </Component>
  )
}