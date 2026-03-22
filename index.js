const allElements = document.querySelectorAll("[class*='chai-']");

const blueShades = {
    100:"#dbeafe",
    200:"#bfdbfe",
    300:"#93c5fd",
    400:"#60a5fa",
    500:"#3b82f6",
    600:"#2563eb",
    700:"#1d4ed8",
    800:"#1e40af",
    900:"#1e3a8a"
};
const redShades = {
    100:"#fee2e2",
    200:"#fecaca",
    300:"#fca5a5",
    400:"#f87171",
    500:"#ef4444",
    600:"#dc2626",
    700:"#b91c1c",
    800:"#991b1b",
    900:"#7f1d1d"
};
const greenShades = {
    100:"#d1fae5",
    200:"#a7f3d0",
    300:"#6ee7b7",
    400:"#34d399",
    500:"#10b981",
    600:"#059669",
    700:"#047857",
    800:"#065f46",
    900:"#064e3b"
};
const black = {
    100:"#cccccc",
    200:"#b3b3b3",
    300:"#999999",
    400:"#808080",
    500:"#666666",
    600:"#4d4d4d",
    700:"#333333",
    800:"#1a1a1a",
    900:"#000000"
};

const grayShades = {
    100:"#f3f4f6",
    200:"#e5e7eb",
    300:"#d1d5db",
    400:"#9ca3af",
    500:"#6b7280",
    600:"#4b5563",
    700:"#374151",
    800:"#1f2937",
    900:"#111827"
};



const colorShades = { blue: blueShades, red: redShades, green: greenShades, black, gray: grayShades };

const fontsize = {
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem"
};

const fontweight = {
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900"
};

const borderRadius = {
    sm: "0.125rem", md: "0.375rem", lg: "0.5rem",
    xl: "0.75rem", "2xl": "1rem", "3xl": "1.5rem", full: "9999px"
};

allElements.forEach((element) => {
    element.classList.forEach((cls) => {
        if (!cls.startsWith('chai-')) return;

        const parts = cls.replace('chai-', '').split('-');
        const type  = parts[0];
        const value = parts[1];

        switch (type) {
            case "p":
                element.style.padding = value + "px";
                break;

            case "m":
                if (parts[2] === 'auto') {
                    element.style.margin = 'auto';
                } else {
                    element.style.margin = value + "px";
                }
                break;

            case "bg":
                if (colorShades[value]?.[parts[2]]) {
                    element.style.backgroundColor = colorShades[value][parts[2]];
                }
                break;

            case "text":
                if (value === "center" || value === "left" || value === "right") {
                    element.style.textAlign = value;
                } else if (fontsize[value]) {
                    element.style.fontSize = fontsize[value];      
                } else if (colorShades[value]?.[parts[2]]) {
                    element.style.color = colorShades[value][parts[2]]; 
                }
                break;

            case "w":
                element.style.width = value + "px";
                break;

            case "h":
                element.style.height = value + "px";
                break;

            case "border":
                if (!isNaN(value)) {
                    element.style.borderWidth = value + "px";
                    element.style.borderStyle = "solid";
                } else if (colorShades[value]?.[parts[2]]) {
                    element.style.borderColor = colorShades[value][parts[2]];
                }
                break;

            case "borderColor":
                element.style.borderColor = colorShades[value][parts[2]];
                break;

            case "rounded":
                element.style.borderRadius = borderRadius[value] ?? value + "px";
                break;

            case "flex":
                if (value === "row") {
                    element.style.flexDirection = "row";
                } else if (value === "col") {
                    element.style.flexDirection = "column";
                }
                element.style.display = "flex";
                break;

            case "justify":
                if (value === "center") {
                    element.style.justifyContent = "center";
                } else if (value === "start") {
                    element.style.justifyContent = "flex-start";
                } else if (value === "end") {
                    element.style.justifyContent = "flex-end";
                } else if (value === "between") {
                    element.style.justifyContent = "space-between";
                }else if(value === "around"){
                    element.style.justifyContent = "space-around";
                }else if(value === "evenly"){
                    element.style.justifyContent = "space-evenly";
                }
                break;

            case "items":
                element.style.alignItems = value;
                break;

            case "font":
                element.style.fontWeight = fontweight[value];
                break;

           case "px":
                element.style.paddingLeft  = value + "px";
                element.style.paddingRight = value + "px";
                break;

            case 'py':
                element.style.paddingTop = value + "px";
                element.style.paddingBottom = value + "px";
                break;
            case 'mx':
                element.style.marginLeft = value + "px";
                element.style.marginRight = value + "px";
                break;
            case 'my':
                element.style.marginTop = value + "px";
                element.style.marginBottom = value + "px";
                break;
            case "mx":
                if (value === "auto") {
                    element.style.marginLeft = element.style.marginRight = "auto";
                } else {
                    element.style.marginLeft = element.style.marginRight = value + "px";
                }
                break;
            case 'pt':
                element.style.paddingTop = value + "px";
                break;
            case 'pb':
                element.style.paddingBottom = value + "px";
                break;
            case 'pl':
                element.style.paddingLeft = value + "px";
                break;
            case 'pr':
                element.style.paddingRight = value + "px";
                break;

            case 'mt':
                element.style.marginTop = value + "px";
                break;
            case 'mb':
                element.style.marginBottom = value + "px";
                break;
            case 'ml':
                element.style.marginLeft = value + "px";
                break;
            case 'mr':
                element.style.marginRight = value + "px";
                break;
            case "decoration":
                if (value === "none") {
                    element.style.textDecoration = "none";
                }
                break;
            
            case 'gap':
                element.style.gap = value + "px";
                break;
        }
    });
});