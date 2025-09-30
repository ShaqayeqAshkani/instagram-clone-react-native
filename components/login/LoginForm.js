
import { useFormik } from "formik";
import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import * as Yup from "yup";
import { useNavigation } from '@react-navigation/native';

const LoginForm = () => {
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('required'),
      password: Yup.string().required('required'),
    }),
    onSubmit: (values) => {
      
      navigation.replace('Application');
    },
  });
  return (
    <View style={styles.wrapper}>
      <View style={styles.inputFild}>
        <TextInput
          placeholder="phone number , username or email"
          placeholderTextColor="#444"
          textContentType="emailAddress"
          autoFocus={true}
          autoCapitalize="none"
          value={formik.values.email}
          onChangeText={formik.handleChange("email")}
          onBlur={formik.handleBlur("email")}
        />
      </View>
      {
      formik.touched.email && formik.errors.email ?(
        <Text style={{color: 'red'}}> {formik.errors.email}</Text>
      ): null
      }

      <View style={styles.inputFild}>
        <TextInput
          placeholder="password"
          placeholderTextColor="#444"
          textContentType="password"
          autoCorrect={false}
          secureTextEntry={true}
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
        />
      </View>
{
      formik.touched.password && formik.errors.password ?(
        <Text style={{color: 'red'}}> {formik.errors.password}</Text>
      ): null
      }

      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 60,
  },
  inputFild: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
    backgroundColor: "#fafafa",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#0096f6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginTop: 20,
    minHeight: 42,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
});
