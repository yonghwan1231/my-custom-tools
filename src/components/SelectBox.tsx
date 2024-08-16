import { useEffect, useState } from 'react'

type TSelectBoxItem<TValue> = {
  name: string
  value: TValue
}

type OwnProps<TValue> = {
  name: string
  values: TSelectBoxItem<TValue>[]
  defaultValue?: TValue
  onChange?: (data: { name: string; value: TValue }) => void
  setForm?: boolean
}

export const SelectBox = <T,>({
  name,
  values,
  onChange,
  defaultValue,
}: OwnProps<T>) => {
  const [selected, setSelected] = useState<TSelectBoxItem<T>>()
  const [isOpen, setIsOpen] = useState(false)

  const findAncestorWithClass = (target: HTMLElement, className: string) => {
    let updatedTarget = target
    while (updatedTarget) {
      if (updatedTarget.classList.contains(className)) {
        return updatedTarget
      }
      if (!updatedTarget.parentElement) return null
      updatedTarget = updatedTarget.parentElement
    }
    return null
  }

  const handleItemClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    const ancestorWithClass = findAncestorWithClass(target, 'selectbox_' + name)
    if (ancestorWithClass) setIsOpen(isOpen)
    else setIsOpen(false)
  }

  const selectBoxHandler = (item: TSelectBoxItem<T>) => {
    setIsOpen(false)
    setSelected(item)
    if (onChange) onChange({ name, value: item.value })
  }

  useEffect(() => {
    const setValue =
      defaultValue || typeof defaultValue === 'boolean'
        ? values.find((el) => el.value === defaultValue)
        : values[0]
    setSelected(setValue)
    // if (!onChange) return
    // onChange({ name, value: defaultValue || values[0].value })
  }, [defaultValue])

  useEffect(() => {
    document.removeEventListener('click', handleItemClick)
    document.addEventListener('click', handleItemClick)
    return () => {
      document.removeEventListener('click', handleItemClick)
    }
  }, [isOpen])

  return (
    <div
      className={`selectbox_wrap selectbox_${name}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <p className="select_value" onClick={() => setIsOpen(false)}>
        {selected?.name}
        <span className="btn_open">▼</span>
      </p>
      {isOpen && (
        <ul className="value_list">
          {values?.map((el, idx) => (
            <li
              key={idx}
              onClick={() => selectBoxHandler(el)}
              className={`${selected?.value === el.value ? 'active' : ''}`}
            >
              {el.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
