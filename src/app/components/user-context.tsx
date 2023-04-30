import { createContext, useContext } from 'react';
import React from 'react';

type AContextValue = {};
const AContext = createContext<AContextValue | undefined>(undefined);

export const AProvider = ({ children }: { children: React.ReactNode }) => {
    return <AContext.Provider value=''>{children}</AContext.Provider>;
};

export function useAContext() {
    const context = useContext(AContext);

    if (!context) {
        throw new Error('A Context is not defined');
    }

    return context;
}
