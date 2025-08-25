import { create } from 'zustand'

export const useTaps = create((set) => ({
    taps: 0,
    addTap: () => {
        set((state) => ({
            taps: state.taps + 1
        }))
    },
    removeTap: () => {
        set((state) => ({
            taps: state.taps - 1
        }))
    },
    resetTap: () => {
        set((state) => ({
            taps: 0
        }))
    },
    // Ejemplos
    pinApp: (app) => {
        console.log('Pinning app', app)
        set((state) => ({ 
            pinnedApps: [...state.pinnedApps, app] 
        }))
    },
    unpinApp: (appID) => {
        console.log('Unpinning app', appID)
        set((state) => ({
            pinnedApps: state.pinnedApps.filter(id => id !== appID)
        }))
    }
}))
