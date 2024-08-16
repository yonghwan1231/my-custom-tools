import { useFormHandler } from '@hooks'

type TForm = {
  name: string
  gender: string
  birth: number
  phoneNumber: string
  email: string
  purpose?: string[]
  memo?: string
}

export const FormHandlerTest = () => {
  const { form, attributes, canSubmit } = useFormHandler<TForm>(
    { gender: 'male' },
    {
      name: 'name',
      birth: 'birth',
      phoneNumber: 'phoneNumber',
      email: 'email',
    },
  )

  const genderValues = [
    { name: '남', value: 'male' },
    { name: '여', value: 'female' },
  ]

  const purposeValues = [
    { name: '이유1', value: 'reason_1' },
    { name: '이유2', value: 'reason_2' },
    { name: '이유3', value: 'reason_3' },
    { name: '이유4', value: 'reason_4' },
  ]

  const submit = () => {
    alert(
      '----PAYLOAD----\n\n' +
        Object.entries(form)
          .map(([key, value]) => `${key} : ${value}`)
          .join('\n'),
    )
  }

  return (
    <main id="formTest" className="container">
      <form>
        <dl>
          <dt className="required">이름</dt>
          <dd>
            <input type="text" {...attributes('name')} checked={true} />
          </dd>
        </dl>

        <dl>
          <dt className="required">성별</dt>
          <dd className="flex cgap_12">
            {genderValues.map((el) => (
              <label>
                {el.name}
                <input
                  type="radio"
                  data-value={el.value}
                  {...attributes('gender')}
                  checked={el.value === form.gender}
                  name="gender"
                />
              </label>
            ))}
          </dd>
        </dl>

        <dl>
          <dt className="required">생년월일</dt>
          <dd>
            <input type="text" {...attributes('birth')} />
          </dd>
        </dl>

        <dl>
          <dt className="required">휴대폰번호</dt>
          <dd>
            <input
              type="text"
              {...attributes('phoneNumber')}
              data-type="phoneNumber"
            />
          </dd>
        </dl>

        <dl>
          <dt className="required">이메일</dt>
          <dd>
            <input type="text" {...attributes('email')} />
          </dd>
        </dl>

        <dl>
          <dt>가입목적</dt>
          <dd className="flex cgap_12">
            {purposeValues.map((el) => (
              <label>
                {el.name}
                <input
                  type="checkbox"
                  {...attributes('purpose')}
                  data-value={el.value}
                  data-type="array"
                  checked={form.purpose?.includes(el.value)}
                />
              </label>
            ))}
          </dd>
        </dl>

        <dl>
          <dt>메모</dt>
          <dd>
            <input type="text" {...attributes('memo')} />
          </dd>
        </dl>

        <button
          className="mt_12"
          type="button"
          onClick={submit}
          disabled={
            !canSubmit(['name', 'gender', 'birth', 'phoneNumber', 'email'])
          }
        >
          전송
        </button>
      </form>
    </main>
  )
}
