module.exports = {
    "name": "Spine & Core Synergy",
    "email": "spineandcore@gmail.com",
    "phoneForTel": "+441296826223",
    "phoneFormatted": "01296 826223",
    "openingHours": "Mon-Fri: 10am-7pm, Sat: 3.30pm-7pm",
    "onlineBooking": "https://simms-family-chiropractic.uk1.cliniko.com/bookings#service",
    "address": {
        "lineOne": "Duck Farm Ct",
        "lineTwo": "",
        "city": "Aylesbury",
        "state": "Buckinghamshire",
        "zip": "HP20 2SQ",
        "country": "United Kingdom",
        "mapLink": "https://maps.app.goo.gl/K4SkCiudigCkdXMTA"
    },
    "socials": {
        "facebook": "",
        "instagram": "",
        "googleReview": "",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    "domain": "https://spinecoresynergy.co.uk",
    "schema": {
        "business": {
            "@context": "https://schema.org",
            "@type": ["MedicalBusiness", "HealthAndBeautyBusiness"],
            "@id": "https://spinecoresynergy.co.uk/#business",
            "name": "Spine & Core Synergy",
            "image": "https://spinecoresynergy.co.uk/assets/svgs/logo-pink2.svg",
            "url": "https://spinecoresynergy.co.uk",
            "telephone": "+441296826223",
            "email": "spineandcore@gmail.com",
            "priceRange": "££",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Unit 10 Duck Farm Ct, Station Way W",
                "addressLocality": "Aylesbury",
                "addressRegion": "Buckinghamshire",
                "postalCode": "HP20 2SQ",
                "addressCountry": "GB"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "url": "https://maps.app.goo.gl/K4SkCiudigCkdXMTA"
            },
            "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "10:00",
                    "closes": "19:00"
                },
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Saturday",
                    "opens": "15:30",
                    "closes": "19:00"
                }
            ],
           
        },
        "website": {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://spinecoresynergy.co.uk/#website",
            "url": "https://spinecoresynergy.co.uk",
            "name": "Spine & Core Synergy",
            "publisher": {
                "@id": "https://spinecoresynergy.co.uk/#business"
            }
        }
    }
};



