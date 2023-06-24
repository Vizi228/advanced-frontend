export interface Profile {
  first: string,
  lastname: string,
  age: number,
  city: string,
  county: string,
  username: string,
  avatar: string,
  currency: string
}

export interface ProfileSchema {
  profileData?: Profile;
  isLoading: boolean;
  error?: string;
  readonly?: boolean;
}
