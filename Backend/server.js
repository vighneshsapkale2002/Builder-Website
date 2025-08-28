import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// DB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB error:", err));

// Schema
const enquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  project: { type: String, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Enquiry = mongoose.model("Enquiry", enquirySchema);

// Email Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// API: Submit Enquiry
app.post("/api/enquiries", async (req, res) => {
  try {
    const { name, email, phone, project, message } = req.body;
    const newEnquiry = new Enquiry({ name, email, phone, project, message });
    await newEnquiry.save();

    // Send Email to Builder
    const builderMail = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // builder’s email
      subject: `📩 New Enquiry from ${name}`,
      text: `
        New Enquiry Details:

        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Project: ${project}
        Message: ${message || "N/A"}
      `,
    };

    await transporter.sendMail(builderMail);


    // // Send Auto-Reply to Customer
    // const customerMail = {
    //   from: process.env.EMAIL_USER,
    //   to: email, // customer's email
    //   subject: "✅ Thank you for your enquiry",
    //   text: `
    //     Hi ${name},

    //     Thank you for enquiring about our project "${project}".
    //     Our team will get in touch with you shortly.

    //     Regards,
    //     Builder Team
    //   `,
    // };


    // 2️⃣ Auto-Reply to Customer (HTML Template)

// await transporter.sendMail({
//   from: `"Trust Builders" <${process.env.EMAIL_USER}>`,
//   to: email, // customer email
//   subject: "✅ Thank you for your enquiry with Trust Builders",
//   html: `
//   <table width="100%" cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, sans-serif; background-color:#f6f9fc; padding:40px 0;">
//     <tr>
//       <td align="center">
//         <table width="600" cellpadding="0" cellspacing="0" border="0" style="background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
          
//           <!-- Header -->
//           <tr>
//             <td align="center" style="background:#175df1; padding:20px;">
//               <img src="https://via.placeholder.com/150x50?text=Builder+Logo" alt="Builder Logo" style="max-width:150px;" />
//             </td>
//           </tr>

//           <!-- Body -->
//           <tr>
//             <td style="padding:30px; color:#333; font-size:16px; line-height:1.6;">
//               <h2 style="color:#175df1; margin-top:0;">Hi ${name},</h2>
//               <p>Thank you for enquiring about our project <strong>${project}</strong>.</p>
//               <p>We’ve received your request and our team will reach out to you shortly with more details. Meanwhile, you can explore our website or contact us directly for faster assistance.</p>
//               <p style="margin:20px 0;">
//                 <a href="https://yourbuilderwebsite.com" style="background:#f9c253; color:#000; padding:12px 24px; border-radius:6px; text-decoration:none; font-weight:bold;">
//                   Visit Our Website
//                 </a>
//               </p>
//               <p>If you have any urgent queries, feel free to call us at <strong>+91-9876543210</strong>.</p>
//               <br/>
//               <p>Best Regards,<br/><strong>Trust Builders Team</strong></p>
//             </td>
//           </tr>

//           <!-- Footer -->
//           <tr>
//             <td align="center" style="background:#f1f5f9; padding:15px; font-size:13px; color:#666;">
//               © 2025 Trust Builders. All rights reserved.<br/>
//               <a href="https://yourbuilderwebsite.com/unsubscribe" style="color:#175df1; text-decoration:none;">Unsubscribe</a>
//             </td>
//           </tr>

//         </table>
//       </td>
//     </tr>
//   </table>
//   `,
// });




//     await transporter.sendMail(customerMail);

    res.status(201).json({ message: "Enquiry submitted, emails sent ✅" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error ❌" });
  }
});

// API: Get All Enquiries
app.get("/api/enquiries", async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.status(200).json(enquiries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});



// This is new code start login and signup.


// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/auth_demo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.log(err));

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model("User", userSchema);

// Signup Route
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully ✅" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Login Route
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, "secretKey123", { expiresIn: "1h" });

    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});



// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
