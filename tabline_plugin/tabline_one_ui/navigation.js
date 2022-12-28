import Home from "@tabline_one/views/Home";


// Navigation
const navigation = {
    "__home": Home, // Plugin Home
    "__plugin_nav": [
        {
            name: "Tagline Plugin Group",
            items: [
                {
                    "name": "Taglines",
                    "path": "taglines",
                    "model": "plugin:tagline.tagline"
                }
            ]
        }
    ],
    // Navigation
    "Tagline": [
        {
            name: "Tagline Group",
            items: [
                {
                    "name": "Taglines",
                    "path": "taglines",
                    "model": "plugin:tagline.tagline"
                }
            ]
        }
    ]
    
}


export { navigation }
