document.addEventListener("DOMContentLoaded", function () {
    console.log("تم تحميل الصفحة بنجاح.");

    // جلب جميع عناصر الفيديو في الصفحة
    const videos = document.querySelectorAll(".custom-video");

    videos.forEach((video, index) => {
        // التأكد من تحميل الفيديو
        video.load();

        // إيقاف بقية الفيديوهات عند تشغيل فيديو معين لمنع التداخل الصوتي
        video.addEventListener("play", function () {
            videos.forEach((v) => {
                if (v !== video) {
                    v.pause();
                }
            });
        });

        // معالجة الأخطاء في حال عدم وجود المقطع أو وجود مشكلة بالمسار
        video.addEventListener("error", function () {
            console.error(`عذراً، تعذر تشغيل الفيديو رقم ${index + 1}. التأكد من وجود الملف بنفس المجلد.`);
        });
    });
});
