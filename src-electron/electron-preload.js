import { contextBridge } from 'electron'
// import { readFile } from 'fs/promises'

contextBridge.exposeInMainWorld('electronAPI', {
  // readFile
})
