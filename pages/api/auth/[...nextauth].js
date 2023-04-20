import NextAuth from 'next-auth';
//providers
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
// import CredentialsProvider from 'next-auth/providers/credentials';
//db related
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../helper/utils/connectDB';
import connectDB from '../../../helper/utils/mongooseDB';
import { User } from '../../../helper/utils/Models';
import { verifyPassword } from '../../../helper/utils/functions';
// import clientPromise from '../../../helper/utils/connectDBV2';

const authAdapter = MongoDBAdapter(clientPromise);

const authProviders = [
  GitHubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
  }),
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  }),

  CredentialsProvider({
    async authorize(credentials, req) {
      const { email, password } = credentials;
      if (!email || !password) throw new Error('invalid email or password');
      //connect to db
      try {
        await connectDB();
      } catch (err) {
        throw new Error(err);
      }
      //check if user is there
      const user = await User.findOne({ email: email });
      if (!user) throw new Error('User is not registered');
      //check if password is ok
      const isValid = await verifyPassword(password, user.password);
      if (!isValid) throw new Error('Email or password is wrong');
      return email;
    },
  }),
];

const authOptions = {
  adapter: authAdapter,
  session: { strategy: 'jwt' },
  providers: authProviders,
  callbacks: {
    async signInError(error, _user, _account) {
      throw new Error(error.message);
    },
  },
  pages: {
    error: '',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
