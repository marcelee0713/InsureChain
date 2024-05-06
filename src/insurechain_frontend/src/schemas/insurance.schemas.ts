import { ZodType, z } from "zod";
import { CreateInsuranceFormData } from "../types/types.auth";

export const insuranceSchema: ZodType<CreateInsuranceFormData> = z.object({
  insuranceName: z
    .string()
    .min(1, { message: "Please provide a username" })
    .max(150, { message: "Please not too long." }),
  description: z
    .string()
    .min(35, {
      message:
        "Please provide a bit longer description that makes your user interested.",
    })
    .max(70, {
      message:
        "This is meant to be only short and interesting, please provide a bit shorted one.",
    }),
  walletAddress: z.string().refine(
    (value) => {
      // Regular expression to match Ethereum addresses
      const ethereumAddressRegex = /^(0x)?[0-9a-fA-F]{40}$/;
      // Regular expression to match Ethereum addresses from Metamask
      const metamaskAddressRegex = /^(0x)?[0-9a-fA-F]{40}$/;

      return metamaskAddressRegex.test(value);
    },
    {
      message: "Invalid Metamask wallet address",
    }
  ),
  imageUrl: z.string().optional(),
  requiredTokens: z
    .string()
    .regex(/^[1-9]\d{0,6}$/, { message: "Please enter a valid number." })
    .max(7, { message: "Maximum length exceeded (7 digits)." })
    .min(1, { message: "Field cannot be empty." }),
  longDescription: z
    .string()
    .min(150, {
      message:
        "Please provide a longer description, this contains your vision, purposes, interesting features and benefits.",
    })
    .max(800, {
      message: "Please do not enter something that is really that long.",
    }),
});
