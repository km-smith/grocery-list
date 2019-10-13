import fb from 'firebase/app';
import 'firebase/auth';

export const firebase = fb;

export async function getAppConfig() {
  const response = await fetch('/__/firebase/init.json');
  return await response.json();
}