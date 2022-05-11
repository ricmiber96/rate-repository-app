import React from 'react'
import { Formik, useField } from 'formik'
import { Button, StyleSheet, View } from 'react-native'
import StyledTextInput from '../components/StyledTextInput.jsx'
import StyledText from '../components/StyledText.jsx'
import {loginValidatonSchema} from '../validationSchemas/login'

const initialValues = {
  email: '',
  password: ''
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 20,
    marginTop: -5
  },
  form: {
    margin: 12
  }
})

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)

  return (
    <>
      <StyledTextInput
        value={field.value}
        onChangeText={value => helpers.setValue(value)}
        error={meta.error}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  )
}

// const validate = values => {
//     const errors = {}

//     if(!values.email){
//         errors.email = "Email required"
//     }else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(values.email)){
//        errors.email = "Invalid email address"
//     }

//     console.log(errors);

//     return errors;
// }

export default function LogInPage () {
  return (
    // <Formik validate={validate} initialValues={initialValues} onSubmit={values => console.log(values)}>
    <Formik validationSchema={loginValidatonSchema} initialValues={initialValues} onSubmit={values => console.log(values)}>
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue
              name='email'
              placeholder='Email'
            />
            <FormikInputValue
              name='password'
              placeholder='Password'
              secureTextEntry
            />
            <Button onPress={handleSubmit} title='Log In' />
          </View>
        )
      }}
    </Formik>
  )
}