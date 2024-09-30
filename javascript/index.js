function downloadResume() {
    const link = document.createElement('a');
    link.href = 'https://raw.githubusercontent.com/Talha78612/Talha-Habib/main/Talha%20Habib.pdf';
    link.download = 'Talha_Habib_Resume.pdf'; // Optional: set the name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


// document.onkeydown = function (e) {
//     if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.key === 'U')) {
//         e.preventDefault();
//         return false;
//     }
// };

// document.addEventListener('contextmenu', function (e) {
//     e.preventDefault();
// });

// // Prevent Mobile Access
// function isMobile() {
//     return /Mobi|Android/i.test(navigator.userAgent);
// }

// if (isMobile()) {
//     window.location.href = 'https://example.com/not-supported.html'; // Redirect to a not supported page
// }


