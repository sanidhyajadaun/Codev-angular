export interface Registration {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  otp: string;
  address: {
    city: string;
    state: string;
    postalCode: string;
  };
  subscribe: boolean;
  alternateEmails: string[];
  profileImage?:File;
}
