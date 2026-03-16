import { useState } from "react";
import { toAuthor, toTasks } from "../../core/routes";
import { Navigation, NavInner, List, StyledNavLink, SettingsBtn, SettingsPanel, SettingsPanelTitle, ThemeOption, ThemePreview, ThemeLabel } from "./styled";
import { useThemeContext } from "../../core/ThemeContext";
import { ThemeName } from "../../core/theme";

// Theme options shown in the settings panel
const themeOptions: { name: ThemeName; label: string; colors: string[] }[] = [
    { name: "minimal", label: "Minimal", colors: ["#111111", "#ffffff", "#eeeeee"] },
    { name: "teal",    label: "Teal",    colors: ["#0F6E56", "#1D9E75", "#E1F5EE"] },
    { name: "purple",  label: "Purple",  colors: ["#3C3489", "#534AB7", "#EEEDFE"] },
];

// Gear icon SVG
const GearIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.14 12.94c.04-.3.06-.61.06-.94s-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96a7.01 7.01 0 0 0-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87a.49.49 0 0 0 .12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.37 1.04.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.57 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
    </svg>
);

export const NavigationBar = () => {
    const { themeName, setTheme } = useThemeContext();
    const [open, setOpen] = useState(false);

    return (
        <Navigation>
            <NavInner>
                <List>
                    <StyledNavLink to={toTasks()}>Task list</StyledNavLink>
                    <StyledNavLink to={toAuthor()}>Author</StyledNavLink>
                </List>

                {/* Settings gear button */}
                <SettingsBtn
                    onClick={() => setOpen(o => !o)}
                    aria-label="Theme settings"
                    $active={open}
                >
                    <GearIcon />
                </SettingsBtn>
            </NavInner>

            {/* Settings dropdown panel */}
            {open && (
                <SettingsPanel>
                    <SettingsPanelTitle>Choose theme</SettingsPanelTitle>
                    {themeOptions.map(opt => (
                        <ThemeOption
                            key={opt.name}
                            $active={themeName === opt.name}
                            onClick={() => { setTheme(opt.name); setOpen(false); }}
                        >
                            <ThemePreview>
                                {opt.colors.map((c, i) => (
                                    <span key={i} style={{ background: c }} />
                                ))}
                            </ThemePreview>
                            <ThemeLabel>{opt.label}</ThemeLabel>
                            {themeName === opt.name && <span>✓</span>}
                        </ThemeOption>
                    ))}
                </SettingsPanel>
            )}
        </Navigation>
    );
};
