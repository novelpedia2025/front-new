'use client';

import styled from "styled-components";

const Component = styled.div`
  color: #fff;
`

type Props = {
  children: React.ReactNode;
}

export function FooterText({children}: Props) {
  return (
    <Component>
      {children}
    </Component>
  )
}