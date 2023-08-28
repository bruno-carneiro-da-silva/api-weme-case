import { AppDataSource } from "../data-source";
import { Password } from '../entities/Password_resets';

export const PasswordsResetRepository = AppDataSource.getRepository(Password)