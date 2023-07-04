import AbortController from 'abort-controller';
import fetch from 'node-fetch';
import ws from 'ws';

// globalThis.WebSocket = WebSocket as any;
const globalAny = global as any; 
globalAny.AbortController = AbortController; 
globalAny.fetch = fetch; 
globalAny.WebSocket = ws; 
