import { create } from 'zustand'
import { Portfolio } from '@/types/portfolio'

interface PortfolioState {
  portfolios: Portfolio[]
  addPortfolio: (data: Portfolio) => void
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  portfolios: [],
  addPortfolio: (data) =>
    set((state) => ({ portfolios: [...state.portfolios, data] })),
}))