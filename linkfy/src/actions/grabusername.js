'use server'

import { Page } from "@/models/Page";
import mongoose from "mongoose";

export default async function grabusername(formData) {
    const username = formData.get('username');
    mongoose.connect(process.env.MONGO_URI);
    const pageDoc = await Page.create({uri:username});
}