export type CreateUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  username: string;
  phoneNumber?: string;
  code: string;
};

export interface LoginResponse {
  userId: number;
  token: string;
}

export interface UserDomain {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  username: string;
  phoneNumber?: string;
  imageUrl?: string;
  imagePublicId?: string;
  loginDevice?: string;
  deletedAt: Date;
  id: number;
  isVerified: boolean;
  reference: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthData {
  email: string;
  password: string;
}
