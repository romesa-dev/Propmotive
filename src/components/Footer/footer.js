import React from "react";
import { useFooterStyle } from "./footer.style";
import { Box, Image, Text } from "@mantine/core";
import {
  AMEX,
  Facebook,
  Group,
  Instagram,
  RuPay,
  Twitter,
  Visa,
} from "../Icons/icons";

export default function Footer() {
  const {
    classes: {
      mainFooter,
      footer,
      miniFooter,
      textContainer,
      badgContainer,
      logo,
      links,
      compantBadge,
      badgText,
      icons,
      paymentLogos,
    },
    cx,
  } = useFooterStyle();

  return (
    <Box w={'100%'}>
      <div className={mainFooter}>
        <div className={footer}>
          <div className={logo}>
            <div>
              <Image src="./ForFooter/PAPLogo1.png" />
            </div>
          </div>
          <div className={textContainer}>
            <div className={links}>
              <Text fw={700} fz={16} color="#FFFFFF" mb={16}>
                Quick Links
              </Text>
              <a href="">About Us</a>
              <a href="">Bulk Order</a>
              <a href="">Gifts</a>
              <a href="">Organic Garden</a>
            </div>
            <div className={links}>
              <Text fw={700} fz={16} color="#FFFFFF" mb={16}>
                Legal
              </Text>
              <a href="">T&C</a>
              <a href="">Privacy Policy</a>
              <a href="">Returns</a>
              <a href="">Shipping</a>
              <a href="">Organic Garden</a>
            </div>
            <div className={links}>
              <Text fw={700} fz={16} color="#FFFFFF" mb={16}>
                Support
              </Text>
              <a href="">FAQs</a>
              <a href="">Contact Us</a>
            </div>
          </div>

          <div className={badgContainer}>
            <div className={compantBadge}>
              <div>
                <Image src="./ForFooter/CompantBadge.png" />
              </div>
            </div>

            <div id="badgText" className={badgText}>
              <p>© 2021 Plan A Plant All Rights Reserved</p>
              <div className={icons}>
                <div>
                  <Facebook />
                </div>
                <div>
                  <Twitter />
                </div>
                <div>
                  <Instagram />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={miniFooter}>
        <Text h={22} w={404} fw={400} fz={16} color="white" align="right">
          We facilitate your payments through trusted gateways
        </Text>
        <div className={paymentLogos}>
          <div>
            <Visa />
          </div>
          <div>
            <Group />
          </div>
          <div>
            <AMEX />
          </div>
          <div>
            <RuPay />
          </div>
        </div>
      </div>
    </Box>
  );
}
