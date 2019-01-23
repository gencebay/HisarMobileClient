import { AsyncStorage } from "react-native";

export namespace StorageHelper {
  const TOKEN_KEY = "TOKEN_KEY";

  export function onSignIn(token: string): Promise<void> {
    return AsyncStorage.setItem(TOKEN_KEY, token);
  }

  export function onSignOut(): Promise<void> {
    return AsyncStorage.removeItem(TOKEN_KEY);
  }

  export function isSignedIn() {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(TOKEN_KEY)
        .then(res => {
          if (res !== null) {
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch(err => reject(err));
    });
  }
}
