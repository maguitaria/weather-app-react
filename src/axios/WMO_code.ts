// This JSON has all the WMO decoding according to weather code property sent from OpenMeteo API.
// Taken from https://gist.github.com/stellasphere/9490c195ed2b53c707087c8c2db4ec0c
import icons from "../assets";

const weatherCode_JSON = {
    "0": {
        "day": {
            "description": "Sunny",
            "image": "http://openweathermap.org/img/wn/01d@2x.png"
        },
        "night": {
            "description": "Clear",
            "image": "http://openweathermap.org/img/wn/01n@2x.png"
        }
    },
    "1": {
        "day": {
            "description": "Mainly Sunny",
            "image": "http://openweathermap.org/img/wn/01d@2x.png"
        },
        "night": {
            "description": "Mainly Clear",
            "image": "http://openweathermap.org/img/wn/01n@2x.png"
        }
    },
    "2": {
        "day": {
            "description": "Partly Cloudy",
            "image": `${icons.cloudy}`
        },
        "night": {
            "description": "Partly Cloudy",
            "image": `${icons.partly_cloudy_night}`
        }
    },
    "3": {
        "day": {
            "description": "Cloudy",
            "image": `${icons.cloudy}`
        },
        "night": {
            "description": "Cloudy",
            "image": `${icons.partly_cloudy_night}`
        }
    },
    "45": {
        "day": {
            "description": "Foggy",
            "image": `${icons.fog}`
        },
        "night": {
            "description": "Foggy",
            "image": `${icons.nightFog}`
        }
    },
    "48": {
        "day": {
            "description": "Rime Fog",
            "image": `${icons.fog}`
        },
        "night": {
            "description": "Rime Fog",
            "image": `${icons.fog}`
        }
    },
    "51": {
        "day": {
            "description": "Light Drizzle",
            "image": `${icons.drizzle}`
        },
        "night": {
            "description": "Light Drizzle",
            "image": `${icons.drizzle}`
        }
    },
    "53": {
        "day": {
            "description": "Drizzle",
            "image": `${icons.drizzle}`
        },
        "night": {
            "description": "Drizzle",
            "image": `${icons.drizzle}`
        }
    },
    "55": {
        "day": {
            "description": "Heavy Drizzle",
            "image": `${icons.drizzle}`
        },
        "night": {
            "description": "Heavy Drizzle",
            "image": `${icons.drizzle}`
        }
    },
    "56": {
        "day": {
            "description": "Light Freezing Drizzle",
            "image": `${icons.drizzle}`
        },
        "night": {
            "description": "Light Freezing Drizzle",
            "image": `${icons.drizzle}`
        }
    },
    "57": {
        "day": {
            "description": "Freezing Drizzle",
            "image": `${icons.drizzle}`
        },
        "night": {
            "description": "Freezing Drizzle",
            "image": `${icons.drizzle}`
        }
    },
    "61": {
        "day": {
            "description": "Light Rain",
            "image": `${icons.rain}`
        },
        "night": {
            "description": "Light Rain",
            "image": `${icons.rain}`
        }
    },
    "63": {
        "day": {
            "description": "Rain",
            "image": `${icons.rain}`
        },
        "night": {
            "description": "Rain",
            "image": `${icons.rain}`
        }
    },
    "65": {
        "day": {
            "description": "Heavy Rain",
            "image": `${icons.heavy_rain}`
        },
        "night": {
            "description": "Heavy Rain",
            "image": `${icons.rain}`
        }
    },
    "66": {
        "day": {
            "description": "Light Freezing Rain",
            "image": `${icons.rain}`
        },
        "night": {
            "description": "Light Freezing Rain",
            "image": `${icons.rain}`
        }
    },
    "67": {
        "day": {
            "description": "Freezing Rain",
            "image": `${icons.rain}`
        },
        "night": {
            "description": "Freezing Rain",
            "image": `${icons.rain}`
        }
    },
    "71": {
        "day": {
            "description": "Light Snow",
            "image": `${icons.snow}`
        },
        "night": {
            "description": "Light Snow",
            "image": `${icons.snow}`
        }
    },
    "73": {
        "day": {
            "description": "Snow",
            "image": `${icons.snow}`
        },
        "night": {
            "description": "Snow",
            "image": `${icons.snow}`
        }
    },
    "75": {
        "day": {
            "description": "Heavy Snow",
            "image": `${icons.snow}`
        },
        "night": {
            "description": "Heavy Snow",
            "image": `${icons.snow}`
        }
    },
    "77": {
        "day": {
            "description": "Snow Grains",
            "image": `${icons.snow}`
        },
        "night": {
            "description": "Snow Grains",
            "image": `${icons.snow}`
        }
    },
    "80": {
        "day": {
            "description": "Light Showers",
            "image": `${icons.raindrops}`
        },
        "night": {
            "description": "Light Showers",
            "image": `${icons.raindrops}`
        }
    },
    "81": {
        "day": {
            "description": "Showers",
            "image": `${icons.raindrops}`
        },
        "night": {
            "description": "Showers",
            "image": `${icons.raindrops}`
        }
    },
    "82": {
        "day": {
            "description": "Heavy Showers",
            "image": `${icons.rain}`
        },
        "night": {
            "description": "Heavy Showers",
            "image": `${icons.rain}`
        }
    },
    "85": {
        "day": {
            "description": "Light Snow Showers",
            "image": `${icons.raindrops}`
        },
        "night": {
            "description": "Light Snow Showers",
            "image": `${icons.raindrops}`
        }
    },
    "86": {
        "day": {
            "description": "Snow Showers",
            "image": `${icons.snow}`
        },
        "night": {
            "description": "Snow Showers",
            "image": `${icons.snow}`
        }
    },
    "95": {
        "day": {
            "description": "Thunderstorm",
            "image": `${icons.thunderstorm}`
        },
        "night": {
            "description": "Thunderstorm",
            "image": `${icons.thunderstorm}`
        }
    },
    "96": {
        "day": {
            "description": "Light Thunderstorms With Hail",
            "image": `${icons.thunderstorm}`
        },
        "night": {
            "description": "Light Thunderstorms With Hail",
            "image": `${icons.thunderstorm}`
        }
    },
    "99": {
        "day": {
            "description": "Thunderstorm With Hail",
            "image": `${icons.thunderstorm}`
        },
        "night": {
            "description": "Thunderstorm With Hail",
            "image": `${icons.thunderstorm}`
        }
    }
}
export default weatherCode_JSON;