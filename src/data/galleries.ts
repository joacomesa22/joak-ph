import type { ImageMetadata } from 'astro';

import amsterdamCover from '../assets/portfolio/amsterdam/IMG_7792_jpg.jpg';
import andorraCover from '../assets/portfolio/andorra/IMG_8115.jpg';
import argentinaCover from '../assets/portfolio/argentina/IMG_5413_jpg.jpg';
import berlinCover from '../assets/portfolio/berlin/IMG_7907_jpg.jpg';
import costaRicaCover from '../assets/portfolio/costa-rica/IMG_4312.jpg';
import dublinCover from '../assets/portfolio/dublin/IMG_8616.jpg';
import hockeyCover from '../assets/portfolio/hockey/DSC04282.jpg';
import londonCover from '../assets/portfolio/london/IMG_5971_jpg.jpg';
import spainCover from '../assets/portfolio/spain/IMG_6356_jpg.jpg';
import usaCover from '../assets/portfolio/usa/IMG_2972_jpg.jpg';

export type GallerySection = 'travel' | 'sports';

export interface Gallery {
	slug: string;
	title: string;
	description: string;
	section: GallerySection;
	cover: ImageMetadata;
}

export const galleries: Gallery[] = [
	{
		slug: 'usa',
		title: 'USA',
		description: 'Coast to coast.',
		section: 'travel',
		cover: usaCover,
	},
	{
		slug: 'london',
		title: 'London',
		description: 'Streets, parks, and grey elegance.',
		section: 'travel',
		cover: londonCover,
	},
	{
		slug: 'argentina',
		title: 'Argentina',
		description: 'From Buenos Aires to Patagonia.',
		section: 'travel',
		cover: argentinaCover,
	},
	{
		slug: 'andorra',
		title: 'Andorra',
		description: 'Mountains and snow.',
		section: 'travel',
		cover: andorraCover,
	},
	{
		slug: 'spain',
		title: 'Spain',
		description: 'Sun, architecture, and vibrant streets.',
		section: 'travel',
		cover: spainCover,
	},
	{
		slug: 'costa-rica',
		title: 'Costa Rica',
		description: 'Jungle, coast, and pura vida.',
		section: 'travel',
		cover: costaRicaCover,
	},
	{
		slug: 'berlin',
		title: 'Berlin',
		description: 'History and edge in equal measure.',
		section: 'travel',
		cover: berlinCover,
	},
	{
		slug: 'dublin',
		title: 'Dublin',
		description: 'Georgian doors and Irish skies.',
		section: 'travel',
		cover: dublinCover,
	},
	{
		slug: 'amsterdam',
		title: 'Amsterdam',
		description: 'Canals, bikes, and Dutch light.',
		section: 'travel',
		cover: amsterdamCover,
	},
	{
		slug: 'hockey',
		title: 'Hockey',
		description: 'Sticks, ice, and motion.',
		section: 'sports',
		cover: hockeyCover,
	},
];
