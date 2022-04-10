import { AsyncLocalStorage } from 'async_hooks';
import { createSolutionBuilder, NumberLiteralType } from 'typescript';
import { workerData } from 'worker_threads';
import API from './api.js';
import { data } from './data';

export interface solution {
  name: string;
  description: string;
  source_link: string;
  donation_link: string;
  media_links: string;
  alternate_texts: string;
  rating_value: number;
  rating_count: number;
}

export const isWinningWord = (word: string) => {
  return solution === word;
}

export const getWordOfDay = () => {
  // January 1, 2022 Game Epoch
  const epochMs = 1641013200000
  const now = Date.now()
  const msInDay = 86400000
  let index = Math.floor((now - epochMs) / msInDay);

  return data[index - 1];

}

export const dict = getWordOfDay();
export const solution = dict["name"].toUpperCase();





