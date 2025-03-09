import { initializeApp, getApps } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
if (!getApps().length) {
  initializeApp();
}
export { auth };
