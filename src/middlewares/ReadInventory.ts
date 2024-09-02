import { Request, Response } from "express";

import { ITDBconnect } from "../databse/database.js";
const ITDB = await ITDBconnect();

export async function ReadInventory(req: Request, res: Response) {
  const TempIndex = parseInt((req.query.index ?? "1").toString());
  const lmt = parseInt((req.query.limit ?? 5).toString());
  const index = (TempIndex - 1) * lmt;
  const response = await ITDB?.find().skip(index).limit(lmt);
  console.log(response);
  res.send(response);
}

export async function ReadCompInventory(req: Request, res: Response) {
  const TempIndex = parseInt((req.query.index ?? "1").toString());
  const lmt = parseInt((req.query.limit ?? 5).toString());
  const index = (TempIndex - 1) * lmt;
  const response = await ITDB?.find().skip(index).limit(lmt);
  console.log(response);
  res.send(response);
}
