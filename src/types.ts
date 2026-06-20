/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface OfficeLocation {
  name: string;
  phone: string;
  email: string;
  address: string;
  serviceAreas: string[];
  mapQuery: string;
  coordinates: { lat: number; lng: number };
}

export interface ServiceItem {
  title: string;
  description: string;
  category: 'residential' | 'commercial';
  iconName: string;
  imageUrl: string;
}

export interface Testimonial {
  name: string;
  role: string | null;
  quote: string;
  rating: number;
  date: string;
  verified: boolean;
  initials: string;
}

export interface EstimateFormState {
  step: number;
  roofType: 'residential' | 'commercial' | null;
  serviceType: string;
  roofMaterial: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  notes: string;
}


