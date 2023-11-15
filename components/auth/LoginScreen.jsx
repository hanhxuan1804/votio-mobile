import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} from 'react-native';
import i18n from '../../services/i18n';
import React, {useState} from 'react';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTranslation} from 'react-i18next';

const LoginScreen = ({navigation}) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const {t} = useTranslation('translation', {keyPrefix: 'login'});

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <View style={styles.infotop}>
          <TouchableOpacity
            style={styles.backbutton}
            onPress={() => navigation.pop()}>
            <FontAwesome5Icons name="angle-left" size={20} color="white" />
          </TouchableOpacity>
          <Text style={styles.logintext}>{t('login')}</Text>
          <TouchableOpacity
            style={styles.languagebutton}
            onPress={() => {
              i18n.language === 'en'
                ? changeLanguage('vi')
                : changeLanguage('en');
            }}>
            <Text style={styles.logintext}>
              {i18n.language === 'en' ? 'EN' : 'VI'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infobottom}>
          <Text style={styles.heading}>{t('hello welcome back')}</Text>
          <Text style={styles.title}>
            {t('welcome back to votio. have a good time!')}
          </Text>
          <Text style={styles.title}>{t('please login to your account')}</Text>
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
          <Text style={styles.sociallogintext}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sociallogin}>
          <Image source={require('../../assets/images/facebook.png')} />
          <Text style={styles.sociallogintext}>Facebook</Text>
        </TouchableOpacity>
        <View style={styles.linkcontainer}>
          <Text style={styles.title}>{t('dont have an account')}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.linktext}>{t('sign up')}</Text>
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
