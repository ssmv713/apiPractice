import { useState } from 'react';

import { termModels } from '../models';

export const useSignupTerms = () => {
  const allTermsId = termModels.map((it) => it.id);

  const [checkedTerms, setCheckedTerms] = useState<number[]>([]);

  const toggleTermId = (termId: number) => {
    if (checkedTerms.includes(termId)) {
      setCheckedTerms(checkedTerms.filter((term) => term !== termId));
    } else {
      setCheckedTerms([...checkedTerms, termId]);
    }
  };

  const isAllCheckedRequiredTerms = termModels
    .filter((it) => it.isRequired)
    .every((it) => checkedTerms.includes(it.id));

  const isAllCheckedOptionalTerms = termModels
    .filter((it) => !it.isRequired)
    .every((it) => checkedTerms.includes(it.id));

  const isAllChecked = isAllCheckedRequiredTerms && isAllCheckedOptionalTerms;

  const toggleCheckAll = () => {
    if (isAllChecked) {
      return setCheckedTerms([]);
    }

    return setCheckedTerms(allTermsId);
  };

  const isButtonEnabled = isAllCheckedRequiredTerms;

  return {
    isAllChecked,
    toggleCheckAll,
    checkedTerms,
    toggleTermId,
    isButtonEnabled,
  };
};
