'use client';

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  padding: 1rem;
`

type Props = {
  children: React.ReactNode;
}

export function FooterWrapper({ children }: Props) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}