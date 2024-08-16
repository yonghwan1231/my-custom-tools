export const validationRules = {
  name: {
    exp: /^[a-zA-Z]{2,}$/,
    placeholder: '영문 2자 이상',
    errorMessage: '이름 입력 형식이 잘못되었습니다.',
  },
  birth: {
    exp: /^\d{8}$/,
    placeholder: '생년월일 8자리',
    errorMessage: '생년월일 입력 형식이 잘못되었습니다.',
  },
  email: {
    exp: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
    placeholder: 'sample@sample.co.kr',
    errorMessage: '이메일 입력 형식이 잘못되었습니다.',
  },
  phoneNumber: {
    exp: /^([0-9]{3})-[0-9]{3,4}-[0-9]{4}$/,
    placeholder: '010-0000-0000',
    errorMessage: '휴대폰 번호 입력 형식이 잘못되었습니다.',
  },
}
