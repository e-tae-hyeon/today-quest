import {isAxiosError} from 'axios';

const errorMessageMap: Record<number, string> = {
  0: '잠시 후 다시 시도해주세요.',
  1: '존재하지 않는 데이터입니다.',
  2: '잘못된 인증번호 입니다.',
  3: '인증번호가 만료되었습니다.',
};

export function getErrorMessage(err: any) {
  if (isAxiosError(err)) {
    const errorCode = err.response?.data.code;
    const errorMessage = errorMessageMap[errorCode];

    return errorMessage;
  }

  return '잠시 후 다시 시도해주세요.';
}