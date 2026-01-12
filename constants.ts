import { PageData, ItemType } from './types';

// HƯỚNG DẪN CHÈN ẢNH:
// Cách 1 (Khuyên dùng): Chép file ảnh vào thư mục 'public' của dự án.
// Ví dụ: file ảnh là 'anh1.jpg' nằm trong thư mục public.
// Dùng: content: "anh1.jpg"

// Cách 2: Dùng link Google Drive.
// Bắt buộc phải chuột phải vào ảnh trên Drive -> Share -> General Access -> Anyone with the link.
// Dùng: content: "https://drive.google.com/file/d/xxxxxxxxx/view..."

// Cách 3: Dùng link ảnh trên mạng (Facebook, Imgur...)
// Dùng: content: "https://link-anh.com/abc.jpg"

export const BOOK_PAGES: PageData[] = [
    // --- BÌA TRÁI (CỐ ĐỊNH) ---
    {
        id: 0,
        items: [
             {
                id: 'intro-text',
                type: ItemType.TEXT,
                content: "Nhật Ký Của Chúng Mình",
                position: { x: 50, y: 45, rotate: 0 },
                style: { width: '80%', textColor: '#57534e', zIndex: 10 }
            },
            {
                id: 'intro-sub',
                type: ItemType.NOTE,
                content: "Lưu giữ những khoảnh khắc đẹp nhất...",
                position: { x: 50, y: 60, rotate: -2 },
                style: { width: '60%', bgColor: '#e7e5e4', zIndex: 5 }
            }
        ],
        backgroundStyle: 'plain'
    },

    // --- TRANG 1: LỜI MỞ ĐẦU ---
    {
        id: 1,
        items: [
            {
                id: 'title-main',
                type: ItemType.TEXT,
                content: "Happy Birthday!",
                position: { x: 50, y: 15, rotate: -2 },
                style: { width: '100%', textColor: '#1c1917', zIndex: 20 }
            },
            {
                id: 'p1-img1',
                type: ItemType.PHOTO,
                // Ví dụ dùng link ảnh online (bạn có thể thay bằng tên file trong thư mục public, vd: "anh-sinh-nhat.jpg")
                content: "DSC02229.JPG", 
                caption: "Tuổi mới thật rực rỡ nhé!",
                position: { x: 50, y: 60, rotate: 3 },
                style: { width: '55%', zIndex: 10 }
            }
        ],
        backgroundStyle: 'plain'
    },
    
    // --- PHẦN 1: THỦY CUNG (Trang 2 & 3) ---
    {
        id: 2,
        items: [
             {
                id: 'p2-title',
                type: ItemType.TEXT,
                content: "1. Thủy Cung",
                position: { x: 50, y: 12, rotate: 0 },
                style: { width: '100%', textColor: '#0e7490', zIndex: 30 }
            },
            {
                id: 'p2-note1',
                type: ItemType.NOTE,
                content: "Chuyến đi đầu tiên cùng nhau. Lạc vào đại dương xanh thẳm.",
                position: { x: 50, y: 85, rotate: 2 },
                style: { width: '70%', bgColor: '#cffafe', zIndex: 30 }
            },
            {
                id: 'p2-img1',
                type: ItemType.PHOTO,
                content: "DSC02159.JPG",
                position: { x: 50, y: 48, rotate: -3 },
                style: { width: '55%', zIndex: 10 }
            }
        ],
        backgroundStyle: 'lined'
    },
    {
        id: 3,
        items: [
            {
                id: 'p3-img1',
                type: ItemType.PHOTO,
                content: "DSC02134.JPG",
                caption: "Ngắm cá hay ngắm em?",
                position: { x: 30, y: 40, rotate: 4 },
                style: { width: '40%', zIndex: 10 }
            },
            {
                id: 'p3-img2',
                type: ItemType.PHOTO,
                content: "DSC02151.JPG",
                position: { x: 70, y: 65, rotate: -5 },
                style: { width: '40%', zIndex: 5 }
            }
        ],
        backgroundStyle: 'plain'
    },

    // --- PHẦN 2: LÀM NHẪN BẠC (Trang 4 & 5) ---
    {
        id: 4,
        items: [
            {
                id: 'p4-title',
                type: ItemType.TEXT,
                content: "2. Workshop Làm Nhẫn",
                position: { x: 50, y: 12, rotate: 0 },
                style: { width: '100%', textColor: '#4b5563', zIndex: 30 }
            },
            {
                id: 'p4-img1',
                type: ItemType.PHOTO,
                content: "ChamNhan.jpg",
                caption: "Chăm chú dũa dũa mài mài",
                position: { x: 50, y: 55, rotate: 2 },
                style: { width: '60%', zIndex: 10 }
            }
        ],
        backgroundStyle: 'grid'
    },
    {
        id: 5,
        items: [
             {
                id: 'p5-img1',
                type: ItemType.PHOTO,
                content: "ChamQuyNhan.jpg",
                position: { x: 40, y: 40, rotate: -3 },
                style: { width: '50%', zIndex: 10 }
            },
            {
                id: 'p5-note',
                type: ItemType.NOTE,
                content: "Thành quả là cặp nhẫn đôi xinh xắn. Đánh dấu chủ quyền rồi nhé!",
                position: { x: 60, y: 75, rotate: 6 },
                style: { width: '50%', bgColor: '#e5e7eb', zIndex: 20 }
            }
        ],
        backgroundStyle: 'plain'
    },

    // --- PHẦN 3: ĂN UỐNG & CÔNG VIÊN (Trang 6 & 7) ---
    {
        id: 6,
        items: [
            {
                id: 'p6-title',
                type: ItemType.TEXT,
                content: "3. Vi vu & Ăn sập",
                position: { x: 50, y: 12, rotate: 0 },
                style: { width: '100%', textColor: '#b91c1c', zIndex: 5 }
            },
            {
                id: 'p6-img1',
                type: ItemType.PHOTO,
                content: "DSC02168.JPG",
                caption: "Ngon tuyệt cú mèo",
                position: { x: 30, y: 45, rotate: -5 },
                style: { width: '40%', zIndex: 10 }
            },
            {
                id: 'p6-img2',
                type: ItemType.PHOTO,
                content: "ChamMeo.jpg",
                position: { x: 70, y: 70, rotate: 5 },
                style: { width: '40%', zIndex: 15 }
            }
        ],
        backgroundStyle: 'lined'
    },
    {
        id: 7,
        items: [
            {
                id: 'p7-img1',
                type: ItemType.PHOTO,
                content: "ChamMeo2.jpg",
                position: { x: 50, y: 40, rotate: 0 },
                style: { width: '55%', zIndex: 10 }
            },
            {
                id: 'p7-note',
                type: ItemType.NOTE,
                content: "Chiều công viên gió mát, bình yên bên cạnh nhau.",
                position: { x: 50, y: 80, rotate: -2 },
                style: { width: '80%', bgColor: '#dcfce7', zIndex: 20 }
            }
        ],
        backgroundStyle: 'plain'
    },

    // --- PHẦN 4: LOTTE TÂY HỒ (Trang 8 & 9) ---
    {
        id: 8,
        items: [
            {
                id: 'p8-title',
                type: ItemType.TEXT,
                content: "4. Lotte Mall Tây Hồ",
                position: { x: 50, y: 12, rotate: 0 },
                style: { width: '100%', textColor: '#c026d3', zIndex: 5 }
            },
            {
                id: 'p8-img1',
                type: ItemType.PHOTO,
                content: "LotteGuong.jpg",
                caption: "Check-in sang chảnh",
                position: { x: 50, y: 55, rotate: 3 },
                style: { width: '60%', zIndex: 10 }
            }
        ],
        backgroundStyle: 'grid'
    },
    {
        id: 9,
        items: [
             {
                id: 'p9-img1',
                type: ItemType.PHOTO,
                content: "DSC02223.JPG",
                position: { x: 30, y: 35, rotate: -6 },
                style: { width: '40%', zIndex: 10 }
            },
            {
                id: 'p9-img2',
                type: ItemType.PHOTO,
                content: "DSC02227.JPG",
                position: { x: 70, y: 55, rotate: 4 },
                style: { width: '40%', zIndex: 15 }
            },
             {
                id: 'p9-note',
                type: ItemType.NOTE,
                content: "Một nụ cười bằng 10 thang thuốc bổ.",
                position: { x: 50, y: 85, rotate: 1 },
                style: { width: '70%', bgColor: '#f3e8ff', zIndex: 20 }
            }
        ],
        backgroundStyle: 'plain'
    },

    // --- TRANG CUỐI: LỜI NHẮN ---
   {
        id: 10,
        items: [
            {
                id: 'p10-img1',
                type: ItemType.PHOTO,
                content: "Photobooth.jpg",
                caption: "Photobooth siêu xinh",
                position: { x: 50, y: 45, rotate: -2 },
                style: { width: '60%', zIndex: 10 }
            },
            {
                id: 'p10-decor',
                type: ItemType.TEXT,
                content: "So beautiful!",
                position: { x: 80, y: 80, rotate: -15 },
                style: { width: '30%', textColor: '#db2777', zIndex: 5 }
            }
        ],
        backgroundStyle: 'lined'
    },
    {
        id: 11,
        items: [
            {
                id: 'p11-img1',
                type: ItemType.PHOTO,
                content: "Cuoi.jpg",
                position: { x: 30, y: 30, rotate: 5 },
                style: { width: '45%', zIndex: 10 }
            },
             {
                id: 'p11-img2',
                type: ItemType.PHOTO,
                content: "check.jpg",
                position: { x: 70, y: 60, rotate: -3 },
                style: { width: '45%', zIndex: 15 }
            },
            {
                id: 'p11-note',
                type: ItemType.NOTE,
                content: "Hẹn lần sau mình lại cùng đi tiếp nhé!",
                position: { x: 30, y: 80, rotate: 2 },
                style: { width: '50%', bgColor: '#fef9c3', zIndex: 20 }
            }
        ],
        backgroundStyle: 'grid'
    },

    // --- TRANG CUỐI: LỜI NHẮN ---
    {
        id: 12,
        items: [
            {
                id: 'p12-note',
                type: ItemType.NOTE,
                content: "Cảm ơn cậu vì tất cả những kỷ niệm tuyệt vời này...",
                position: { x: 50, y: 50, rotate: -2 },
                style: { width: '60%', bgColor: '#fff1f2', zIndex: 10 }
            }
        ],
        backgroundStyle: 'plain'
    },
    {
        id: 13,
        isFinalPage: true,
        items: [], 
        backgroundStyle: 'plain'
    }
];