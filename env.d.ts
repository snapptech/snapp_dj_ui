declare namespace NodeJS {
  interface ProcessEnv {
    // Admin SDK
    FIREBASE_ADMIN_PROJECT_ID: string;
    FIREBASE_ADMIN_CLIENT_EMAIL: string;
    FIREBASE_ADMIN_DATABASE_URL: string;
    FIREBASE_ADMIN_PRIVATE_KEY: string;
    // Client SDK
    FIREBASE_CLIENT_API_KEY: string;
    FIREBASE_CLIENT_AUTH_DOMAIN: string;
    FIREBASE_CLIENT_DATABASE_URL: string;
    FIREBASE_CLIENT_PROJECT_ID: string;
    // Cookie
    COOKIE_NAME: string;
  }
}
