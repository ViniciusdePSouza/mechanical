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

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { TouchableOpacity } from "react-native-gesture-handler";
import { t } from "i18next";
import {
  formatDate,
  platePattern,
  validateCPF,
} from "../../utils/validators/validators";
import { userInfo } from "../../config/user";

const IndicateFriendSchema = yup.object({
  friendsName: yup.string().required(() => t("validationFriendsName")),
  friendsEmail: yup
    .string()
    .email(() => t("validationValidEmail"))
    .required(() => t("validationFriendsEmail")),
  friendsPhoneNumber: yup.string().required(() => t("validationFriendsPhone")),
  associateName: yup.string().required(() => t("validationFriendsName")),
  associateEmail: yup
    .string()
    .required(() => t("validationAssociateEmail"))
    .email(() => t("validationValidEmail")),
  associateCpf: yup
    .string()
    .required(() => t("validationCpfRequired"))
    .test({
      name: "cpf",
      message: () => t("cpfValiation"),
      test: (value: string) => validateCPF(value),
    }),
  associatePhoneNumber: yup
    .string()
    .required(() => t("validationAssociatePhone")),
  vehiclePlate: yup
    .string()
    .required(() => t("validationVehiclePlate"))
    .matches(platePattern, () => t("vehiclePlatePatternValidation")),
});
type IndicateFriendFormData = {
  friendsName: string;
  friendsEmail: string;
  friendsPhoneNumber: string;
  associateName: string;
  associateEmail: string;
  associateCpf: string;
  associatePhoneNumber: string;
  vehiclePlate: string;
};
export function IndicateFriend() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IndicateFriendFormData>({
    resolver: yupResolver(IndicateFriendSchema),
  });

  function handleIndicateFriend({
    associateCpf,
    associateEmail,
    associateName,
    associatePhoneNumber,
    friendsEmail,
    friendsName,
    friendsPhoneNumber,
    vehiclePlate,
  }: IndicateFriendFormData) {
    const formattedDate = formatDate(new Date());

    const indicationObj = {
      CodigoAssociacao: String(userInfo.associationCode),
      DataCriacao: formattedDate,
      CpfAssociado: associateCpf,
      EmailAssociado: associateEmail,
      NomeAssociado: associateName,
      TelefoneAssociado: associatePhoneNumber,
      PlacaVeiculoAssociado: vehiclePlate,
      NomeAmigo: friendsName,
      TelefoneAmigo: friendsPhoneNumber,
      EmailAmigo: friendsEmail,
    };

    const body = {
      indicationObj,
      Remetente: userInfo.userEmail,
      Copias: []
    }

    console.log(body)
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <ScrollView
            style={styles.container}
            keyboardShouldPersistTaps="always"
          >
            <Text style={styles.title}>Indicate Friends</Text>

            <View style={styles.form}>
              <Text style={styles.sectionTitle}>Informações do amigo</Text>

              <Controller
                name="friendsName"
                control={control}
                render={({ field: { onChange, value, onBlur } }) => {
                  return (
                    <FormCustomInput
                      label={t("friendsNamePlaceholder")}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      placeholder={t("friendsNamePlaceholder")}
                    />
                  );
                }}
              />

              {errors.friendsName && (
                <Text style={styles.errorMessage}>
                  {errors.friendsName.message}
                </Text>
              )}

              <Controller
                name="friendsEmail"
                control={control}
                render={({ field: { onChange, value, onBlur } }) => {
                  return (
                    <FormCustomInput
                      label={t("friendsEmailPlaceholder")}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      placeholder={t("friendsEmailPlaceholder")}
                    />
                  );
                }}
              />

              {errors.friendsEmail && (
                <Text style={styles.errorMessage}>
                  {errors.friendsEmail.message}
                </Text>
              )}

              <Controller
                name="friendsPhoneNumber"
                control={control}
                render={({ field: { onChange, value, onBlur } }) => {
                  return (
                    <FormCustomInput
                      label={t("friendsPhonePlaceholder")}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      placeholder={t("friendsPhonePlaceholder")}
                      keyboardType="phone-pad"
                    />
                  );
                }}
              />

              {errors.friendsPhoneNumber && (
                <Text style={styles.errorMessage}>
                  {errors.friendsPhoneNumber.message}
                </Text>
              )}

              <Text style={styles.sectionTitle}>Informações do associado</Text>

              <Controller
                name="associateName"
                control={control}
                render={({ field: { onChange, value, onBlur } }) => {
                  return (
                    <FormCustomInput
                      label={t("associateNamePlaceholder")}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      placeholder={t("associateNamePlaceholder")}
                    />
                  );
                }}
              />

              {errors.associateName && (
                <Text style={styles.errorMessage}>
                  {errors.associateName.message}
                </Text>
              )}

              <Controller
                name="associateEmail"
                control={control}
                render={({ field: { onChange, value, onBlur } }) => {
                  return (
                    <FormCustomInput
                      label={t("associateEmailPlaceholder")}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      placeholder={t("associateEmailPlaceholder")}
                    />
                  );
                }}
              />

              {errors.associateEmail && (
                <Text style={styles.errorMessage}>
                  {errors.associateEmail.message}
                </Text>
              )}

              <Controller
                name="associateCpf"
                control={control}
                render={({ field: { onChange, value, onBlur } }) => {
                  return (
                    <FormCustomInput
                      label={t("associateCpfPlaceholder")}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      placeholder={t("associateCpfPlaceholder")}
                      keyboardType="number-pad"
                    />
                  );
                }}
              />

              {errors.associateCpf && (
                <Text style={styles.errorMessage}>
                  {errors.associateCpf.message}
                </Text>
              )}

              <Controller
                name="associatePhoneNumber"
                control={control}
                render={({ field: { onChange, value, onBlur } }) => {
                  return (
                    <FormCustomInput
                      label={t("friendsPhonePlaceholder")}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      placeholder={t("friendsPhonePlaceholder")}
                      keyboardType="phone-pad"
                    />
                  );
                }}
              />

              {errors.friendsPhoneNumber && (
                <Text style={styles.errorMessage}>
                  {errors.friendsPhoneNumber.message}
                </Text>
              )}

              <Controller
                name="vehiclePlate"
                control={control}
                render={({ field: { onChange, value, onBlur } }) => {
                  return (
                    <FormCustomInput
                      label={t("vehiclePlatePlaceholder")}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      placeholder={t("vehiclePlatePlaceholder")}
                      keyboardType="name-phone-pad"
                    />
                  );
                }}
              />

              {errors.vehiclePlate && (
                <Text style={styles.errorMessage}>
                  {errors.vehiclePlate.message}
                </Text>
              )}

              <View style={{ width: "90%", marginTop: 16 }}>
                <TouchableOpacity
                  onPress={handleSubmit(handleIndicateFriend)}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
