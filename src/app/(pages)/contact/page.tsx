"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import {
	type Control,
	type FieldPath,
	type FieldValues,
	useForm,
} from "react-hook-form";

import { z } from "zod";
import PTB from "@/components/ptb";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactInfo as Info } from "@/constants/data";

const contactSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	mobile: z
		.string()
		.regex(/^[0-9\s\-+()]+$/, "Please enter a valid mobile number"),
	email: z.email("Please enter a valid email address"),
	message: z
		.string()
		.min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
	return (
		<div className="w-full bg-white">
			<PTB
				heading="Contact Us"
				subheading="	Contact with the Top Industry Expert"
			/>
			<section className="py-12 md:py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						<ContactForm />
						<ContactInfo />
					</div>
				</div>
			</section>
			<MapSec />
		</div>
	);
}

interface ContactFormFieldProps<
	T extends FieldValues = ContactFormData,
> {
	control: Control<T>;
	name: FieldPath<T>;
	label: string;
	placeholder?: string;
	type?: "text" | "email" | "tel";
	textarea?: boolean;
	rows?: number;
}

function ContactFormField<T extends FieldValues = ContactFormData>({
	control,
	name,
	label,
	placeholder,
	type = "text",
	textarea = false,
	rows = 5,
}: ContactFormFieldProps<T>) {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel className="text-blue-800">
						{label} <span className="text-red-600">*</span>
					</FormLabel>
					<FormControl>
						{textarea ? (
							<Textarea
								placeholder={placeholder}
								rows={rows}
								className="resize-none rounded-none bg-gray-100"
								{...field}
							/>
						) : (
							<Input
								type={type}
								placeholder={placeholder}
								{...field}
								className="rounded-none bg-gray-100"
							/>
						)}
					</FormControl>
					<FormMessage className="text-red-600 text-xs" />
				</FormItem>
			)}
		/>
	);
}

function ContactForm() {
	const [submitted, setSubmitted] = useState(false);

	const form = useForm<ContactFormData>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			name: "",
			mobile: "",
			email: "",
			message: "",
		},
	});

	const onSubmit = async (data: ContactFormData) => {
		try {
			console.log("Form data:", data);
			await new Promise((resolve) => setTimeout(resolve, 500));

			setSubmitted(true);
			form.reset();

			setTimeout(() => setSubmitted(false), 3000);
		} catch (error) {
			console.error("Form submission error:", error);
		}
	};

	if (submitted) {
		return (
			<div className="lg:col-span-2">
				<div className="bg-green-50 border-2 border-green-400 rounded-lg p-8 text-center">
					<div className="text-5xl mb-4">✓</div>
					<h3 className="font-bold text-xl text-green-900 mb-2">
						Message Sent!
					</h3>
					<p className="text-green-800">
						Thank you for contacting us. We'll get back to you within
						24 hours.
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className="lg:col-span-2">
			<div className="mb-8">
				<p className="text-accent text-sm font-semibold mb-2">
					How can we help?
				</p>
				<h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
					Get in Touch with Our Company
				</h2>
				<p className="text-accent text-base font-medium leading-relaxed">
					Have questions or want to chat?
					<br />
					Fill out our contact form, and we'll put you in touch with
					the right people.
				</p>
			</div>

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-4"
				>
					<ContactFormField
						control={form.control}
						name="name"
						label="Name"
						placeholder="Name"
					/>

					<ContactFormField
						control={form.control}
						name="mobile"
						label="Mobile"
						placeholder="Your Mobile Number"
						type="tel"
					/>

					<ContactFormField
						control={form.control}
						name="email"
						label="Email"
						placeholder="Email"
						type="email"
					/>

					<ContactFormField
						control={form.control}
						name="message"
						label="Message"
						placeholder="Message"
						textarea
						rows={5}
					/>

					<Button
						type="submit"
						disabled={form.formState.isSubmitting}
						className="w-full h-12 bg-yellow hover:bg-primary text-primary hover:text-white font-bold py-2 transition-colors disabled:opacity-50"
					>
						{form.formState.isSubmitting ? "Sending..." : "Send"}
					</Button>
				</form>
			</Form>
		</div>
	);
}

function ContactInfo() {
	return (
		<div className="lg:col-span-1">
			<div className="bg-yellow p-6 text-primary">
				<div className="text-5xl mb-3">
					<svg
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						width="55"
						height="55"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
						<path d="M9 10a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
						<path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
					</svg>
				</div>
				<h3 className="font-bold text-3xl mb-3">Mustafa Ansari</h3>
				<p className="text-base font-semibold">Head of Sales</p>
			</div>

			<div className="bg-slate-900 text-white p-6 space-y-4">
				{Info.map((item) => {
					const IconComponent = item.icon;
					return (
						<li
							key={item.id}
							className="flex items-center gap-4 group cursor-pointer"
						>
							<IconComponent className="size-7 rounded-sm p-1.2 stroke-yellow group-hover:stroke-sky " />
							<Link
								href={item.link}
								target="_blank"
								className="text-gray-300 transition-colors group-hover:text-sky"
							>
								<h4 className="text-2xl font-semibold">
									{item.text}
								</h4>
								<p className="text-base font-medium">{item.label}</p>
							</Link>
						</li>
					);
				})}
			</div>
		</div>
	);
}

function MapSec() {
	return (
		<section className="">
			<div className="text-center">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.745185344252!2d83.82254130000001!3d26.6566399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993c35d34370ec7%3A0xd3e4b20697f81b45!2sKarmullah%20Engineering%20Works!5e0!3m2!1sen!2sin!4v1772317806261!5m2!1sen!2sin"
					width="100%"
					height="600"
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</section>
	);
}
