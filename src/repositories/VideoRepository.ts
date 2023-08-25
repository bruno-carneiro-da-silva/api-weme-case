import { AppDataSource } from "../data-source";
import { Videos } from "../entities/Videos";

export const VideoRepository = AppDataSource.getRepository(Videos)
