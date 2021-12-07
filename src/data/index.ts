import singleMaster from './bdsp_tower_trainers_single_master.json'
import singleNormal_1 from './bdsp_tower_trainers_single_normal_1.json'
import singleNormal_2 from './bdsp_tower_trainers_single_normal_2.json'
import singleNormal_3 from './bdsp_tower_trainers_single_normal_3.json'
import singleNormal_4 from './bdsp_tower_trainers_single_normal_4.json'
import singleNormal_5 from './bdsp_tower_trainers_single_normal_5.json'
import singleNormal_6 from './bdsp_tower_trainers_single_normal_6.json'
import singleNormal_7 from './bdsp_tower_trainers_single_normal_7.json'

import doubleMaster from './bdsp_tower_trainers_double_master.json'
import doubleNormal_1 from './bdsp_tower_trainers_double_normal_1.json'
import doubleNormal_2 from './bdsp_tower_trainers_double_normal_2.json'
import doubleNormal_3 from './bdsp_tower_trainers_double_normal_3.json'
import doubleNormal_4 from './bdsp_tower_trainers_double_normal_4.json'
import doubleNormal_5 from './bdsp_tower_trainers_double_normal_5.json'
import doubleNormal_6 from './bdsp_tower_trainers_double_normal_6.json'
import doubleNormal_7 from './bdsp_tower_trainers_double_normal_7.json'

const singleNormal = [
  singleNormal_1,
  singleNormal_2,
  singleNormal_3,
  singleNormal_4,
  singleNormal_5,
  singleNormal_6,
  singleNormal_7,
]
const doubleNormal = [
  doubleNormal_1,
  doubleNormal_2,
  doubleNormal_3,
  doubleNormal_4,
  doubleNormal_5,
  doubleNormal_6,
  doubleNormal_7,
]

export const getSingleNormalTrainersData = (set: 1 | 2 | 3 | 4 | 5 | 6 | 7) => singleNormal[set - 1]
export const getSingleMasterTrainersData = () => singleMaster
export const getDoubleNormalTrainersData = (set: 1 | 2 | 3 | 4 | 5 | 6 | 7) => doubleNormal[set - 1]
export const getDoubleMasterTrainersData = () => doubleMaster
