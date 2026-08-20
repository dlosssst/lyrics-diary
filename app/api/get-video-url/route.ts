import { NextResponse } from "next/server";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { r2Client } from '../../../src/lib/r2';

export async function GET(req:Request){
  const {searchParams} = new URL(req.url);
  const key = searchParams.get("key");
  if(!key) return NextResponse.json({error:"key missing"},{status:400});

  const command = new GetObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME!,
    Key: key
  });
  const signedUrl = await getSignedUrl(r2Client, command, {expiresIn:3600});
  return NextResponse.json({signedUrl});
}