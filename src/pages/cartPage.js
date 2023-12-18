import React from "react";
import SectionCards from "../components/Cards/sectionCards";
import { Button, Image, Text, FileInput, Checkbox } from "@mantine/core";
import { UseCartPageStyle } from "./carPage.style";
import NumberInput from "../components/Number-Input/number-input";
import { Link } from "react-router-dom";
import { RazorPay } from "../components/Icons/icons";
import { Paragraph } from "../components/Typography/text";
import { ShopButton } from "../components/Buttons/shop-button";

export function CartPage() {
  const {
    classes: {
      cartItems,
      section,
      wraper1,
      itemInfo,
      items,
      countAndPrice,
      total,
      deliveryInfo,
      info,
      totalPrice,
      login,
      billingDetails,
      information,
      Input,
      Input2,
    },
  } = UseCartPageStyle();

  const inputString = `Your personal data will be used to process your order, support your
                      experience throughout this website, and for other purposes described
                      in our Privacy Policy`;
  return (
    <div
      style={{
        margin: "0 auto",
        // border: "thin solid black",
        maxWidth: "90vw",
        width: "90vw",
        minWidth: "380px",
      }}
    >
      <div className={cartItems} id="section cards">
        <SectionCards text="You Cart Items">
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <div className={section}>
              <Text fw={700} fz={20} ml={48}>
                Product
              </Text>
              <div className={wraper1}>
                <Text fw={700} fz={20}>
                  Price
                </Text>
                <Text fw={700} fz={20}>
                  Quantity
                </Text>
                <Text fw={700} fz={20}>
                  Total
                </Text>
              </div>
            </div>
            <div className={items} id="item">
              <div style={{ display: "flex", gap: 48 }}>
                <Text
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "20px",
                  }}
                >
                  1
                </Text>
                <div className={itemInfo} id="itemInfo">
                  <div style={{ width: 160, height: 120 }}>
                    <Image src={"./SqaureSmCardImg/jadeTerrarium.png"} />
                  </div>

                  <div>
                    <Text fw={600} fz={24}>
                      Plant Name
                    </Text>
                    <Button
                      bg={"unset"}
                      color="black"
                      td={"underline"}
                      p={"unset"}
                      fw={300}
                      fz={20}
                      variant="unset"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>

              <div className={countAndPrice} id="countAndPrice">
                <div>
                  <Text fz={20}>$ 99</Text>
                </div>

                <div>
                  <NumberInput />
                </div>
                <div>
                  <Text fz={20}>$ 99.0</Text>
                </div>
              </div>
            </div>
            <div className={items} id="item">
              <div style={{ display: "flex", gap: 48 }}>
                <Text
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "20px",
                  }}
                >
                  2
                </Text>
                <div className={itemInfo} id="itemInfo">
                  <div style={{ width: 160, height: 120 }}>
                    <Image src={"./SqaureSmCardImg/jadeTerrarium.png"} />
                  </div>

                  <div>
                    <Text fw={600} fz={24}>
                      Plant Name
                    </Text>
                    <Button
                      bg={"unset"}
                      color="black"
                      td={"underline"}
                      p={"unset"}
                      fw={300}
                      fz={20}
                      variant="unset"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>

              <div className={countAndPrice} id="countAndPrice">
                <div>
                  <Text fz={20}>$ 99</Text>
                </div>

                <div>
                  <NumberInput />
                </div>
                <div>
                  <Text fz={20}>$ 99.0</Text>
                </div>
              </div>
            </div>

            <div className={total}>
              <div id="jfoei" className={deliveryInfo}>
                <div className={info}>
                  <Text fz={20}>Subtotal</Text>
                  <Text fz={20}>$ 99.0</Text>
                </div>
                <div className={info}>
                  <Text fz={20}>Shipping</Text>
                  <Text fz={20}>Flat Rate</Text>
                </div>
              </div>

              <div className={totalPrice}>
                <Text fw={600} fz={20}>
                  Total
                </Text>
                <Text fw={600} fz={20}>
                  $ 99.0
                </Text>
              </div>
            </div>
          </div>
        </SectionCards>
      </div>

      <div className={login}>
        <Text fz={20}>Returning customer?</Text>
        <Link
          style={{
            fontWeight: 700,
            fontSize: 20,
            textDecoration: "none",
            color: "#343434",
          }}
        >
          Click Here to Login
        </Link>
      </div>

      <div className={billingDetails} id="billingDetails">
        <div className={information}>
          <Text fw={700} fz={24}>
            Billing Details
          </Text>
          <InformationInput label1={"First Name"} label2={"Last Name"} />
          <InformationInput label1={"Phone"} label2={"Email Address"} />

          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <FileInput
              w={"100%"}
              label={"Street Address"}
              withAsterisk={true}
              size={"sm"}
            />
            <FileInput w={"100%"} withAsterisk={true} size={"sm"} />
          </div>

          <InformationInput label1={"City"} label2={"State"} />
          <InformationInput label1={"Pincode"} label2={"Country"} />

          <div
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            <Text fw={700} fz={24}>
              Billing Details
            </Text>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Checkbox />
              <Text
                fw={600}
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                Pay by <RazorPay /> Cards, NetBanking, Wallet & UPI
              </Text>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 32,
              }}
            >
              <Paragraph inputString={inputString} />
            </div>
          </div>
        </div>

        <div className={information}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "40px" }}
          >
            <Checkbox
              fw={700}
              size={24}
              label={"Ship to a Different Address"}
            />

            <FileInput
              placeholder=" Order notes (optional)"
              label="Order notes (optional)"
            />
          </div>

          <div style={{width: "100%", display: "flex", justifyContent: "end"}}>
          <div style={{ width: 271 }}>
            <ShopButton>
              <Text>Place Order</Text>
            </ShopButton>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function InformationInput({ label1, label2 }) {
  const {
    classes: { Input },
  } = UseCartPageStyle();

  return (
    <div className={Input}>
      <FileInput w={"100%"} label={label1} withAsterisk size={"sm"} />
      <FileInput w={"100%"} label={label2} withAsterisk size={"sm"} />
    </div>
  );
}
