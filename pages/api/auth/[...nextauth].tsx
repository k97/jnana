import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const isCorrectCredentials = (credentials: any) =>
  credentials.username === "cometogether"

const options = {
  // Configure one or more authentication providers
  pages: {
    signIn: '/passphrase',
  },
  providers: [
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Enter',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: { label: 'Passphrase', type: 'text' },
      },
      authorize: async (credentials: any) => {
        if (isCorrectCredentials(credentials)) {
          const user = { id: 1, name: 'Privileged user' };
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
};

export default (req: any, res: any) => NextAuth(req, res, options);
