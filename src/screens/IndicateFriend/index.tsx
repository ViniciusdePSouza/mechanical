import {
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { styles } from "./styles";
import { FormCustomInput } from "../../components/FormInput";
import { CustomButton } from "../../components/CustomButton";

export function IndicateFriend() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior="padding"
        >
          <ScrollView
            style={styles.container}
            keyboardShouldPersistTaps="always"
          >
            <Text style={styles.title}>Indicate Friends</Text>

            <View style={styles.form}>
              <Text style={styles.sectionTitle}>Informações do amigo</Text>
              <FormCustomInput
                placeholder="Fulano da Silva"
                label={"Nome do amigo"}
              />
              <FormCustomInput
                placeholder="fulanodasilva@gmail.com"
                label={"Email do amigo"}
              />
              <FormCustomInput
                placeholder="(XX) XXXXX-XXXX"
                label={"Telefone do amigo"}
                keyboardType="phone-pad"
              />
              <Text style={styles.sectionTitle}>Informações do associado</Text>
              <FormCustomInput
                placeholder="Fulano da Silva"
                label={"Nome do associado"}
              />
              <FormCustomInput
                placeholder="fulanodasilva@gmail.com"
                label={"Email do associado"}
              />
              <FormCustomInput
                placeholder="(XX) XXXXX-XXXX"
                label={"Telefone do associado"}
                keyboardType="phone-pad"
              />

              <FormCustomInput
                placeholder="XXX-0000"
                label={"Placa do veículo do associado"}
                keyboardType="phone-pad"
              />
              <FormCustomInput
                placeholder="XXX.XXX.XXX-XX"
                label={"Cpf do associado"}
                keyboardType="phone-pad"
              />
              <FormCustomInput
                placeholder="XXX"
                label={"Código da associação"}
                keyboardType="phone-pad"
              />

              <View style={{ width: "90%" }}>
                <CustomButton
                  title={"Salvar"}
                  onPressFunction={() => console.log("chegando")}
                  variant={"PRIMARY"}
                />
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
