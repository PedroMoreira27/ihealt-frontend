import styled from "styled-components/native";
import React, { useEffect, useState } from "react";
import { colors } from "@/styles/colors";
import { FlatList, StatusBar, ScrollView, View, ActivityIndicator, StyleSheet } from "react-native";
import { ClinicCard } from "@/components/clinic-card";
import { SearchInput } from "@/components/search-input";
import Icon from "react-native-vector-icons/Ionicons";
import api from "../../Api";

interface IAddress {
  address: string;
  number: string;
  district: string;
  city: string;
  uf: string;
  code: string;
}

interface IClinicProps {
  id: number;
  name: string;
  address: IAddress;
  phone: string;
}

const Container = styled.View`
  padding: 24px;
  flex: 1;
  background-color: ${colors.surface};
`;

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.surface};
`;

const Text = styled.Text`
  font-size: 28px;
  font-weight: 700;
`;

const CategoryWrapper = styled.View`
  margin: 20px 20px;
`;

const Separator = styled.View`
  width: 8px;
  height: 24px;
  background-color: ${colors.surface};
`;

const ContainerSearch = styled.View`
  height: 100px;
  width: 100%;
  background-color: ${colors.surface};
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`;

export default function Home() {
  const [clinicsData, setClinics] = useState<IClinicProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
	api.get("/clinics")
	.then((response) => {
	  console.log(response.data);
	  if (response.data) {
		const sanitizedData = response.data.map((clinic) => ({
		  id: clinic.id || Math.random(),
		  name: clinic.name || "Nome não disponível",
		  address: clinic.address || [],
		  phone: clinic.phone || "Telefone não disponível",
		}));
		setClinics(sanitizedData);
	  } else {
		setError(true);
	  }
	})
	.catch((error) => {
	  console.error("Erro ao buscar clínicas:", error);
	  setError(true);
	})
	.finally(() => setLoading(false));
  
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading Clinics...</Text>
      </View>
    );
  }

  if (error || clinicsData.length === 0) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>No Clinics available or an error occurred.</Text>
      </View>
    );
  }

  const renderClinic = ({ item }: { item: IClinicProps }) => (
    <ClinicCard
      name={item.name}
      address={item.address.address}
	  number={item.address.number}
      city={item.address.city}
      uf={item.address.uf}
      district={item.address.district}
      code={item.address.code}
      phone={item.phone}
    />
  );

  return (
    <SafeAreaView>
      <Container>
        <ScrollView>
          <CategoryWrapper>
            <Text>Encontre os melhores serviços de saúde perto de você</Text>
            <ContainerSearch>
              <SearchInput placeholder="Procure serviços próximos..." />
            </ContainerSearch>
            <Text style={styles.sectionTitle}>
              <Icon name="medkit" size={24} color="#000" /> Clínicas
            </Text>
            <FlatList
              horizontal
              data={clinicsData}
              renderItem={renderClinic}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => <Separator />}
              showsHorizontalScrollIndicator={false}
            />
          </CategoryWrapper>
        </ScrollView>
      </Container>
      <StatusBar backgroundColor={colors.surface} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  errorContainer: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  errorText: { fontSize: 16, color: "red", textAlign: "center" },
  sectionTitle: { fontWeight: "bold", fontSize: 20, marginTop: 20, marginBottom: 20 },
});
