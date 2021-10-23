import { TileType } from './Tile'

export const coronetB1FMap = [
  '##....*.............',
  '##~~~~~~~~~~~~~~~~~~',
  '##~~~~~~~~~~~~~~~~~~',
  '##~~~~~~~~~~~~~~~x~~',
  '##~~~x~~~~~~~~~~~~~~',
  '##~~~~~~~~~~~~~~~~~~',
  '##~~~~~~~~~~~~~~~~~~',
  '##~~~~~~~~~~~~~~~~~~',
  '##~~~~~~~~~~~~~~~~~~',
  '##~~~~~~~~~~~~~~~~~~',
  '##~~~~~~x~~~~~~~~~~~',
  '*.~~~~~~~~~~~~~~~~~~',
  '..~~~~~~~~#######~~~',
  '..~~~~~~~~#######~~~',
  '..~~~~~~~~#######~~~',
  '..~~##~~~~#######~~~',
  '..~~##~~~~#######~~~',
  '*.~~~~~~~~#######~~~',
  '..~~~~~~~~#######~~~',
  '..~~~~~~~~~~~~..~~~~',
  '..~~~~~~~~~~~~..~~~~',
  '..~~~~~~~~~~~~~~~~~~',
  '..~~~~~~~~~~~~~~~~~~',
  '..~~~~~~~~~~~~~###~~',
  '..~~~~~~~~~~~~~###~~',
  '..~~~~~~~~~~~~~###~~',
  '..~~~~~~~~~~~~~~~~~~',
  '..~~~~~~~~~~x~~~~~~~',
  '*.~~~###~~~~~~~~~~~~',
  '..~~~###~~~~~~~~~~~~',
  '..~~~###~~~~~~##~~~~',
  '..~~~~~~~~~~~~##~~~~',
  '..~~x~~~~~~~~~~~~~~~',
  '..~~~~~~~~~~~~~~~~~~',
  'x.~~~~~~~~~~~~~~~~~~',
].map((it) => it.split('') as readonly TileType[])
