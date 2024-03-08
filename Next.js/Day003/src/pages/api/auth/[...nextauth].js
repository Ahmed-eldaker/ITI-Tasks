import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: "1372837628ebadffde4a",
      clientSecret: "cf99dfd74591e89164cc5557da73fa38dbf77480",
    }),
  ],
};
export default NextAuth(authOptions);
