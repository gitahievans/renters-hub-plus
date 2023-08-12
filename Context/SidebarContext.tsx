'use client'

import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface SidebarContextType {
    sidebarOpen: boolean;
    setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export const SidebarContext = createContext<SidebarContextType | boolean>(false);

export function SidebarProvider({ children }: { children: ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
            {children}
        </SidebarContext.Provider>
    );
}

