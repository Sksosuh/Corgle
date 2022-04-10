import { AsyncLocalStorage } from 'async_hooks';
import { createSolutionBuilder, NumberLiteralType } from 'typescript';
import { workerData } from 'worker_threads';
import API from './api.js';

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

const ANSWER: string = "gabagool"; // correct word for the day
let counter = 0;
export const isWinningWord = (word: string) => {
  dict.then(data => {
    return data['name'] === word
  })
}
 
export const getWordOfDay = async () => {
  // January 1, 2022 Game Epoch
  const epochMs = 1641013200000
  const now = Date.now()
  const msInDay = 86400000
  let name = 'test';
  let index = Math.floor((now - epochMs) / msInDay);


  const response = await API.get(String(index-1))
  console.log(response.data)
  return response.data
}

export const dict = getWordOfDay();





