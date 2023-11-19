import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
} from 'react-native';
import i18n from '../../services/i18n';
import React, {useEffect, useState} from 'react';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {settingsActions} from '../../store';
const errors = {
  'Email is required': {
    code: '001',
    message: 'email is required',
  },
  'Password is required': {
    code: '002',
    message: 'password is required',
  },
  'Email is invalid': {
    code: '003',
    message: 'email is invalid',
  },
  'Password must be at least 6 characters': {
    code: '004',
    message: 'password must be at least 6 characters',
  },
  'Password does not match': {
    code: '005',
    message: 'password does not match',
  },
  'Name is required': {
    code: '006',
    message: 'name is required',
  },
};

const RegisterScreen = ({navigation}) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    repassword: '',
  });
  const [error, setError] = useState(null);
  const {t} = useTranslation('translation', {keyPrefix: 'register'});
  const [keyBoard, setKeyBoard] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyBoard(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyBoard(false);
      },
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    dispatch(settingsActions.setLanguage(lng));
  };
  const formValidation = () => {
    setError(null);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (form.email.length === 0) {
      setError(errors['Email is required']);
      return false;
    }
    if (form.password.length === 0) {
      setError(errors['Password is required']);
      return false;
    }
    if (!emailRegex.test(form.email)) {
      setError(errors['Email is invalid']);
      return false;
    }
    if (form.password.length < 6) {
      setError(errors['Password must be at least 6 characters']);
      return false;
    }
    if (form.name.length === 0) {
      setError(errors['Name is required']);
      return false;
    }
    return true;
  };
  const handleLogin = () => {
    if (formValidation()) {
      alert('Login success');
    }
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
          <Text style={styles.registertext}>{t('register')}</Text>
          <TouchableOpacity
            style={styles.languagebutton}
            onPress={() => {
              i18n.language === 'en'
                ? changeLanguage('vi')
                : changeLanguage('en');
            }}>
            <Text style={styles.registertext}>
              {i18n.language === 'en' ? 'EN' : 'VI'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infobottom}>
          <Text style={styles.heading}>{t('welcome to votio')}</Text>
          {!keyBoard && (
            <Text style={styles.title}>{t('votio description')}</Text>
          )}
        </View>
      </View>
      <View style={styles.form}>
        <View style={styles.inputbox}>
          <MaterialCommunityIcons
            name="account"
            style={styles.icon}
            size={20}
            color="white"
          />
          <TextInput
            style={styles.input}
            placeholder={t('name')}
            placeholderTextColor={'white'}
            value={form.name}
            onChangeText={text => {
              setForm({...form, name: text});
              if (error && error.code === '006') {
                setError(null);
              }
            }}
          />
        </View>

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
            onChangeText={text => {
              setForm({...form, email: text});
              if (error && (error.code === '001' || error.code === '003')) {
                setError(null);
              }
            }}
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
            onChangeText={text => {
              setForm({...form, password: text});
              if (error && (error.code === '002' || error.code === '004')) {
                setError(null);
              }
            }}
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
            placeholder={t('confirm password')}
            placeholderTextColor={'white'}
            value={form.repassword}
            onChangeText={text => {
              setForm({...form, repassword: text});
              if (text !== form.password) {
                setError(errors['Password does not match']);
              } else {
                if (error && error.code === '005') {
                  setError(null);
                }
              }
            }}
          />
        </View>

        {error && <Text style={styles.errortext}>{t(error.message)}</Text>}
        <TouchableOpacity
          style={styles.registerbutton}
          onPress={() => handleLogin()}>
          <Text style={styles.buttontext}>{t('register')}</Text>
        </TouchableOpacity>
        <View style={styles.linkcontainer}>
          <Text style={styles.title}>{t('already have an account')}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.linktext}>{t('sign in')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

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
  registertext: {
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
    textAlign: 'center',
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
  registerbutton: {
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
  errortext: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 10,
  },
});
