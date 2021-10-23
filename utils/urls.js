export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export const imgToUrl = (img) => {
    if (!img) {
        return '/vercel.svg'
    };

    if (img.url.indexOf('/') === 0) {
        return `${API_URL}${img.url}`;
    };

    return img.url;
};