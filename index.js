function changeImage(thumbnail) {
    // Lấy nguồn ảnh từ thumbnail được nhấp
    const newSrc = thumbnail.src;

    // Cập nhật nguồn ảnh chính
    const mainImage = document.getElementById('mainImage');
    mainImage.src = newSrc;

    // Cập nhật kiểu dáng cho thumbnail
    const thumbnails = document.querySelectorAll('.thumbnail-container img');
    thumbnails.forEach((img) => {
        img.classList.remove('active-thumbnail'); // Xóa lớp active
    });
    thumbnail.classList.add('active-thumbnail'); // Thêm lớp active cho thumbnail hiện tại
}


function toggleSearch() {
    var searchBar = document.getElementById('searchBar');
    if (searchBar.style.display === 'none' || searchBar.style.display === '') {
        searchBar.style.display = 'block';
    } else {
        searchBar.style.display = 'none';
    }
}