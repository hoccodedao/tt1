window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    // Nếu bạn có thêm hiệu ứng thì thêm ở đây, còn muốn chuyển hướng ngay thì làm luôn:
    window.location.href = "https://hoccodedao.github.io/hbd/"  // Đổi thành liên kết bạn muốn
})
