type User = {
	id?: string | null;
	name?: string | null;
};
type Guest = {
	id: string;
	name: string;
	status: number;
	max_attendees: number;
	attendees: number;
};

type Gift = {
	id: string;
	name: string;
	image: string;
	url_mercado?: string;
	url_amazon?: string;
	url_marketplace?: string;
	guestId?: string | null;
};
