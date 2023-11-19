import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import OnboardMainImg from '../../assets/svg2jsx/OnboardMainImg';
import i18n from '../../services/i18n';
import {useTranslation} from 'react-i18next';
import {settingsActions} from '../../store';
import {useDispatch} from 'react-redux';

const OnboardingScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    dispatch(settingsActions.setLanguage(lng));
  };
  const {t} = useTranslation('translation', {keyPrefix: 'onboarding'});
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.languagebutton}
        onPress={() => {
          i18n.language === 'en' ? changeLanguage('vi') : changeLanguage('en');
        }}>
        <Text style={styles.languagetext}>
          {i18n.language === 'en' ? 'EN' : 'VI'}
        </Text>
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.heading}>{t('welcome to votio')}</Text>
        <OnboardMainImg width={300} height={300} />
        <Text style={styles.decription}>
          {t('welcome to votio description')}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Vote')}
          style={styles.buttonVote}>
          <Text style={styles.buttonVoteText}>{t('vote')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.buttonLogin}>
          <Text style={styles.buttonLoginText}>{t('sign in')}</Text>
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

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00224F',
    paddingTop: 20,
  },
  infoContainer: {
    flex: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    paddingTop: 40,
  },
  languagebutton: {
    width: 50,
    height: 30,
    backgroundColor: '#11325C',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  languagetext: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  decription: {
    color: '#51DAEC',
    fontSize: 16,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttonVote: {
    width: '100%',
    height: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    paddingBottom: 5,
    backgroundColor: '#3367d5',
  },
  buttonVoteText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonLogin: {
    width: '100%',
    height: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    paddingBottom: 5,
    backgroundColor: '#1e1b32',
  },
  buttonLoginText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  linkcontainer: {
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
  title: {
    color: '#6E819A',
    fontSize: 14,
  },
});
