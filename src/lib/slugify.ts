export function slugify(text: string): string {
	return text
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, "") // Remove special chars except spaces and hyphens
		.replace(/\s+/g, "-") // Replace spaces with hyphens
		.replace(/-+/g, "-") // Remove multiple consecutive hyphens
		.replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}

// Generate unique slug with optional ID suffix for duplicates
export function generateSlug(
	name: string,
	id?: number | string,
): string {
	const baseSlug = slugify(name);
	return id ? `${baseSlug}-${id}` : baseSlug;
}
