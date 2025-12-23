"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import { CtaSection } from "@/components/cta-section"
import Link from "next/link"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus("idle")

        try {
            const res = await fetch("https://formsubmit.co/ajax/sabiqsabry48@gmail.com", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: `Portfolio Contact from ${formData.name || "Visitor"}`,
                }),
            })

            if (!res.ok) {
                throw new Error("Failed to send")
            }

            setSubmitStatus("success")
            setFormData({ name: "", email: "", message: "" })
        } catch (err) {
            setSubmitStatus("error")
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className="max-w-7xl mx-auto px-6 pb-20">
            <div className="py-12 md:py-20 text-center max-w-2xl mx-auto space-y-4 mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50">Get in Touch</h1>
                <p className="text-neutral-500 dark:text-neutral-400 text-lg">
                    Whether you want to say hi or collab on your next big idea.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center shrink-0">
                            <Mail className="w-6 h-6 text-neutral-900 dark:text-white" />
                        </div>
                        <div>
                            <p className="font-semibold text-lg mb-1">Email</p>
                            <a
                                href="mailto:sabiqsabry48@gmail.com"
                                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
                            >
                                sabiqsabry48@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center shrink-0">
                            <MapPin className="w-6 h-6 text-neutral-900 dark:text-white" />
                        </div>
                        <div>
                            <p className="font-semibold text-lg mb-1">Location</p>
                            <p className="text-neutral-600 dark:text-neutral-400">Malaysia & Sri Lanka</p>
                            <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">
                                Open to hybrid/remote roles
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <Link
                            href="https://twitter.com/sabiqsabry"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                        >
                            <Twitter className="w-5 h-5 text-neutral-900 dark:text-white" />
                        </Link>
                        <Link
                            href="https://github.com/sabiqsabry"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                        >
                            <Github className="w-5 h-5 text-neutral-900 dark:text-white" />
                        </Link>
                        <Link
                            href="https://linkedin.com/in/sabiqsabry"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                        >
                            <Linkedin className="w-5 h-5 text-neutral-900 dark:text-white" />
                        </Link>
                    </div>
                </div>

                {/* Contact Form */}
                <Card className="h-fit">
                    <CardContent className="p-8">
                        <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <Input
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <Textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                />
                            </div>

                            <Button type="submit" className="w-full rounded-full" disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </Button>

                            {submitStatus === "success" && (
                                <p className="text-sm text-green-600 dark:text-green-400">
                                    Thanks! Your message was sent. I&apos;ll reply soon.
                                </p>
                            )}
                            {submitStatus === "error" && (
                                <p className="text-sm text-red-600 dark:text-red-400">
                                    Something went wrong. Please try again or email me directly.
                                </p>
                            )}
                        </form>
                    </CardContent>
                </Card>
            </div>

            <CtaSection />
        </div>
    )
}

