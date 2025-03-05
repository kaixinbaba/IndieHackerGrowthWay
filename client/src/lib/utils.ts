import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { parse } from "yaml"
import type { ResourcesData } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function loadResources(language: string): Promise<ResourcesData> {
  const response = await fetch(`${import.meta.env.BASE_URL}src/data/resources.${language}.yaml`)
  const yamlText = await response.text()
  return parse(yamlText) as ResourcesData
}

export const translations = {
  en: {
    searchPlaceholder: "Search resources...",
    loading: "Loading...",
    siteTitle: "IndieHackerGrowthWay",
    siteDescription: "A curated directory of resources for every stage of your indie hacker journey",
    visit: "Visit",
    copyUrl: "Copy URL",
    copied: "Copied!",
  },
  zh: {
    searchPlaceholder: "搜索资源...",
    loading: "加载中...",
    siteTitle: "独立开发者成长之路",
    siteDescription: "为独立开发者旅程的每个阶段精心策划的资源目录",
    visit: "访问",
    copyUrl: "复制链接",
    copied: "已复制！",
  }
} as const;

export type TranslationKey = keyof typeof translations.en;