import { PersonalInfomationStoreApi } from './PersonalInfomation.type';
import { INITIAL_STATE } from './PersonalInfomation.store';

export const PersonalInfomationActions = {
    reset: () => ({ setState }: PersonalInfomationStoreApi) => {
        setState(INITIAL_STATE)
    },
}