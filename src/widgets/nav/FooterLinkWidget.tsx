'use client';

import { FooterBox, FooterLink } from "@/features";

export function FooterLinkWidget() {
  return (
    <FooterBox>
      <FooterLink href="/notice">공지</FooterLink>
      <FooterLink href="/notice">신고</FooterLink>
    </FooterBox>
  );
}