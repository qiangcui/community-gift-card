export interface Merchant {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  address?: string;
  phone?: string;
  menuUrl?: string;
}

export interface NavLink {
  label: string;
  href: string;
}