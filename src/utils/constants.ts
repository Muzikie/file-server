import type { FileKeys } from './types';

export const FILE_KEYS: { [key in FileKeys]: string; } = {
  ba: 'banner',
  av: 'avatar',
  co: 'cover',
  au: 'audio'
};

export const API_PREFIX = '/api';

export const ASSETS_DIR = './assets';

export const RPC_WS_URL = 'ws://127.0.0.1:7887/rpc-ws';