import { AxiosRequestConfig } from 'axios';
import { UPDATED_SESSION_STORAGE } from 'constants/sessionStorage';
import jwt from 'jwt-decode';
import { UserClass } from './userClass';
import axios, { baseURL } from './axios';

const updateSessionStorage = () => {
  localStorage.setItem(UPDATED_SESSION_STORAGE, JSON.stringify(sessionStorage));
  localStorage.removeItem(UPDATED_SESSION_STORAGE);
};

export class TokenStorage {
  private static readonly LOCAL_STORAGE_TOKEN = 'accessToken';

  private static readonly LOCAL_STORAGE_REFRESH_TOKEN = 'refreshToken';

  public static isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  public static getStorage(): Storage {
    return localStorage;
  }

  public static getAuthentication(): AxiosRequestConfig {
    return {
      headers: { Authorization: `Bearer ${this.getToken()}` },
    };
  }

  public static getNewToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      axios
        .post(
          `${baseURL}new-api/auth/refresh`,
          { refresh_token: this.getRefreshToken() },
          {
            headers: {
              Authorization: '',
            },
          }
        )
        .then((response) => {
          this.storeToken(response.data.token);
          this.storeRefreshToken(response.data.refresh_token);

          resolve(response.data.token);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  public static storeToken(token: string): void {
    this.getStorage().setItem(TokenStorage.LOCAL_STORAGE_TOKEN, token);
    updateSessionStorage();
  }

  public static storeRefreshToken(refreshToken: string): void {
    if (refreshToken) {
      this.getStorage().setItem(TokenStorage.LOCAL_STORAGE_REFRESH_TOKEN, refreshToken);
      updateSessionStorage();
    }
  }

  public static clear(): void {
    sessionStorage.removeItem(TokenStorage.LOCAL_STORAGE_TOKEN);
    sessionStorage.removeItem(TokenStorage.LOCAL_STORAGE_REFRESH_TOKEN);
    localStorage.removeItem(TokenStorage.LOCAL_STORAGE_TOKEN);
    localStorage.removeItem(TokenStorage.LOCAL_STORAGE_REFRESH_TOKEN);
    updateSessionStorage();
  }

  private static getRefreshToken(): string | null {
    return this.getStorage().getItem(TokenStorage.LOCAL_STORAGE_REFRESH_TOKEN);
  }

  public static getToken(): string | null {
    return this.getStorage().getItem(TokenStorage.LOCAL_STORAGE_TOKEN);
  }

  public static currentUser(): UserClass | null {
    const token = this.getToken();
    if (token) {
      const userData = jwt(token);
      return new UserClass(userData);
    }
    return null;
  }

  public static checkIfRemembered() {
    const rememberMe = localStorage.getItem('rememberMe');
    return !!rememberMe;
  }

  public static remember() {
    localStorage.setItem('rememberMe', 'true');
  }

  public static forget() {
    localStorage.removeItem('rememberMe');
  }
}
