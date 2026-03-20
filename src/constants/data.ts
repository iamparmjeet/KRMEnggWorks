import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandWhatsapp,
	IconBrandYoutube,
	IconMail,
	IconMapPin,
	IconPhone,
	IconShoppingCart,
	type TablerIcon,
} from "@tabler/icons-react";

export const media = "https://media.krmenggworks.com/assets";
export const favicon = `${media}/06/cropped-KRM-Favicon.jpg`;
export const logo = `${media}/03/KRM-Logo-Transparent.png`;
export const productCardBg = `${media}/03/pattern2.png`;

export type ContactItemType = {
	id: number;
	text?: string;
	label: string;
	link: string;
	icon: TablerIcon;
};

export const ContactInfo: ContactItemType[] = [
	{
		id: 1,
		text: "Mobile",
		label: "+91 86045 07464",
		link: "tel:+918604507464",
		icon: IconPhone,
	},
	{
		id: 2,
		text: "Mobile",
		label: "+91 86010 33282",
		link: "tel:+918601033282",
		icon: IconPhone,
	},
	{
		id: 3,
		text: "Email",
		label: "info@krmenggworks.com",
		link: "mailto:info@krmenggworks.com",
		icon: IconMail,
	},
	{
		id: 4,
		text: "Email",
		label: "krmenggworks@gmail.com",
		link: "mailto:krmenggworks@gmail.com",
		icon: IconMail,
	},
	{
		id: 5,
		text: "Address",
		label: "Deosth Deoria, Deoria, Uttar Pradesh",
		link: "https://www.google.com/maps/place/Karmullah+Engineering+Works/@26.6566447,83.8199664,17z/data=!3m1!4b1!4m6!3m5!1s0x3993c35d34370ec7:0xd3e4b20697f81b45!8m2!3d26.6566399!4d83.8225413!16s%2Fg%2F11trzmqtyh?entry=ttu",
		icon: IconMapPin,
	},
];

export type SocialsItemType = {
	id: number;
	label: string;
	link: string;
	icon: TablerIcon;
};

export const Socials: SocialsItemType[] = [
	{
		id: 1,
		label: "Insta",
		link: "https://www.instagram.com/krmenggworks",
		icon: IconBrandInstagram,
	},
	{
		id: 2,
		label: "FB",
		link: "https://www.facebook.com/profile.php?id=61557026939235&mibextid=ZbWKwL",
		icon: IconBrandFacebook,
	},
	{
		id: 3,
		label: "Instamart",
		link: "https://indiamart.com/karmullah-engineering-works/",
		icon: IconShoppingCart,
	},
	{
		id: 4,
		label: "Youtube",
		link: "https://www.youtube.com/channel/UCsIHla4hLleijxEKx5_EEKQ",
		icon: IconBrandYoutube,
	},
	{
		id: 5,
		label: "Whatsapp",
		link: "https://api.whatsapp.com/send?phone=",
		icon: IconBrandWhatsapp,
	},
];
