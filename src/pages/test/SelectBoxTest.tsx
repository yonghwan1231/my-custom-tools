import { SelectBox } from '@components'
import { useFormHandler } from '@hooks'

export const SelectBoxTest = () => {
  const { form, setForm } = useFormHandler({
    fluit: 'apple',
    color: 'yellow',
    isActive: true,
  })

  const fluitValues = [
    { name: '사과', value: 'apple' },
    { name: '바나나', value: 'banana' },
    { name: '토마토', value: 'tomato' },
  ]

  const colorValues = [
    { name: '빨강', value: 'red' },
    { name: '파랑', value: 'blue' },
    { name: '노랑', value: 'yellow' },
  ]

  const isActiveValues = [
    { name: '사용', value: true },
    { name: '사용안함', value: false },
  ]

  return (
    <main id="selectBoxTest" className="container">
      <section className="selectbox_wrap">
        <SelectBox
          name="fluit"
          values={fluitValues}
          onChange={({ name, value }) =>
            setForm((prev) => ({ ...prev, [name]: value }))
          }
        />
        <SelectBox
          name="color"
          values={colorValues}
          onChange={({ name, value }) =>
            setForm((prev) => ({ ...prev, [name]: value }))
          }
          defaultValue={form?.color}
        />
        <SelectBox
          name="isActive"
          values={isActiveValues}
          onChange={({ name, value }) =>
            setForm((prev) => ({ ...prev, [name]: value }))
          }
        />
      </section>

      <section className="mt_24 flex">{JSON.stringify(form)}</section>
    </main>
  )
}
