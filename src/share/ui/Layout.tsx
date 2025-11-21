'use client';

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`

type Props = {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}