/**
 * Chuyển đổi các định dạng link Google Drive thành link ảnh trực tiếp.
 * Hỗ trợ cả link file cục bộ (trong thư mục public).
 */
export const getDirectImageSrc = (url: string | undefined): string | undefined => {
    if (!url) return undefined;

    // Nếu là đường dẫn cục bộ (không bắt đầu bằng http), giữ nguyên hoặc xử lý logic base path ở component
    if (!url.startsWith('http')) {
        return url;
    }

    // Xử lý link Google Drive
    if (url.includes('drive.google.com') || url.includes('docs.google.com')) {
        let id = '';
        const parts = url.split('/');
        
        // Trường hợp 1: .../d/FILE_ID/view...
        const dIndex = parts.indexOf('d');
        if (dIndex !== -1 && parts.length > dIndex + 1) {
            id = parts[dIndex + 1];
        } 
        // Trường hợp 2: id=FILE_ID
        else if (url.includes('id=')) {
            const match = url.match(/id=([a-zA-Z0-9_-]+)/);
            if (match && match[1]) {
                id = match[1];
            }
        }

        // Trường hợp 3: drive.google.com/open?id=FILE_ID
        if (!id && url.includes('open?')) {
             const match = url.match(/id=([a-zA-Z0-9_-]+)/);
             if (match && match[1]) {
                 id = match[1];
             }
        }

        if (id) {
            // Chuyển sang link tải trực tiếp để hiển thị được trong thẻ <img>
            return `https://drive.google.com/uc?export=view&id=${id}`;
        }
    }

    // Trả về URL gốc nếu không cần chuyển đổi
    return url;
};