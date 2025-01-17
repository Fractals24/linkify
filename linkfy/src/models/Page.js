import { Schema, model, models } from "mongoose";

const PageSchema = new Schema(
  {
    uri: {
      type: String,
      required: true,
      min: 1,
      unique: true,
    },
  },
  { timestamps: true } // Correct placement of timestamps
);

export const Page = models?.Page || model("Page", PageSchema);
