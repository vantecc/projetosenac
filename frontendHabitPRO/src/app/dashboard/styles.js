import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  inputContainer: {
    flex: 0.6,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  buttom: {
    height: 90,
    width: 90
  },
  user: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: "space-between",
    width: "100%",
  },
  buttonContainer: {
    flex: 0.6,
    alignItems:'flex-end',
    marginTop: 20,
    gap: 15,
    width: "100%",
  },
  icon: {
    height: 30,
    width: 30
  },
  textTitle: {
    color: "#fff",
    fontSize: 26,
    marginBottom: 20,
    flex: 0.5,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },

  userGreetingBox: {
    backgroundColor: '#A0D2EB',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    minWidth: 180,
    height: 50,
  },
  
  userGreetingText: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
footer: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: '#fff',
  paddingTop: 10,
  paddingBottom: 25,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: -2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 10,
  position: 'absolute',
  bottom: 0,
  width: '100%',
},

footerItem: {
  alignItems: 'center',
},

footerText: {
  fontSize: 20,
  color: '#333',
  marginTop: 2,
},

plusButton: {
  backgroundColor: '#A0D2EB',
  width: 60,
  height: 60,
  borderRadius: 30,
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 30,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
  elevation: 8,
},










});
