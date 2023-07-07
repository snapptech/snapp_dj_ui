declare namespace NodeJS {
  interface ProcessEnv {
    // Client SDK
    FIREBASE_CLIENT_API_KEY: string;
    FIREBASE_CLIENT_AUTH_DOMAIN: string;
    FIREBASE_CLIENT_PROJECT_ID: string;
    FIREBASE_CLIENT_STORAGE_BUCKET: string;
    FIREBASE_CLIENT_MESSAGING_SENDER_ID: string;
    FIREBASE_CLIENT_APP_ID: string;
    FIREBASE_CLIENT_MEASUREMENT_ID: string;
  }
}
