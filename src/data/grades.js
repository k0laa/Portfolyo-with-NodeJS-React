export const courses = [
    { name: 'Yabancı Dil I (İngilizce)', emoji: '🗣️', grade: 'AA', midterm: 100, final: 100 },
    { name: 'Yabancı Dil II (İngilizce)', emoji: '🗣️', grade: 'AA', midterm: 100, final: 100 },

    { name: 'Atatürk İlkeleri ve İnkılap Tarihi-I', emoji: '📜', grade: 'AA', midterm: 96, final: 88 },
    { name: 'Programlama I', emoji: '💻', grade: 'AA', midterm: 100, final: 94 },
    { name: 'Lineer Cebir', emoji: '➕', grade: 'AA', midterm: 80, final: 90 },
    { name: 'Bilgisayar Mühendisliğine Giriş', emoji: '🚀', grade: 'AA', midterm: 95, final: 90 },
    { name: 'Programlama Lab I', emoji: '🧪', grade: 'AA', midterm: 90, final: 90, odev: 100 },
    { name: 'Fizik I', emoji: '🧲', grade: 'BA', midterm: 100, final: 80 },
    { name: 'Fizik I Laboratuvar', emoji: '🔬', grade: 'AA', midterm: 100, final: 100 },
    { name: 'Matematik I', emoji: '📐', grade: 'BB', midterm: 63, final: 72 },
    { name: 'Türk Dili I', emoji: '📝', grade: 'CB', midterm: 60, final: 85 },

    { name: 'Atatürk İlkeleri ve İnkılap Tarihi II', emoji: '📜', grade: 'AA', midterm: 92, final: 93 },
    { name: 'Ayrık Matematik', emoji: '🔢', grade: 'CB', midterm: 55, final: 70 },
    { name: 'Programlama II', emoji: '🖥️', grade: 'BA', midterm: 79, final: 79 },
    { name: 'Programlama Lab II', emoji: '🧪', grade: 'AA', midterm: 100, final: 87, odev: 100 },
    { name: 'Fizik II', emoji: '⚛️', grade: 'AA', midterm: 78, final: 80 },
    { name: 'Fizik II Laboratuvar', emoji: '🔬', grade: 'BA', midterm: 65, final: 90 },
    { name: 'İstatistik', emoji: '📊', grade: 'AA', midterm: 80, final: 90 },
    { name: 'Matematik II', emoji: '📐', grade: 'AA', midterm: 43, final: 97 },
    { name: 'Türk Dili II', emoji: '📝', grade: 'BB', midterm: 60, final: 80 },

    { name: 'Diferansiyel Denklemler', emoji: '🔣', grade: 'AA', midterm: 100, final: 100 },

    { name: 'Elektronik Devreler', emoji: '🔌', grade: 'BA', midterm: 80, final: 85 },
    { name: 'Elektronik Devreler Lab.', emoji: '🧪', grade: 'CB', midterm: 60, final: 68.8, uygulama1: 93.33, uygulama2: 58 },
    { name: 'Veri Yapıları ve Algoritmalar', emoji: '🌳', grade: 'BA', midterm: 90, final: 80 },
    { name: 'Nesneye Yönelik Programlama', emoji: '🧱', grade: 'AA', midterm: 92, final: 90 },
    { name: 'Python Programlama', emoji: '🐍', grade: 'AA', midterm: 74, final: 100 },
    { name: 'Girişimcilik', emoji: '🚀', grade: 'AA', midterm: 100, final: 85 },
    { name: 'Bilgisayar Destekli Teknik Çizim', emoji: '🖊️', grade: 'AA', midterm: 100, final: 84 },

    { name: 'İnternet Programlama', emoji: '🌐', grade: 'AA', midterm: 80, final: 95 },
    { name: 'Sayısal Tasarım', emoji: '📐', grade: 'BB', midterm: 73, final: 75 },
    { name: 'Sayısal Tasarım Lab', emoji: '🧪', grade: 'AA', midterm: 90, final: 81, uygulama: 97 },
    { name: 'Görsel Programlama', emoji: '🖼️', grade: 'AA', midterm: 100, final: 100 },
    { name: 'Nümerik Analiz', emoji: '📊', grade: 'CB', midterm: 70, final: 53 },
    { name: 'Girişimcilik II', emoji: '🚀', grade: 'CB', midterm: 80, final: 58 },
    { name: 'İş Hukuku', emoji: '⚖️', grade: 'BB', midterm: 90, final: 60 },
    /*{name: 'Staj I', emoji: '🛠️', grade: '--', midterm: null, final: null},*/

    { name: 'Bilgisayar Organizasyonu', emoji: '🖥️', grade: 'AA', midterm: 90, final: 96, odev: 100 },
    { name: 'Bilgisayar Ağları', emoji: '🌐', grade: 'AA', midterm: 77, final: 84 },
    { name: 'Biçimsel Diller ve Otomatlar', emoji: '🤖', grade: 'BA', midterm: 85, final: 60 },
    { name: 'Veritabanı Yönetim Sistemleri', emoji: '🗄️', grade: 'AA', midterm: 97, final: 98 },
    { name: 'Biyoinformatiğe Giriş', emoji: '🧬', grade: 'BA', midterm: 85, final: 90 },
    { name: 'İş Sağlığı ve Güvenliği I', emoji: '🦺', grade: 'BB', midterm: 95, final: 75 },
    { name: 'Teknoloji Bağımlılığı', emoji: '📱', grade: 'AA', midterm: 90, final: 97 },
];

export const gradeInfo = {
    'AA': { emoji: '🐐', color: '#4CAF50' },
    'BA': { emoji: '😊', color: '#8BC34A' },
    'BB': { emoji: '🙂', color: '#CDDC39' },
    'CB': { emoji: '😐', color: '#FFC107' },
    'CC': { emoji: '🫠', color: '#FF9800' },
    'DC': { emoji: '😢', color: '#FF5722' },
    'DD': { emoji: '😭', color: '#F44336' },
    'FF': { emoji: '💀', color: '#D32F2F' },
    '--': { emoji: '🕵️‍♂️', color: '#9E9E9E' },
}; 