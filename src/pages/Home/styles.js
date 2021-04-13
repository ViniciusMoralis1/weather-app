import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 22,
    margin: 36,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    marginTop: 24,
    margin: 12,
  },
  inputCidade: {
    width: 220,
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    marginTop: 12,
    color: '#fff',
    borderRadius: 15,
    padding: 12,
  },
  continueButton: {
    height: 60,
    width: 140,
    backgroundColor: '#2398F7',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 48,
    borderRadius: 25,
    paddingHorizontal: 12,
    flexDirection: 'row',
  },
  continueText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
