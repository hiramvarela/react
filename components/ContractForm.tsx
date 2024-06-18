import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const ContractForm = ({ user, object, onLoanRegister }) => {
  const [ceiitName, setCeiitName] = useState('');

  const handleSaveContract = () => {
    if (!ceiitName) {
      Alert.alert("Por favor complete todos los campos");
      return;
    }

    handleLoanRegisterClick();
  };

  const handleLoanRegisterClick = () => {
    onLoanRegister({
      userId: user._id,
      ceiitId: object._id,
      date: new Date().toISOString()
    });
    Alert.alert("Préstamo registrado correctamente");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{new Date().toLocaleDateString()}</Text>
      <Text style={styles.text}>{object.lugar}</Text>
      <Text style={styles.text}>
        Por medio del presente, doy fe que {user.name} {user.surName} con matrícula {user.tuition} tiene en su poder el objeto {object.NOMBRE} en óptimas condiciones y se compromete a regresarlo igualmente en condiciones en el plazo establecido.
      </Text>
      <TextInput
        style={styles.largeInput}
        placeholder="Nombre del encargado"
        value={ceiitName}
        onChangeText={setCeiitName}
      />
      <Button title="Registrar Préstamo" onPress={handleSaveContract} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  largeInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginVertical: 10,
    fontSize: 16,
    padding: 10,
    height: 60,
    textAlignVertical: 'top',
  },
});

export default ContractForm;
