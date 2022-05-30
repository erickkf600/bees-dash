export interface InfoCards {
    id: string;
    name: string;
    brewery_type: string;
    street?: string | null;
    address_2?: null;
    address_3?: null;
    city: string;
    state: string;
    county_province?: null;
    postal_code: string;
    country: string;
    longitude?: string | null;
    latitude?: string | null;
    phone?: string | null;
    website_url?: string | null;
    updated_at: string;
    created_at: string;
}
