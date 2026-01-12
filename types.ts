export enum ItemType {
    PHOTO = 'PHOTO',
    NOTE = 'NOTE',
    TEXT = 'TEXT',
    DECORATION = 'DECORATION'
}

export interface Position {
    x: number; // Percentage 0-100
    y: number; // Percentage 0-100
    rotate: number; // Degrees
}

export interface BookItem {
    id: string;
    type: ItemType;
    content?: string; // Text content or Image URL
    caption?: string; // For photos
    position: Position;
    style?: {
        width?: string;
        height?: string;
        bgColor?: string; // For sticky notes
        textColor?: string;
        zIndex?: number;
    };
}

export interface PageData {
    id: number;
    items: BookItem[];
    pageNumberDisplay?: boolean;
    backgroundStyle?: 'plain' | 'lined' | 'grid';
}