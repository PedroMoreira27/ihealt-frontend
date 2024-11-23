import { colors } from "@/styles/colors";
import styled from "styled-components/native";

interface IClinicProps {
	name: string;
  address: string;
  phone: string;
  services: {name: string}[];
}

export const Card = styled.View`
  width: 200px;
  height: 126px;
  background-color: ${colors.surface};
  border-width: 1px;
  border-color: ${colors.outline} ;
  border-radius: 12px;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const CardHeader = styled.View`
  
`;

export const Text = styled.Text`
  
`;

export const ClinicCard = ({ name, address, phone, services }: IClinicProps) => {
	return (
    <Card>
			<Text style={{ fontWeight: "bold" }}>{name}</Text>
			<Text style={{ fontWeight: "bold" }}>{address}</Text>
			<Text style={{ fontWeight: "bold" }}>{phone}</Text>
      {services.map((service, index) => (
        <Text style={{ fontWeight: "bold" }} key={index}>{service.name}</Text>
      ))}
		</Card>
	);
};
