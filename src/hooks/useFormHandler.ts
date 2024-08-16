import { useState } from 'react'
import { validationRules } from '@constants'

type TFormHandlerEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>

type TDataSet = {
  type: string
  value?: string
  rule: TValidationTypes
}

export const useFormHandler = <T>(
  data: Partial<T> = {},
  validationSet: Partial<Record<keyof T, TValidationTypes>> = {},
) => {
  const [form, setForm] = useState<Partial<T>>(data)
  const [validities, setValidities] = useState<
    Partial<Record<keyof T, boolean>>
  >(
    Object.keys(validationSet).reduce(
      (acc, curr) => ({ ...acc, [curr]: true }),
      {},
    ),
  )

  const formHandler: (e: TFormHandlerEvent) => void = (e) => {
    const name = e.target.name as keyof T
    const { type, rule, value } = e.target.dataset as TDataSet
    let newValue: string | number | unknown[] = value || e.target.value
    switch (type) {
      case 'number': {
        newValue = Number(newValue.replace(/[^0-9]/g, ''))
        break
      }
      case 'phoneNumber': {
        newValue = newValue
          .replace(/[^0-9]/g, '')
          .replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3')
        break
      }
      case 'array': {
        const propCopy = form[name] ? [...(form[name] as unknown[])] : []
        if (propCopy.includes(newValue)) {
          newValue = propCopy.filter((element) => element !== newValue)
        } else newValue = [...propCopy, newValue]
        break
      }
    }
    setForm({ ...form, [name]: newValue })
    if (rule) {
      const result = validationRules[rule].exp.test(newValue as string)
      setValidities({ ...validities, [name]: !newValue || result })
    }
  }

  const attributes = (name: keyof T, classNames: string = '') => {
    const value = form[name] || ''
    const onChange = formHandler
    const rule = validationSet[name]
    const errorClass = rule && !validities[name] ? ' error' : ''
    const className = classNames + errorClass
    return {
      ...{ name, value, className, onChange },
      'data-rule': rule && validationSet[name],
      placeholder: rule && validationRules[rule].placeholder,
    }
  }

  const canSubmit = (requiredKeys: (keyof T)[] = []) => {
    const isEmpty = requiredKeys.every((key: keyof T) =>
      Array.isArray(form[key]) ? form[key][0] : form[key],
    )
    const isValid = Object.values(validities).every((value) => value)
    return isEmpty && isValid
  }

  return { form, setForm, attributes, validities, canSubmit }
}
