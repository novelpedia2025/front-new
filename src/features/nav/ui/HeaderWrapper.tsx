'use client';

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  height: 50px;
`

type Props = {
  children: React.ReactNode;
}

export function HeaderWrapper({ children }: Props) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}