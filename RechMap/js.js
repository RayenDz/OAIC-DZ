document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'p' || e.key === 'Shift')) {
        e.preventDefault();
    }
});
document.onkeydown = function(e) {
    if (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'c' || e.key === 'p')) {
        e.preventDefault();
    }
};
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
document.getElementById('textSearch').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // منع إرسال النموذج الافتراضي إذا كان داخل نموذج
        searchData(); // استدعاء دالة البحث
    }
});

