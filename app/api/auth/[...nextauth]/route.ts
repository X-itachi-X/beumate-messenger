import bcrypt from "bcrypt";
import NextAuth, { AuthOptions } from "next-auth";
import { CredentialsProvider } from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/"