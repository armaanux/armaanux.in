import { useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [formStatus, setFormStatus] = useState<"success" | "error" | "idle">("idle");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setFormStatus("idle");

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID!;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID!;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY!;

        if (!serviceId || !templateId || !publicKey) {
            console.error("Missing EmailJS environment variables");
            setFormStatus("error");
            setLoading(false);
            return;
        }

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        try {
            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            setFormStatus("success");
            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            console.error("Error sending email:", error);
            setFormStatus("error");
        }
        setLoading(false);
        setTimeout(() => setFormStatus("idle"), 2000);
    };

    return (
        <section
            id="contact"
            className="w-full px-5 md:px-20 space-y-5 container py-10 relative text-white"
        >
            <div className="flex-col justify-center items-center gap-6 flex pb-10">
                <div className="font-first text-xl md:text-4xl">Contact me</div>
                <div className="text-[#B3B3B3] text-lg text-center">
                    Got a project in mind or just want to say hello? Feel free to reach out.
                    I'd love to hear from you :)
                </div>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4 md:px-24">
                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="What's your name, awesome human?"
                        className="bg-[#11111140] border-2 border-white/50 p-3 rounded focus:outline-none focus:border-gray-600 transition-all"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Where can I slide into your inbox? (Professionally, of course!)"
                        className="bg-[#11111140] border-2 border-white/50 p-3 rounded focus:outline-none focus:border-gray-600 transition-all"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        rows={6}
                        placeholder="How can I help you?"
                        className="bg-[#11111140] border-2 border-white/50 p-3 rounded resize-none focus:outline-none focus:border-gray-600 transition-all"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5">
                    <span className="flex flex-row justify-between items-center gap-2">
                        <Exclamationsvg />
                        Your information is safe and stay private, always.
                    </span>
                    <button
                        type="submit"
                        className={`w-40 h-12 flex items-center justify-center text-black text-base p-3 rounded cursor-pointer transition-all ${formStatus === "success"
                            ? "bg-green-500 text-white"
                            : formStatus === "error"
                                ? "bg-red-500 text-white"
                                : "bg-white hover:bg-gray-200"
                            }`}
                        disabled={loading}
                    >
                        {loading
                            ? "Sending..."
                            : formStatus === "success"
                                ? "Sent!"
                                : formStatus === "error"
                                    ? "Try Again"
                                    : "Send Message"}
                    </button>

                </div>
            </form>
        </section>
    );
};


const Exclamationsvg = () => {
    return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 26.5625C21.3858 26.5625 26.5625 21.3858 26.5625 15C26.5625 8.61421 21.3858 3.4375 15 3.4375C8.61421 3.4375 3.4375 8.61421 3.4375 15C3.4375 21.3858 8.61421 26.5625 15 26.5625Z" stroke="white" strokeWidth="1.5" />
            <path d="M15 14.7662V21.0162" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M15 12.11C15.8629 12.11 16.5625 11.4104 16.5625 10.5475C16.5625 9.68454 15.8629 8.98499 15 8.98499C14.1371 8.98499 13.4375 9.68454 13.4375 10.5475C13.4375 11.4104 14.1371 12.11 15 12.11Z" fill="white" />
        </svg>

    )
}