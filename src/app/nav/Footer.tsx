'use client';

import { FooterWrapper } from "@/features";
import { FooterCompanyWidget, FooterLinkWidget } from "@/widgets";

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterLinkWidget />
      <FooterCompanyWidget />
    </FooterWrapper>
  );
}