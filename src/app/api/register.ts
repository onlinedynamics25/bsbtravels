import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import formidable from "formidable";
import { promises as fs } from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const form = formidable({ multiples: false });

    const data: any = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });

    const fields = data.fields;
    const files = data.files;

    // Setup transporter for Zoho
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Prepare attachment if signature is present
    let attachments = [];
    if (files.signature && files.signature.filepath) {
      const file = files.signature;
      const fileData = await fs.readFile(file.filepath);
      attachments.push({
        filename: file.originalFilename || "signature.png",
        content: fileData,
      });
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "info@bsbtravels.com",
      subject: `New Event Registration: ${fields.participantName}`,
      text: `
        Full Name: ${fields.participantName}
        DOB: ${fields.participantDob}
        Gender: ${fields.gender}
        Passport No: ${fields.passportNo}
        Expiry Date: ${fields.expiryDate}
        Nationality: ${fields.nationality}

        Email: ${fields.contactEmail}
        Phone: ${fields.contactNumber}
        Address: ${fields.contactAddress}

        Room Type: ${fields.roomType}
        Bonfire: ${fields.bonfire}
        Airport Pickup: ${fields.airportPick}

        Company: ${fields.companyName}
        Industry: ${fields.industry}
        Purpose: ${fields.purpose}

        Payment Method: ${fields.paymentMethod}
        Deposit: ${fields.deposit}
        Balance Due: ${fields.balanceDue}

        Declaration Date: ${fields.declarationDate}
      `,
      attachments,
    };

    await transporter.sendMail(mailOptions);

    return res
      .status(200)
      .json({ message: "Registration submitted successfully!" });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({
      error: "Failed to send registration",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
