export type Changes = [id: number, modificationStamp: number]

export function getFilesToBackup(lastBackup: number, changes: Array<Changes>) {

  const toBackUp = changes.filter(c => c[1] > lastBackup)
  .map(c => c[0]);

  return Array.from(new Set(toBackUp)).sort((a, b) => a - b);
}