import React, {useState} from 'react';
import {Button, FlexGapContainer} from '@shared/components/base';
import {
  PRIVACY_POLICY_URL,
  TERMS_OR_SERVICE_URL,
} from '@shared/common/constants/string';
import {View} from 'react-native';
import {ConditionalFadeContainer} from '@shared/components/module';
import useLocalAuth from 'features/auth/hooks/useLocalAuth';
import {Agree} from '../../module';

function PolicyAgreement() {
  const {register} = useLocalAuth();
  const [isAgreeTerms, setIsAgreeTerms] = useState(false);
  const [isAgreePrivacy, setIsAgreePrivacy] = useState(false);
  const isCheckedAll = isAgreeTerms && isAgreePrivacy;

  const setIsAgreeAll = (by: boolean) => {
    setIsAgreeTerms(by);
    setIsAgreePrivacy(by);
  };

  const toggleAll = () => {
    if (isCheckedAll) return setIsAgreeAll(false);
    return setIsAgreeAll(true);
  };
  const toggleTerms = () => setIsAgreeTerms(!isAgreeTerms);
  const togglePrivacy = () => setIsAgreePrivacy(!isAgreePrivacy);

  return (
    <View className="flex-1">
      <View className="flex-1">
        <FlexGapContainer gapSize="big">
          <Agree
            label="모두 동의"
            isChecked={isAgreeTerms && isAgreePrivacy}
            onPress={toggleAll}
          />
          <Agree
            label="(필수) 서비스 이용약관 동의"
            isChecked={isAgreeTerms}
            onPress={toggleTerms}
            link={TERMS_OR_SERVICE_URL}
          />
          <Agree
            label="(필수) 개인정보 처리방침 동의"
            isChecked={isAgreePrivacy}
            onPress={togglePrivacy}
            link={PRIVACY_POLICY_URL}
          />
        </FlexGapContainer>
      </View>
      <ConditionalFadeContainer isVisible={isCheckedAll}>
        <Button label="가입완료" onPress={register} />
      </ConditionalFadeContainer>
    </View>
  );
}

export default PolicyAgreement;
