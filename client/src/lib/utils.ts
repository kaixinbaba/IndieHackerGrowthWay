import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { parse } from "yaml"
import type { ResourcesData } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function loadResources(): Promise<ResourcesData> {
  const response = await fetch('/src/data/resources.yaml')
  const yamlText = await response.text()
  return parse(yamlText) as ResourcesData
}