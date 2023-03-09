export interface authObjectInterface {
  "/sign-in": (email: string, password: string) => Promise<void>;
  "/register": (
    email: string,
    password: string,
    confirm: string
  ) => Promise<void>;
}

export interface errorsInterface {
  "auth/invalid-email": string;
  "auth/email-already-in-use": string;
  "auth/internal-error": string;
  "auth/user-not-found": string;
  "auth/wrong-password": string;
  "wrong-confirm": string;
}

export interface storeInteface {
    email: string,
    password: string,
    confirm: string,
}

export interface errorFB {
    code: string;   
}
