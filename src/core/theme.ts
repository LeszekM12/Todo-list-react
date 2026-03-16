// ─── THEME DEFINITIONS ───────────────────────────────────────────
// Three themes available: minimal (black/white), teal (dark teal header),
// purple (purple accent with card layout)
// Active theme is stored in localStorage under key "appTheme"

export type ThemeName = "minimal" | "teal" | "purple";

const shared = {
    breakpoints: {
        mobileMax: "767px",
    },
};

export const minimalTheme = {
    ...shared,
    name: "minimal" as ThemeName,
    color: {
        // Brand
        primary: "#111111",
        primaryHover: "#333333",
        primaryText: "#ffffff",
        // Navigation
        navBg: "#111111",
        navText: "#ffffff",
        navActiveText: "#111111",
        navActiveBg: "#ffffff",
        navBorder: "transparent",
        // Backgrounds
        pageBg: "#f9f9f9",
        sectionBg: "#ffffff",
        sectionShadow: "0 1px 4px rgba(0,0,0,0.08)",
        sectionBorder: "1px solid #eeeeee",
        sectionRadius: "12px",
        // Form
        inputBorder: "#dddddd",
        inputBg: "#ffffff",
        inputRadius: "8px",
        // Task item
        taskBorder: "#eeeeee",
        taskDoneColor: "#aaaaaa",
        taskBg: "#ffffff",
        taskHoverBg: "#f5f5f5",
        taskAccent: "#111111",
        // Buttons
        btnBg: "#111111",
        btnText: "#ffffff",
        btnRadius: "8px",
        btnSecondaryColor: "#111111",
        btnSecondaryHover: "#333333",
        // Text
        textPrimary: "#111111",
        textSecondary: "#666666",
        textMuted: "#aaaaaa",
        // Header
        headerColor: "#111111",
        // Settings panel
        settingsBg: "#ffffff",
        settingsBorder: "#eeeeee",
        // Misc
        black: '#000000',
        crimson: '#db143c',
        teal: '#111111',
        alto: '#ddd',
        gallery: '#eee',
        silver: '#ccc',
        white: '#fff',
    },
};

export const tealTheme = {
    ...shared,
    name: "teal" as ThemeName,
    color: {
        primary: "#0F6E56",
        primaryHover: "#085041",
        primaryText: "#ffffff",
        navBg: "#0F6E56",
        navText: "#9FE1CB",
        navActiveText: "#0F6E56",
        navActiveBg: "#ffffff",
        navBorder: "transparent",
        pageBg: "#f0faf6",
        sectionBg: "#ffffff",
        sectionShadow: "0 1px 4px rgba(15,110,86,0.1)",
        sectionBorder: "1px solid #c8ead9",
        sectionRadius: "12px",
        inputBorder: "#9FE1CB",
        inputBg: "#ffffff",
        inputRadius: "8px",
        taskBorder: "#E1F5EE",
        taskDoneColor: "#aaaaaa",
        taskBg: "#f8fffe",
        taskHoverBg: "#E1F5EE",
        taskAccent: "#0F6E56",
        btnBg: "#1D9E75",
        btnText: "#ffffff",
        btnRadius: "8px",
        btnSecondaryColor: "#0F6E56",
        btnSecondaryHover: "#085041",
        textPrimary: "#085041",
        textSecondary: "#1D9E75",
        textMuted: "#9FE1CB",
        headerColor: "#0F6E56",
        settingsBg: "#ffffff",
        settingsBorder: "#c8ead9",
        black: '#085041',
        crimson: '#db143c',
        teal: '#0F6E56',
        alto: '#c8ead9',
        gallery: '#E1F5EE',
        silver: '#9FE1CB',
        white: '#fff',
    },
};

export const purpleTheme = {
    ...shared,
    name: "purple" as ThemeName,
    color: {
        primary: "#534AB7",
        primaryHover: "#3C3489",
        primaryText: "#ffffff",
        navBg: "#3C3489",
        navText: "#CECBF6",
        navActiveText: "#3C3489",
        navActiveBg: "#ffffff",
        navBorder: "transparent",
        pageBg: "#f4f3fe",
        sectionBg: "#ffffff",
        sectionShadow: "0 2px 8px rgba(83,74,183,0.10)",
        sectionBorder: "1px solid #EEEDFE",
        sectionRadius: "12px",
        inputBorder: "#AFA9EC",
        inputBg: "#ffffff",
        inputRadius: "8px",
        taskBorder: "#EEEDFE",
        taskDoneColor: "#AFA9EC",
        taskBg: "#ffffff",
        taskHoverBg: "#EEEDFE",
        taskAccent: "#534AB7",
        btnBg: "#534AB7",
        btnText: "#ffffff",
        btnRadius: "8px",
        btnSecondaryColor: "#534AB7",
        btnSecondaryHover: "#3C3489",
        textPrimary: "#26215C",
        textSecondary: "#534AB7",
        textMuted: "#AFA9EC",
        headerColor: "#3C3489",
        settingsBg: "#ffffff",
        settingsBorder: "#EEEDFE",
        black: '#26215C',
        crimson: '#db143c',
        teal: '#534AB7',
        alto: '#EEEDFE',
        gallery: '#f4f3fe',
        silver: '#CECBF6',
        white: '#fff',
    },
};

export const themes = {
    minimal: minimalTheme,
    teal: tealTheme,
    purple: purpleTheme,
};

// Read saved theme from localStorage (defaults to "minimal")
export const getSavedTheme = (): ThemeName => {
    const saved = localStorage.getItem("appTheme") as ThemeName | null;
    return saved && saved in themes ? saved : "minimal";
};

export const theme = themes[getSavedTheme()];
