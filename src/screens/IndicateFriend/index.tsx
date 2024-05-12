import {
  IndicateFriendFormData,
  IndicateFriendPostBody,
  IndicateFriendProps,
} from "../../@types";

import {
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { styles } from "./styles";
import theme from "../../theme/global";

import { FormCustomInput } from "../../components/FormInput";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";

import { t } from "i18next";

import {
  emailPattern,
  formatDate,
  platePattern,
  validateCPF,
} from "../../utils/validators/validators";

import { userInfo } from "../../config/user";

import { postFriend } from "../../services/friendService";

import { useNavigation } from "@react-navigation/native";
import { formatNumbersOnly } from "../../utils/validators/formatters";
import { Loading } from "../../components/Loading";

const IndicateFriendSchema = yup.object({
  friendsName: yup
    .string()
    .required(() => t("validationFriendsName"))
    .min(10, t("validationNameLength")),
  friendsEmail: yup
    .string()
    .email(() => t("validationValidEmail"))
    .required(() => t("validationFriendsEmail"))
    .matches(emailPattern, () => t("validationValidEmail")),
  friendsPhoneNumber: yup
    .string()
    .required(() => t("validationFriendsPhone"))
    .min(15, t("validationPhoneNumberLength"))
    .max(15, t("validationPhoneNumberLength")),
  associateName: yup
    .string()
    .required(() => t("validationFriendsName"))
    .min(10, t("validationNameLength")),
  associateEmail: yup
    .string()
    .required(() => t("validationAssociateEmail"))
    .matches(emailPattern, () => t("validationValidEmail")),
  associateCpf: yup
    .string()
    .required(() => t("validationCpfRequired"))
    .min(11, t("validatorCpfLength"))
    .test({
      name: "cpf",
      message: () => t("cpfValiation"),
      test: (value: string) => validateCPF(value),
    }),
  associatePhoneNumber: yup
    .string()
    .required(() => t("validationAssociatePhone"))
    .min(15, t("validationPhoneNumberLength"))
    .max(15, t("validationPhoneNumberLength")),
  vehiclePlate: yup
    .string()
    .required(() => t("validationVehiclePlate"))
    .matches(platePattern, () => t("vehiclePlatePatternValidation")),
});

export function IndicateFriend() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<IndicateFriendFormData>({
    resolver: yupResolver(IndicateFriendSchema),
  });

  async function handleIndicateFriend({
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

    const indicationObj: IndicateFriendProps = {
      CodigoAssociacao: String(userInfo.associationCode),
      DataCriacao: formattedDate,
      CpfAssociado: formatNumbersOnly(associateCpf),
      EmailAssociado: associateEmail,
      NomeAssociado: associateName,
      TelefoneAssociado: formatNumbersOnly(associatePhoneNumber),
      PlacaVeiculoAssociado: vehiclePlate,
      NomeAmigo: friendsName,
      TelefoneAmigo: formatNumbersOnly(friendsPhoneNumber),
      EmailAmigo: friendsEmail,
    };

    const body: IndicateFriendPostBody = {
      Indicacao: indicationObj,
      Remetente: userInfo.userEmail,
      Copias: [],
    };

    try {
      const response = await handleIndication(body);

      if (response["Sucesso"] == null) {
        throw new Error(response["RetornoErro"]["retornoErro"]);
      }

      Alert.alert(response["Sucesso"]);

      reset();

      navigation.navigate("DefineLanguage" as never);
    } catch (error: any) {
      const errorMessage = error.message
        ? error.message
        : () => t("genericErrorMessage");
      Alert.alert(errorMessage);
    }
  }

  async function handleIndication(body: IndicateFriendPostBody) {
    const response = await postFriend(body);

    return response;
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <ScrollView keyboardShouldPersistTaps="always">
            <Text style={styles.title}>{t("indicateFriends")}</Text>

            <View style={styles.form}>
              <Text style={styles.sectionTitle}>{t("friendsInfo")}</Text>

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
                      maxLength={15}
                      placeholder={t("friendsPhonePlaceholder")}
                      type="cel-phone"
                      options={{
                        maskType: "BRL",
                        withDDD: true,
                        dddMask: "(99) ",
                      }}
                    />
                  );
                }}
              />

              {errors.friendsPhoneNumber && (
                <Text style={styles.errorMessage}>
                  {errors.friendsPhoneNumber.message}
                </Text>
              )}

              <Text style={styles.sectionTitle}>{t("associatesInfo")}</Text>

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
                      type="cpf"
                      options={{}}
                      maxLength={14}
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
                      type="cel-phone"
                      options={{
                        maskType: "BRL",
                        withDDD: true,
                        dddMask: "(99) ",
                      }}
                      label={t("associatePhonePlaceholder")}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      maxLength={15}
                      value={value}
                      placeholder={t("associatePhonePlaceholder")}
                      keyboardType="phone-pad"
                    />
                  );
                }}
              />

              {errors.associatePhoneNumber && (
                <Text style={styles.errorMessage}>
                  {errors.associatePhoneNumber.message}
                </Text>
              )}

              <Controller
                name="vehiclePlate"
                control={control}
                render={({ field: { onChange, value, onBlur } }) => {
                  const handleChange = (text: string) => {
                    const upperCaseText = text.toUpperCase();
                    onChange(upperCaseText);
                  };

                  return (
                    <FormCustomInput
                      type="custom"
                      options={{
                        mask: "AAA-9999",
                      }}
                      maxLength={8}
                      label={t("vehiclePlatePlaceholder")}
                      onChangeText={handleChange}
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
                  style={[styles.button, !isValid && styles.disabledButton]}
                  disabled={!isValid || isSubmitting}
                >
                  {isSubmitting ? (
                    <ActivityIndicator color={theme.COLORS.YELLOW_700} />
                  ) : isValid ? (
                    <Text style={styles.buttonText}>{t("save")}</Text>
                  ) : (
                    <Text style={styles.buttonText}>{t("checkForm")}</Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
