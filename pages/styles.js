import { StyleSheet } from 'react-native';

const gray = '#EFF9F0';
const blue = '#1E3888';
const green = '#082D0F';
const red = '#A53860';
const brown = '#4C1C00';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray,
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    color: blue,
    textAlign: 'center',
    paddingBottom: 20,
  },
  smallText: {
    fontSize: 20,
    color: brown,
    textAlign: 'center',
    paddingBottom: 10,
  },
  button: {
    backgroundColor: red,
    borderRadius: 5,
    padding: 10,
    margin: 5,
    width: 100,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: gray,
    textAlign: 'center',
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 250,
    height: 60,
    padding: 10,
    borderWidth: 2,
    borderColor: green,
    marginBottom: 10,
    fontSize: 20,
  },
  errorText: {
    fontSize: 15,
    color: red,
    textAlign: 'center',
    paddingBottom: 5,
    margin: 10,
  },
});

export default styles;
