export interface Registration {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  address: {
    city: string;
    state: string;
    postalCode: string;
  };
  subscribe: boolean;
  alternateEmails: string[];
  profileImage?:File;
}
