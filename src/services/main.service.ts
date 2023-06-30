import { Request, Response, NextFunction } from "express";
import { httprequest_npm } from "httprequest_npm";
import logger from "../utils/logger";
// import Functions from "../utils/functions";
// import RedisService from "./redis.service";

export async function userRegister(
  req: Request,
  res: Response,
  _next: NextFunction
) {
  const { email, password } = req.body;

  // // Check if email exists in Redis cache
  // const cachedData = await RedisService.getValue(email);
  // if (cachedData) {
  //   return res.status(200).json(JSON.parse(cachedData));
  // }

  // capture full response object
  const response = await httprequest_npm(
    "post",
    `${process.env.HOST}${process.env.USER_PORT}`,
    "user/register",
    {
      email,
      password,
    }
  ).catch((err) => {
    logger.error(err);
  });

  let data;

  // capture data
  if (response) {
    const { dataFromResponse }: any = response;
    data = dataFromResponse;
  }

  res.status(200).json(data);
  return;
}

export async function userLogin(
  req: Request,
  res: Response,
  _next: NextFunction
) {
  const { email, password } = req.body;

  // Check if email exists in Redis cache
  // const cachedData = await RedisService.getValue(email);
  // if (cachedData) {
  //   return res.status(200).json(JSON.parse(cachedData));
  // }

  // capture full response object
  const response = await httprequest_npm(
    "post",
    `${process.env.HOST}${process.env.USER_PORT}`,
    "user/login",
    {
      email,
      password,
    }
  ).catch((err) => {
    logger.error(err);
  });

  let data;

  // capture data
  if (response) {
    const { dataFromResponse }: any = response;
    data = dataFromResponse;
  }

  res.status(200).json(data);
  return;
}
