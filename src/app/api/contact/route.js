import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ message: "All fields are required" }), { status: 400 });
        }

        // Nodemailer transporter setup
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // Your Gmail address
                pass: process.env.EMAIL_PASS, // App Password (not your Gmail password)
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER, // Your email to receive messages
            subject: `New Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ message: "Email sent successfully!" }), { status: 200 });
    } catch (error) {
        console.error("Email sending error:", error);
        return new Response(JSON.stringify({ message: "Failed to send email", error }), { status: 500 });
    }
}
