'use client';

import logo from "@/assets/imgs/logo.png";
import { HeaderBox, HeaderLink } from "@/features";
import Image from "next/image";
import styled from "styled-components";

const LogoBox = styled.div`
  width: 150px;
  position: relative;
`

const LogoImage = styled(Image)`
  object-fit: cover;
`

export function HeaderLogoWidget() {
  return (
    <HeaderBox>
      <HeaderLink href="/">
        <LogoBox>
          <LogoImage src={logo} alt="Logo" fill />
        </LogoBox>
      </HeaderLink>
    </HeaderBox>
  );
}