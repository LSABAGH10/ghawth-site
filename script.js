// Ghawth Spiritual Website JavaScript

// Global variables
let currentDhikr = null;
let tasbeehCount = 0;
let shareCount = 0;
let favorites = [];

// Dhikr data
const dhikrList = [
    {
        text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
        translation: "Glory be to Allah and His is the praise",
        category: "تسبيح"
    },
    {
        text: "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ",
        translation: "There is no god but Allah, alone, without any partner",
        category: "توحيد"
    },
    {
        text: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ",
        translation: "O Allah, send prayers upon Muhammad and the family of Muhammad",
        category: "صلاة"
    },
    {
        text: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ",
        translation: "I seek forgiveness from Allah, the Most Great",
        category: "استغفار"
    },
    {
        text: "لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ",
        translation: "There is no power and no strength except with Allah",
        category: "توحيد"
    },
    {
        text: "سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلاَ إِلَهَ إِلاَّ اللَّهُ وَاللَّهُ أَكْبَرُ",
        translation: "Glory be to Allah, and praise be to Allah, and there is no god but Allah, and Allah is the Greatest",
        category: "تسبيح"
    },
    {
        text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ",
        translation: "O Allah, I ask You for Paradise and I seek refuge with You from the Fire",
        category: "دعاء"
    },
    {
        text: "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ",
        translation: "My Lord, forgive me and accept my repentance, for You are the Ever-Accepting of repentance, the Most Merciful",
        category: "استغفار"
    },
    {
        text: "اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ",
        translation: "O Allah, You are my Lord, there is no god but You. You created me and I am Your servant",
        category: "دعاء"
    },
    {
        text: "حَسْبِيَ اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
        translation: "Sufficient for me is Allah; there is no deity except Him. On Him I have relied, and He is the Lord of the Great Throne",
        category: "توحيد"
    }
];

// Spiritual reflections data
const reflectionsList = [
    {
        text: "إن الله مع الصابرين",
        translation: "Indeed, Allah is with the patient",
        author: "القرآن الكريم"
    },
    {
        text: "من حسن إسلام المرء تركه ما لا يعنيه",
        translation: "Part of the perfection of one's Islam is his leaving that which does not concern him",
        author: "حديث شريف"
    },
    {
        text: "اللهم إني أسألك الهدى والتقى والعفاف والغنى",
        translation: "O Allah, I ask You for guidance, piety, chastity, and self-sufficiency",
        author: "حديث شريف"
    },
    {
        text: "إنما الأعمال بالنيات",
        translation: "Actions are but by intentions",
        author: "حديث شريف"
    },
    {
        text: "من سلك طريقاً يلتمس فيه علماً سهل الله له به طريقاً إلى الجنة",
        translation: "Whoever takes a path upon which to obtain knowledge, Allah makes the path to Paradise easy for him",
        author: "حديث شريف"
    }
];

// Quran recitations data
const recitationsList = [
    {
        title: "سورة البقرة - الشيخ عبد الباسط عبد الصمد",
        videoId: "dQw4w9WgXcQ",
        reciter: "عبد الباسط عبد الصمد"
    },
    {
        title: "سورة يس - الشيخ مشاري العفاسي",
        videoId: "dQw4w9WgXcQ",
        reciter: "مشاري العفاسي"
    },
    {
        title: "سورة الرحمن - الشيخ سعد الغامدي",
        videoId: "dQw4w9WgXcQ",
        reciter: "سعد الغامدي"
    },
    {
        title: "سورة الملك - الشيخ أحمد العجمي",
        videoId: "dQw4w9WgXcQ",
        reciter: "أحمد العجمي"
    }
];

// DOM elements
const elements = {
    gregorianDate: document.getElementById('gregorianDate'),
    hijriDate: document.getElementById('hijriDate'),
    dhikrText: document.getElementById('dhikrText'),
    dhikrTranslation: document.getElementById('dhikrTranslation'),
    changeDhikrBtn: document.getElementById('changeDhikrBtn'),
    addToFavoritesBtn: document.getElementById('addToFavoritesBtn'),
    shareDhikrBtn: document.getElementById('shareDhikrBtn'),
    tasbeehCount: document.getElementById('tasbeehCount'),
    tasbeehBtn: document.getElementById('tasbeehBtn'),
    resetTasbeehBtn: document.getElementById('resetTasbeehBtn'),
    shareMessage: document.getElementById('shareMessage'),
    successMessage: document.getElementById('successMessage')
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Load saved data from localStorage
    loadSavedData();
    
    // Initialize date display
    updateDates();
    
    // Set up event listeners
    setupEventListeners();
    
    // Check for dark mode
    checkDarkMode();
    
    // Update dates every minute
    setInterval(updateDates, 60000);
    
    // Check dark mode every hour
    setInterval(checkDarkMode, 3600000);
}

function loadSavedData() {
    // Load tasbeeh count
    const savedTasbeehCount = localStorage.getItem('ghawth_tasbeeh_count');
    if (savedTasbeehCount) {
        tasbeehCount = parseInt(savedTasbeehCount);
        updateTasbeehDisplay();
    }
    
    // Load share count
    const savedShareCount = localStorage.getItem('ghawth_share_count');
    if (savedShareCount) {
        shareCount = parseInt(savedShareCount);
    }
    
    // Load favorites
    const savedFavorites = localStorage.getItem('ghawth_favorites');
    if (savedFavorites) {
        favorites = JSON.parse(savedFavorites);
    }
}

function setupEventListeners() {
    // Dhikr change button
    if (elements.changeDhikrBtn) {
        elements.changeDhikrBtn.addEventListener('click', changeDhikr);
    }
    
    // Add to favorites button
    if (elements.addToFavoritesBtn) {
        elements.addToFavoritesBtn.addEventListener('click', addToFavorites);
    }
    
    // Share dhikr button
    if (elements.shareDhikrBtn) {
        elements.shareDhikrBtn.addEventListener('click', shareDhikr);
    }
    
    // Tasbeeh button
    if (elements.tasbeehBtn) {
        elements.tasbeehBtn.addEventListener('click', incrementTasbeeh);
    }
    
    // Reset tasbeeh button
    if (elements.resetTasbeehBtn) {
        elements.resetTasbeehBtn.addEventListener('click', resetTasbeeh);
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
}

function updateDates() {
    const now = new Date();
    
    // Update Gregorian date
    if (elements.gregorianDate) {
        const gregorianOptions = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        elements.gregorianDate.textContent = now.toLocaleDateString('ar-SA', gregorianOptions);
    }
    
    // Update Hijri date (approximate)
    if (elements.hijriDate) {
        const hijriDate = getHijriDate(now);
        elements.hijriDate.textContent = hijriDate;
    }
}

function getHijriDate(gregorianDate) {
    // Simple approximation of Hijri date
    // This is a basic conversion - for accurate dates, use a proper Hijri calendar library
    const year = gregorianDate.getFullYear();
    const month = gregorianDate.getMonth() + 1;
    const day = gregorianDate.getDate();
    
    // Approximate Hijri year (subtract 579 years)
    const hijriYear = year - 579;
    
    const hijriMonths = [
        'محرم', 'صفر', 'ربيع الأول', 'ربيع الآخر',
        'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان',
        'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'
    ];
    
    // Approximate Hijri month (add 2 months and adjust)
    let hijriMonth = month + 2;
    if (hijriMonth > 12) {
        hijriMonth -= 12;
    }
    
    return `${day} ${hijriMonths[hijriMonth - 1]} ${hijriYear} هـ`;
}

function changeDhikr() {
    const randomDhikr = dhikrList[Math.floor(Math.random() * dhikrList.length)];
    currentDhikr = randomDhikr;
    
    if (elements.dhikrText) {
        elements.dhikrText.textContent = randomDhikr.text;
    }
    
    if (elements.dhikrTranslation) {
        elements.dhikrTranslation.textContent = randomDhikr.translation;
    }
    
    // Add animation effect
    const dhikrCard = document.getElementById('dhikrCard');
    if (dhikrCard) {
        dhikrCard.style.animation = 'none';
        setTimeout(() => {
            dhikrCard.style.animation = 'cardGlow 2s ease-in-out infinite alternate';
        }, 10);
    }
}

function addToFavorites() {
    if (!currentDhikr) {
        showMessage('الرجاء اختيار ذكر أولاً', 'error');
        return;
    }
    
    // Check if already in favorites
    const isAlreadyFavorite = favorites.some(fav => fav.text === currentDhikr.text);
    
    if (isAlreadyFavorite) {
        showMessage('هذا الذكر موجود بالفعل في المفضلة', 'info');
        return;
    }
    
    // Add to favorites
    favorites.push({
        ...currentDhikr,
        addedAt: new Date().toISOString()
    });
    
    // Save to localStorage
    localStorage.setItem('ghawth_favorites', JSON.stringify(favorites));
    
    // Show success message
    showMessage('تمت الإضافة إلى المفضلة بنجاح', 'success');
}

function shareDhikr() {
    if (!currentDhikr) {
        showMessage('الرجاء اختيار ذكر أولاً', 'error');
        return;
    }
    
    const shareText = `${currentDhikr.text}\n\n${currentDhikr.translation}\n\n#غوث #ذكر #إسلام`;
    
    // Try to copy to clipboard
    if (navigator.clipboard) {
        navigator.clipboard.writeText(shareText).then(() => {
            shareCount++;
            localStorage.setItem('ghawth_share_count', shareCount.toString());
            showMessage('تم نسخ الذكر إلى الحافظة', 'success');
        }).catch(() => {
            // Fallback for older browsers
            fallbackCopyToClipboard(shareText);
        });
    } else {
        // Fallback for older browsers
        fallbackCopyToClipboard(shareText);
    }
}

function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        shareCount++;
        localStorage.setItem('ghawth_share_count', shareCount.toString());
        showMessage('تم نسخ الذكر إلى الحافظة', 'success');
    } catch (err) {
        showMessage('فشل في نسخ الذكر', 'error');
    }
    
    document.body.removeChild(textArea);
}

function incrementTasbeeh() {
    tasbeehCount++;
    updateTasbeehDisplay();
    saveTasbeehCount();
    
    // Add visual feedback
    const tasbeehBtn = elements.tasbeehBtn;
    if (tasbeehBtn) {
        tasbeehBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            tasbeehBtn.style.transform = 'scale(1)';
        }, 100);
    }
}

function resetTasbeeh() {
    if (tasbeehCount === 0) {
        showMessage('المسبحة فارغة بالفعل', 'info');
        return;
    }
    
    tasbeehCount = 0;
    updateTasbeehDisplay();
    saveTasbeehCount();
    showMessage('تم إعادة تعيين المسبحة', 'success');
}

function updateTasbeehDisplay() {
    if (elements.tasbeehCount) {
        elements.tasbeehCount.textContent = tasbeehCount;
    }
}

function saveTasbeehCount() {
    localStorage.setItem('ghawth_tasbeeh_count', tasbeehCount.toString());
}

function checkDarkMode() {
    const currentHour = new Date().getHours();
    const isDarkTime = currentHour >= 18 || currentHour < 6;
    
    if (isDarkTime) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

function showMessage(message, type = 'success') {
    const messageElement = type === 'success' ? elements.successMessage : elements.shareMessage;
    
    if (messageElement) {
        const spanElement = messageElement.querySelector('span');
        if (spanElement) {
            spanElement.textContent = message;
        }
        
        messageElement.classList.add('show');
        
        setTimeout(() => {
            messageElement.classList.remove('show');
        }, 3000);
    }
}

function handleKeyboardShortcuts(event) {
    // Space bar for tasbeeh
    if (event.code === 'Space' && !event.target.matches('input, textarea')) {
        event.preventDefault();
        incrementTasbeeh();
    }
    
    // Enter key for changing dhikr
    if (event.code === 'Enter' && !event.target.matches('input, textarea')) {
        event.preventDefault();
        changeDhikr();
    }
    
    // R key for resetting tasbeeh
    if (event.code === 'KeyR' && !event.target.matches('input, textarea')) {
        event.preventDefault();
        resetTasbeeh();
    }
}

// Utility functions for other pages
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function formatDate(date) {
    return date.toLocaleDateString('ar-SA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    });
}

function getFavorites() {
    const savedFavorites = localStorage.getItem('ghawth_favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
}

function removeFromFavorites(index) {
    favorites.splice(index, 1);
    localStorage.setItem('ghawth_favorites', JSON.stringify(favorites));
}

function getShareCount() {
    const savedShareCount = localStorage.getItem('ghawth_share_count');
    return savedShareCount ? parseInt(savedShareCount) : 0;
}

// Export functions for use in other pages
window.GhawthApp = {
    changeDhikr,
    addToFavorites,
    shareDhikr,
    incrementTasbeeh,
    resetTasbeeh,
    getRandomItem,
    formatDate,
    getFavorites,
    removeFromFavorites,
    getShareCount,
    dhikrList,
    reflectionsList,
    recitationsList
};