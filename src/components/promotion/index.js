import React, { useEffect, useState } from "react";
import { MessageText, PromotionsContainer } from "../../styles/promotion";
import { Box, Slide } from "@mui/material";

const messages = [
  "20% off on your first order!",
  "Summer sale starts now, visit any store.",
  "Please like and subscribe :)",
];

export default function Promotion() {
  const [messagesIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);

    const intervalId = setInterval(() => {
      setMessageIndex((i) => (i + 1) % messages.length);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <PromotionsContainer>
      <Slide
        direction={show ? "left" : "right"}
        in={show}
        timeout={{
          enter: 500,
          exit: 100,
        }}
      >
        <Box>
          <MessageText>{messages[messagesIndex]}</MessageText>
        </Box>
      </Slide>
    </PromotionsContainer>
  );
}
