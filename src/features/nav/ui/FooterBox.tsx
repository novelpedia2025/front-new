'use client';

import styled from "styled-components";

const Box = styled.div`
  display: flex;
  gap: 0.5rem;
`

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function FooterBox({ children, style }: Props) {
  return (
    <Box style={style}>
      {children}
    </Box>
  );
}