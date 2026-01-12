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
                content: "Lưu giữ những khoảnh khắc đẹp hài nhây bựa...",
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
                content: "Buổi Date đầu tiên đi vào đại dương xanh thẳm.",
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
                caption: "Ngắm cá và ngắm cậu",
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

    // --- PHẦN 2: ESCAPE ROOM (Trang 4 & 5) ---
    {
        id: 4,
        items: [
             {
                id: 'p4-title',
                type: ItemType.TEXT,
                content: "2. Escape Room",
                position: { x: 50, y: 12, rotate: 0 },
                style: { width: '100%', textColor: '#7f1d1d', zIndex: 30 }
            },
            {
                id: 'p4-note1',
                type: ItemType.NOTE,
                content: "Ôi mẹ ơi cứu con!!!",
                position: { x: 50, y: 85, rotate: 2 },
                style: { width: '70%', bgColor: '#fee2e2', zIndex: 30 }
            },
            {
                id: 'p4-img1',
                type: ItemType.PHOTO,
                content: "ER1.jpg",
                caption: "Hoạt động bổ ích cho tim mạch",
                position: { x: 50, y: 48, rotate: -3 },
                style: { width: '55%', zIndex: 10 }
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
                content: "ER2.jpg",
                position: { x: 30, y: 40, rotate: 4 },
                style: { width: '45%', zIndex: 10 }
            },
            {
                id: 'p5-img2',
                type: ItemType.PHOTO,
                content: "ER3.jpg",
                position: { x: 70, y: 65, rotate: -5 },
                style: { width: '45%', zIndex: 5 }
            }
        ],
        backgroundStyle: 'plain'
    },

    // --- PHẦN 3: LÀM NHẪN BẠC (Trang 6 & 7) ---
    {
        id: 6,
        items: [
            {
                id: 'p6-title',
                type: ItemType.TEXT,
                content: "3. Workshop Làm Nhẫn",
                position: { x: 50, y: 12, rotate: 0 },
                style: { width: '100%', textColor: '#4b5563', zIndex: 30 }
            },
            {
                id: 'p6-img1',
                type: ItemType.PHOTO,
                content: "ChamNhan.jpg",
                caption: "Chăm chú dũa dũa mài mài",
                position: { x: 50, y: 55, rotate: 2 },
                style: { width: '60%', zIndex: 10 }
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
                content: "ChamQuyNhan.jpg",
                position: { x: 40, y: 40, rotate: -3 },
                style: { width: '50%', zIndex: 10 }
            },
            {
                id: 'p7-note',
                type: ItemType.NOTE,
                content: "Thành quả là cặp nhẫn đôi xinh xắn. (Kèm quà sinh nhật đấy nhé)",
                position: { x: 60, y: 75, rotate: 6 },
                style: { width: '50%', bgColor: '#e5e7eb', zIndex: 20 }
            }
        ],
        backgroundStyle: 'plain'
    },

    // --- PHẦN 4: ĂN UỐNG & CÔNG VIÊN (Trang 8 & 9) ---
    {
        id: 8,
        items: [
            {
                id: 'p8-title',
                type: ItemType.TEXT,
                content: "4. Vi vu & Ăn sập",
                position: { x: 50, y: 12, rotate: 0 },
                style: { width: '100%', textColor: '#b91c1c', zIndex: 5 }
            },
            {
                id: 'p8-img1',
                type: ItemType.PHOTO,
                content: "DSC02168.JPG",
                caption: "Sẽ quay lại đây vào hôm sinh nhật",
                position: { x: 30, y: 45, rotate: -5 },
                style: { width: '40%', zIndex: 10 }
            },
            {
                id: 'p8-img2',
                type: ItemType.PHOTO,
                content: "ChamMeo.jpg",
                position: { x: 70, y: 70, rotate: 5 },
                style: { width: '40%', zIndex: 15 }
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
                content: "ChamMeo2.jpg",
                position: { x: 50, y: 40, rotate: 0 },
                style: { width: '55%', zIndex: 10 }
            },
            {
                id: 'p9-note',
                type: ItemType.NOTE,
                content: "Chiều công viên gió mát, nói về những ngôi sao.",
                position: { x: 50, y: 80, rotate: -2 },
                style: { width: '80%', bgColor: '#dcfce7', zIndex: 20 }
            }
        ],
        backgroundStyle: 'plain'
    },

    // --- PHẦN 5: LOTTE TÂY HỒ (Trang 10 & 11) ---
    {
        id: 10,
        items: [
            {
                id: 'p10-title',
                type: ItemType.TEXT,
                content: "5. Lotte Mall Tây Hồ",
                position: { x: 50, y: 12, rotate: 0 },
                style: { width: '100%', textColor: '#c026d3', zIndex: 5 }
            },
            {
                id: 'p10-img1',
                type: ItemType.PHOTO,
                content: "LotteGuong.jpg",
                caption: "Cố lắm mới chịu chụp ảnh",
                position: { x: 50, y: 55, rotate: 3 },
                style: { width: '60%', zIndex: 10 }
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
                content: "DSC02223.JPG",
                position: { x: 30, y: 35, rotate: -6 },
                style: { width: '40%', zIndex: 10 }
            },
            {
                id: 'p11-img2',
                type: ItemType.PHOTO,
                content: "DSC02227.JPG",
                position: { x: 70, y: 55, rotate: 4 },
                style: { width: '40%', zIndex: 15 }
            },
             {
                id: 'p11-note',
                type: ItemType.NOTE,
                content: "Một nụ cười bằng 10 thang thuốc bổ.",
                position: { x: 50, y: 85, rotate: 1 },
                style: { width: '70%', bgColor: '#f3e8ff', zIndex: 20 }
            }
        ],
        backgroundStyle: 'plain'
    },

    // --- PHẦN 6 MỞ RỘNG (Trang 12 & 13) ---
    {
        id: 12,
        items: [
            {
                id: 'p12-img1',
                type: ItemType.PHOTO,
                content: "Photobooth.jpg",
                caption: "Photobooth siêu xinh",
                position: { x: 50, y: 45, rotate: -2 },
                style: { width: '60%', zIndex: 10 }
            },
            {
                id: 'p12-decor',
                type: ItemType.TEXT,
                content: "So beautiful!",
                position: { x: 80, y: 80, rotate: -15 },
                style: { width: '30%', textColor: '#db2777', zIndex: 5 }
            }
        ],
        backgroundStyle: 'grid'
    },
    {
        id: 13,
        items: [
            {
                id: 'p13-img1',
                type: ItemType.PHOTO,
                content: "Cuoi.jpg",
                position: { x: 30, y: 30, rotate: 5 },
                style: { width: '45%', zIndex: 10 }
            },
             {
                id: 'p13-img2',
                type: ItemType.PHOTO,
                content: "check.jpg",
                position: { x: 70, y: 60, rotate: -3 },
                style: { width: '45%', zIndex: 15 }
            },
            {
                id: 'p13-note',
                type: ItemType.NOTE,
                content: "Hẹn lần sau mình lại cùng đi tiếp nhé!",
                position: { x: 30, y: 80, rotate: 2 },
                style: { width: '50%', bgColor: '#fef9c3', zIndex: 20 }
            }
        ],
        backgroundStyle: 'plain'
    },

    // --- PHẦN 7: LƯU BÚT (PHẦN 1) (Trang 14 & 15) ---
    {
        id: 14,
        items: [
            {
                id: 'p14-title',
                type: ItemType.TEXT,
                content: "Gửi Cậu...",
                position: { x: 50, y: 10, rotate: 0 },
                style: { width: '100%', textColor: '#374151', zIndex: 5 }
            },
            // Bạn có thể sửa lời chúc ở đây
            {
                id: 'p14-note',
                type: ItemType.NOTE,
                content: "Trong số những cô gái tớ từng gặp, cậu là người khó chiều nhất và cũng là người tiêu tiền tớ nhanh nhất. Một ấn tượng không mấy tốt đẹp nhưng lại làm tớ không sao quên cậu được. Tớ cũng giống cậu đều đã trải qua nhiều mối quan hệ (2 là đáng nhớ nhất các cái còn lại thì là vui đùa nên tớ chưa kể) và cũng khao khát 1 tình yêu mãnh liệt. Người ta hay bảo nếu một người nằm trong nhiều mối quan hệ đỗ vỡ thì vấn đề hẳn nằm ở ngươi đó và có khi đúng thế thật. Cậu khó chiều, khó đoán, ương ngạnh, kiệm lời lúc nào cũng đòi hỏi những thứ xa hoa và năng lượng để giao tiếp thì cảm tưởng lúc nào cũng cạn. Nhưng hẳn vì các điểm xấu này mà tớ mới muốn tìm hiểu thêm về cậu, khó chiều khó đoán phải chẳng là cơ chế phòng thủ của cậu sau các mối quan hệ đã vỡ? Cậu đòi hỏi vì muốn xây dựng hình tượng con người mình thật sang chảnh thật đẹp để dằn mặt những kẻ nói xấu cậu. Năng lượng cậu thấp vì ờm nó thấp thật. Nhưng cậu không phải người xấu nếu làm đúng ý cậu cậu vẫn sẽ mở lời vẫn sẽ chia sẻ, cậu vẫn hiểu cho tớ và túi tiền của tớ (không phải dân đào mỏ), vẫn nghe tớ góp ý khi cậu nói những điểm xấu của tớ. Phải chăng sự lạnh lùng và khó chiều là bức màn che dấu một con người muốn được yêu thương muốn có người để lắng nghe mà các mối quan hệ đã qua đã chôn vùi nó?",
                position: { x: 50, y: 55, rotate: 1 },
                style: { width: '85%', bgColor: '#fffbeb', zIndex: 10 } 
            }
        ],
        backgroundStyle: 'lined'
    },
    {
        id: 15,
        items: [
            {
                id: 'p15-img1',
                type: ItemType.PHOTO,
                content: "ChamLiec.JPG", // Hãy thay bằng ảnh đẹp nhất của cô ấy
                caption: "Châm Liếc",
                position: { x: 65, y: 40, rotate: 4 },
                style: { width: '45%', zIndex: 10 }
            },
            {
                id: 'p15-note',
                type: ItemType.NOTE,
                content: "Cậu có vẻ còn là người dễ Overthinking hành động nhiều lúc cảm tính và có chút bồng bột. Có vài lúc tớ đã hết kiên nhẫn với cậu nhưng việc muốn hiểu thêm về cậu làm tớ không muốn từ bỏ cậu. Hành động sau đó của cậu cũng chứng minh cậu không xấu và vẫn có nghĩ đến tớ nên là tớ chưa lui được đâu",
                position: { x: 40, y: 80, rotate: -3 },
                style: { width: '65%', bgColor: '#fef2f2', zIndex: 20 }
            }
        ],
        backgroundStyle: 'lined'
    },

    // --- PHẦN 7 MỞ RỘNG: LƯU BÚT (PHẦN 2) (Trang 16 & 17 - MỚI THÊM) ---
    {
        id: 16,
        items: [
            {
                id: 'p16-note1',
                type: ItemType.NOTE,
                content: "Tớ không phải người toàn năng sẽ làm cậu mở lòng trong 1 sớm 1 chiều được. Nhưng tớ muốn là người đi chung với cậu sau này để nhìn thấy cậu mở lòng hơn cười nhiều hơn để cậu có lại niềm tin vào bản thân và bớt khó tính lại. Tớ mà muốn gì tớ sẽ làm nó đến cùng Engineer will try a solution until come up to a logical conclusion and adapt nên cho đến lúc tớ đến được một cái đích nào đó với cậu hãy luôn bật đèn xanh cho tớ nhé cậu sẽ không thất vọng đâu (còn có thì nói để tớ sửa)",
                position: { x: 50, y: 25, rotate: -1 },
                style: { width: '80%', bgColor: '#ecfeff', zIndex: 10 }
            },
            {
                id: 'p16-img',
                type: ItemType.PHOTO,
                content: "ChamChi.JPG", // Thay ảnh kỷ niệm
                caption: "Châm Chỉ",
                position: { x: 50, y: 70, rotate: 2 },
                style: { width: '50%', zIndex: 10 }
            }
        ],
        backgroundStyle: 'lined'
    },
    {
        id: 17,
        items: [
            {
                id: 'p17-note',
                type: ItemType.NOTE,
                content: "Trước mắt mong cậu hãy tự tin lên cậu rất giỏi (nói từ 1 người có connection rộng) là người ưa nhìn (có chăm sóc tút tát bản thân) và là người quyến rũ rất hợp để làm vợ tớ và để tớ hy sinh vì cậu nhiều hơn nữa. Hai đứa gặp được nhau cũng kể ra là duyên và tớ rất thích cái duyên này.",
                position: { x: 50, y: 20, rotate: -3 },
                style: { width: '80%', bgColor: '#fdf4ff', zIndex: 20 }
            },

            {
                id: 'p17-note2',
                type: ItemType.NOTE,
                content: "Người thực dụng thì thường không thích thứ gì không ăn được cơ mà tớ đã bỏ nhiều công sức vào làm cái nhật ký này lắm nên là cậu đừng chê nó nhé. Hihi. Cậu có đùa thì nghĩ cho tớ một chút nhó tớ dễ bị tổn thương dễ bị Overthinking lắm ó hiu hiu",
                position: { x: 50, y: 50, rotate: 3 },
                style: { width: '80%', bgColor: '#9adfba', zIndex: 20 }
            },
            {
                 id: 'p17-decor',
                 type: ItemType.TEXT,
                 content: "Always by your side ❤️",
                 position: { x: 50, y: 75, rotate: -5 },
                 style: { width: '90%', textColor: '#be185d', zIndex: 5 }
            }
        ],
        backgroundStyle: 'plain'
    },

    // --- PHẦN CUỐI: ALBUM TỔNG HỢP (Trang 18 & 19 - Cũ là 16 & 17) ---
    {
        id: 18,
        items: [
            {
                id: 'p18-title',
                type: ItemType.TEXT,
                content: "Memories...",
                position: { x: 50, y: 8, rotate: 0 },
                style: { width: '100%', textColor: '#57534e', zIndex: 5 }
            },
            {
                id: 'p18-img1',
                type: ItemType.PHOTO,
                content: "M1.jpg",
                position: { x: 25, y: 25, rotate: -10 },
                style: { width: '35%', zIndex: 10 }
            },
            {
                id: 'p18-img2',
                type: ItemType.PHOTO,
                content: "M2.jpg",
                position: { x: 75, y: 30, rotate: 8 },
                style: { width: '35%', zIndex: 11 }
            },
            {
                id: 'p18-img3',
                type: ItemType.PHOTO,
                content: "M3.jpg",
                position: { x: 50, y: 55, rotate: 2 },
                style: { width: '40%', zIndex: 15 }
            },
            {
                id: 'p18-img4',
                type: ItemType.PHOTO,
                content: "M5.jpg",
                position: { x: 30, y: 80, rotate: 6 },
                style: { width: '35%', zIndex: 13 }
            },
            {
                id: 'p18-img5',
                type: ItemType.PHOTO,
                content: "M6.jpg",
                position: { x: 80, y: 75, rotate: -5 },
                style: { width: '30%', zIndex: 10 }
            }
        ],
        backgroundStyle: 'plain'
    },
    {
        id: 19, 
        items: [
            {
                id: 'p19-img1',
                type: ItemType.PHOTO,
                content: "M7.jpg",
                position: { x: 50, y: 20, rotate: -3 },
                style: { width: '40%', zIndex: 10 }
            },
            {
                id: 'p19-img2',
                type: ItemType.PHOTO,
                content: "M8.jpg",
                position: { x: 25, y: 50, rotate: 5 },
                style: { width: '35%', zIndex: 11 }
            },
            {
                id: 'p19-img3',
                type: ItemType.PHOTO,
                content: "M9.jpg",
                position: { x: 75, y: 55, rotate: -8 },
                style: { width: '35%', zIndex: 12 }
            },
            {
                id: 'p19-img4',
                type: ItemType.PHOTO,
                content: "M10.jpg",
                position: { x: 50, y: 85, rotate: 2 },
                style: { width: '45%', zIndex: 15 }
            },
            {
                id: 'p19-note',
                type: ItemType.NOTE,
                content: "Và còn nhiều nữa...",
                position: { x: 90, y: 85, rotate: 15 },
                style: { width: '30%', bgColor: '#ffedd5', zIndex: 20 }
            }
        ], 
        backgroundStyle: 'plain'
    },
    // --- PHẦN KẾT: LỜI NHẮN NHỦ (Trang 20 & 21 - MỚI THÊM) ---
    {
        id: 20,
        items: [
             {
                id: 'p20-img',
                type: ItemType.PHOTO,
                content: "AnhChung.JPG", // Bạn có thể thay ảnh nắm tay hoặc ảnh couple vào đây
                caption: "Tất cả",
                position: { x: 50, y: 45, rotate: -2 },
                style: { width: '60%', zIndex: 10 }
            },
            {
                id: 'p20-note',
                type: ItemType.NOTE,
                content: "Chúc mừng sinh nhật! Chúc cậu tất cả",
                position: { x: 50, y: 80, rotate: 2 },
                style: { width: '80%', bgColor: '#fff1f2', zIndex: 20 }
            }
        ],
        backgroundStyle: 'lined'
    },
    {
        id: 21,
        items: [
            {
                id: 'p21-text',
                type: ItemType.TEXT,
                content: "Happy Birthday!",
                position: { x: 50, y: 30, rotate: 0 },
                style: { width: '100%', textColor: '#be185d', zIndex: 10 }
            },
             {
                id: 'p21-img',
                type: ItemType.PHOTO,
                content: "DSC02230.JPG",
                position: { x: 50, y: 60, rotate: 0 },
                style: { width: '50%', zIndex: 5 }
            },
             {
                id: 'p21-sub',
                type: ItemType.TEXT,
                content: "To be continued...",
                position: { x: 50, y: 85, rotate: 0 },
                style: { width: '100%', textColor: '#9ca3af', zIndex: 5 } // Chữ màu xám, kiểu kết mở
            }
        ],
        backgroundStyle: 'plain'
    }
    
    
];