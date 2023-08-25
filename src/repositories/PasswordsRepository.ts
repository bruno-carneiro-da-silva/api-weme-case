import { AppDataSource } from "../data-source";
import { Password } from '../entities/Passwords';

export const PasswordsRepository = AppDataSource.getRepository(Password)