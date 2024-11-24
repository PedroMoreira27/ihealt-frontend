import { colors } from "@/styles/colors";
import styled from "styled-components/native";

interface IAddress {
  address: string;
  number: string;
  district: string;
  city: string;
  uf: string;
  code: string;
}

interface IClinicProps {
  name: string;
  address: IAddress | IAddress[];
  phone: string;
}

export const Card = styled.View`
  width: 200px;
  height: auto;
  background-color: ${colors.surface};
  border-width: 1px;
  border-color: ${colors.outline};
  border-radius: 12px;
  padding: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
`;

export const Text = styled.Text`
  font-size: 14px;
`;

export const ClinicCard = ({ name, address, phone }: IClinicProps) => {
  const addresses = Array.isArray(address) ? address : [address];

  return (
    <Card>
      <Text style={{ fontWeight: "bold" }}>{name}</Text>
      <Text style={{ fontWeight: "bold" }}>{phone}</Text>
      {addresses.map((service, index) => (
        <Text key={index}>
          {service.address}, {service.number} - {service.district}, {service.city}/{service.uf} - CEP: {service.code}
        </Text>
      ))}
    </Card>
  );
};
