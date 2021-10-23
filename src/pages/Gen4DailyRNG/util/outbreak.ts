type Outbreak = {
  mapName: string
  pokemon: string
}

export const dpOutbreaks: readonly Outbreak[] = [
  { mapName: '201ばんどうろ', pokemon: 'ドードー' },
  { mapName: '202ばんどうろ', pokemon: 'ジグザグマ' },
  { mapName: '203ばんどうろ', pokemon: 'カラカラ' },
  { mapName: '206ばんどうろ', pokemon: 'ノズパス' },
  { mapName: '207ばんどうろ', pokemon: 'ゴマゾウ' },
  { mapName: '208ばんどうろ', pokemon: 'ノコッチ' },
  { mapName: '209ばんどうろ', pokemon: 'ブルー' },
  { mapName: '213ばんどうろ', pokemon: 'アブソル' },
  { mapName: '214ばんどうろ', pokemon: 'バネブー' },
  { mapName: '215ばんどうろ', pokemon: 'スリープ' },
  { mapName: '216ばんどうろ', pokemon: 'デリバード' },
  { mapName: '217ばんどうろ', pokemon: 'ウリムー' },
  { mapName: '218ばんどうろ', pokemon: 'ビリリダマ' },
  { mapName: '221ばんどうろ', pokemon: 'カモネギ' },
  { mapName: '222ばんどうろ', pokemon: 'エネコ' },
  { mapName: '224ばんどうろ', pokemon: 'ネイティ' },
  { mapName: '225ばんどうろ', pokemon: 'マクノシタ' },
  { mapName: '226ばんすいどう', pokemon: 'クラブ' },
  { mapName: '227ばんどうろ', pokemon: 'パッチール' },
  { mapName: '228ばんどうろ', pokemon: 'ダンバル' },
  { mapName: '229ばんどうろ', pokemon: 'ポッポ' },
  { mapName: '230ばんすいどう', pokemon: 'サニーゴ' },
  { mapName: 'たにまのはつでんしょ', pokemon: 'ラクライ' },
  { mapName: 'タタラせいてつじょ', pokemon: 'コイル' },
  { mapName: 'ハクタイのもり', pokemon: 'ナマケロ' },
  { mapName: 'シンジこ', pokemon: 'アメタマ' },
  { mapName: 'リッシこ', pokemon: 'ベロリンガ' },
  { mapName: 'エイチこ', pokemon: 'ムチュール' },
]

export const ptOutbreaks: readonly Outbreak[] = [
  { mapName: '201ばんどうろ', pokemon: 'ドードー' },
  { mapName: '202ばんどうろ', pokemon: 'ジグザグマ' },
  { mapName: '203ばんどうろ', pokemon: 'カラカラ' },
  { mapName: '206ばんどうろ', pokemon: 'ヨーギラス' },
  { mapName: '207ばんどうろ', pokemon: 'ゴマゾウ' },
  { mapName: '208ばんどうろ', pokemon: 'ノコッチ' },
  { mapName: '209ばんどうろ', pokemon: 'ブルー' },
  { mapName: '214ばんどうろ', pokemon: 'バネブー' },
  { mapName: '215ばんどうろ', pokemon: 'スリープ' },
  { mapName: '217ばんどうろ', pokemon: 'デリバード' },
  { mapName: '218ばんどうろ', pokemon: 'ビリリダマ' },
  { mapName: '221ばんどうろ', pokemon: 'カモネギ' },
  { mapName: '222ばんどうろ', pokemon: 'エネコ' },
  { mapName: '224ばんどうろ', pokemon: 'ネイティ' },
  { mapName: '225ばんどうろ', pokemon: 'マクノシタ' },
  { mapName: '226ばんすいどう', pokemon: 'クラブ' },
  { mapName: '227ばんどうろ', pokemon: 'パッチール' },
  { mapName: '228ばんどうろ', pokemon: 'ダンバル' },
  { mapName: '229ばんどうろ', pokemon: 'カイロス' },
  { mapName: '230ばんすいどう', pokemon: 'サニーゴ' },
  { mapName: 'たにまのはつでんしょ', pokemon: 'ラクライ' },
  { mapName: 'ハクタイのもり', pokemon: 'ナマケロ' },
]

export const generateOutbreak = (seed: number, table: readonly Outbreak[]): Outbreak => {
  return table[(seed >>> 0) % table.length]
}
