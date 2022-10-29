import React from "react";
import { View } from "react-native";

import { Container } from "./styles";

const Header = ({ children }: any) => {
  return (
    <Container
      style={{
        shadowColor: "#ce3df3",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.6,
        shadowRadius: 6,
      }}
    >
      {children}
    </Container>
  );
};

export default Header;
