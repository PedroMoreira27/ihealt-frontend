import styled from "styled-components/native";
import { colors } from "../styles/colors";
export const Button = styled.TouchableOpacity
	`
  background-color: ${colors.primary};
  width: 100%;
  color: ${colors.colorOnPrimary};
  padding: 8px;
  border-radius: 999px;
`;
