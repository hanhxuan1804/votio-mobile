import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const languages = {
  en: {
    email: 'Email',
    password: 'Password',
    login: 'Login',
    or: 'or',
    google: 'Google',
    facebook: 'Facebook',
    dontHaveAccount: "Don't have an account?",
    signUp: 'Sign up',
    helloWelcomeBack: 'Hello Welcome Back',
    welcomeBackToVotio: 'Welcome back to Votio. Have a good time',
    pleaseSignInAgain: 'Please sign in again',
  },
  vi: {
    email: 'Email',
    password: 'Mật khẩu',
    login: 'Đăng nhập',
    or: 'hoặc',
    google: 'Google',
    facebook: 'Facebook',
    dontHaveAccount: 'Chưa có tài khoản?',
    signUp: 'Đăng ký',
    helloWelcomeBack: 'Xin chào, Chào mừng trở lại',
    welcomeBackToVotio:
      'Chào mừng trở lại Votio. Chúc bạn có thời gian tốt lành',
    pleaseSignInAgain: 'Vui lòng đăng nhập lại',
  },
};

const LoginScreen = ({navigation}) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [language, setLanguage] = useState('en');

  // Use the selected language to access the correct translations
  const t = key => languages[language][key];

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <View style={styles.infotop}>
          <TouchableOpacity
            style={styles.backbutton}
            onPress={() => navigation.navigate('Home')}>
            <FontAwesome5Icons name="angle-left" size={20} color="white" />
          </TouchableOpacity>
          <Text style={styles.logintext}>{t('login')}</Text>
          <TouchableOpacity
            style={styles.languagebutton}
            onPress={() => {
              language === 'en' ? setLanguage('vi') : setLanguage('en');
            }}>
            <Text style={styles.logintext}>
              {language === 'en' ? 'EN' : 'VI'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infobottom}>
          <Text style={styles.heading}>{t('helloWelcomeBack')}</Text>
          <Text style={styles.title}>{t('welcomeBackToVotio')}</Text>
          <Text style={styles.title}>{t('pleaseSignInAgain')}</Text>
        </View>
      </View>
      <View style={styles.form}>
        <View style={styles.inputbox}>
          <MaterialCommunityIcons
            name="email"
            style={styles.icon}
            size={20}
            color="white"
          />
          <TextInput
            style={styles.input}
            placeholder={t('email')}
            placeholderTextColor={'white'}
            value={form.email}
            onChangeText={text => setForm({...form, email: text})}
          />
        </View>
        <View style={styles.inputbox}>
          <FontAwesome5Icons
            name="lock"
            style={styles.icon}
            size={20}
            color="white"
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder={t('password')}
            placeholderTextColor={'white'}
            value={form.password}
            onChangeText={text => setForm({...form, password: text})}
          />
        </View>
        <TouchableOpacity
          style={styles.loginbutton}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttontext}>{t('login')}</Text>
        </TouchableOpacity>
        <View style={styles.devider}>
          <View style={styles.deviderline} />
          <Text style={styles.devidertext}>{t('or')}</Text>
          <View style={styles.deviderline} />
        </View>
        <TouchableOpacity style={styles.sociallogin}>
          <Image source={require('../../assets/images/google.png')} />
          <Text style={styles.sociallogintext}>{t('google')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sociallogin}>
          <Image source={require('../../assets/images/facebook.png')} />
          <Text style={styles.sociallogintext}>{t('facebook')}</Text>
        </TouchableOpacity>
        <View style={styles.linkcontainer}>
          <Text style={styles.title}>{t('dontHaveAccount')}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.linktext}>{t('signUp')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00224F',
    paddingTop: 10,
  },
  info: {
    flex: 4,
    paddingHorizontal: 20,
  },
  infotop: {
    flex: 3,
    width: '100%',
    alignItems: 'top',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  backbutton: {
    width: 50,
  },
  logintext: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  languagebutton: {
    width: 50,
    height: 30,
    backgroundColor: '#11325C',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infobottom: {
    flex: 7,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  title: {
    color: '#6E819A',
    fontSize: 14,
  },
  text: {
    color: 'white',
    fontSize: 40,
  },
  form: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputbox: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#6E819A',
  },
  icon: {
    flex: 1,
  },
  input: {
    flex: 9,
    height: 50,
    paddingHorizontal: 20,
    color: 'white',
  },
  loginbutton: {
    marginTop: 20,
    width: '80%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 32,
  },
  buttontext: {
    color: '#00224F',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
  },
  devider: {
    width: '80%',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  deviderline: {
    flex: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#6E819A',
  },
  devidertext: {
    flex: 2,
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 10,
  },
  sociallogin: {
    marginTop: 20,
    width: '80%',
    height: 50,
    backgroundColor: '#11325C',
    borderRadius: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sociallogintext: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  linkcontainer: {
    marginTop: 20,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linktext: {
    color: '#3C7EEE',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
