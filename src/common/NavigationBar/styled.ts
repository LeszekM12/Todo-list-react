import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navigation = styled.nav`
    background-color: ${({ theme }) => theme.color.navBg};
    position: relative;
    transition: background-color 0.25s ease;
`;

export const NavInner = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const List = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 4px;
`;

const activeClassName = "active-link";

export const StyledNavLink = styled(NavLink).attrs(() => ({ activeClassName }))`
    display: block;
    color: ${({ theme }) => theme.color.navText};
    text-decoration: none;
    padding: 16px 18px;
    font-size: 15px;
    font-weight: 600;
    transition: all 0.2s;
    border-radius: 6px 6px 0 0;

    &.${activeClassName} {
        background-color: ${({ theme }) => theme.color.navActiveBg};
        color: ${({ theme }) => theme.color.navActiveText};
        border-radius: 6px 6px 0 0;
    }

    &:hover:not(.${activeClassName}) {
        opacity: 0.8;
    }
`;

export const SettingsBtn = styled.button<{ $active?: boolean }>`
    background: ${({ $active, theme }) => $active
        ? "rgba(255,255,255,0.25)"
        : "rgba(255,255,255,0.1)"};
    border: none;
    border-radius: 8px;
    color: ${({ theme }) => theme.color.navText};
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s, transform 0.3s;
    transform: ${({ $active }) => $active ? "rotate(45deg)" : "rotate(0deg)"};

    &:hover {
        background: rgba(255,255,255,0.25);
    }
`;

export const SettingsPanel = styled.div`
    position: absolute;
    right: 16px;
    top: calc(100% + 8px);
    background: ${({ theme }) => theme.color.settingsBg};
    border: 1px solid ${({ theme }) => theme.color.settingsBorder};
    border-radius: 12px;
    padding: 12px;
    min-width: 200px;
    z-index: 999;
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
`;

export const SettingsPanelTitle = styled.p`
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: ${({ theme }) => theme.color.textMuted};
    margin: 0 0 10px 0;
    padding: 0 4px;
`;

export const ThemeOption = styled.button<{ $active?: boolean }>`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 10px;
    border: none;
    border-radius: 8px;
    background: ${({ $active, theme }) => $active ? theme.color.pageBg : "transparent"};
    color: ${({ theme }) => theme.color.textPrimary};
    font-size: 14px;
    font-weight: ${({ $active }) => $active ? "700" : "400"};
    text-align: left;
    transition: background 0.15s;
    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.color.pageBg};
    }

    span:last-child {
        margin-left: auto;
        color: ${({ theme }) => theme.color.primary};
    }
`;

export const ThemePreview = styled.div`
    display: flex;
    gap: 3px;
    flex-shrink: 0;

    span {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        border: 1px solid rgba(0,0,0,0.08);
    }
`;

export const ThemeLabel = styled.span`
    flex: 1;
`;
