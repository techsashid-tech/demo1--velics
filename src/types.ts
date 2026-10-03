export type ServiceCategory = 'all' | 'skincare' | 'hair' | 'aesthetics' | 'wellness' | 'bridal';

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  benefits: string[];
  duration: string;
  image: string;
  iconName: string;
  popular?: boolean;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  text: string;
  date: string;
  treatmentResult?: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: string;
  description?: string;
}

export interface AppointmentData {
  name: string;
  phone: string;
  email?: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
}
