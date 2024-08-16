import { useFormHandler } from '@hooks'

type TContextData = {
  data1: string
  data2: string
  data3: string
}

type TEmitData = TContextData

export const TestModal = ({ context, emit, close }: TModalProps) => {
  const contextData = context.data as TContextData
  const { form, attributes } = useFormHandler<TEmitData>({
    ...contextData,
  })

  return (
    <aside id="testModal" className="modal">
      <main id={context.name} className="modal_wrap">
        <button className="close" onClick={close}>
          &times;
        </button>

        <header>
          <h3 className="title">테스트모달</h3>
        </header>

        <section className="content_wrap">
          <ul className="pt_24">
            <li className="mb_8">
              <input
                type="text"
                {...attributes('data1')}
                placeholder="data1에 전송할 데이터"
              />
            </li>
            <li className="mb_8">
              <input
                type="text"
                {...attributes('data2')}
                placeholder="data2에 전송할 데이터"
              />
            </li>
            <li className="mb_8">
              <input
                type="text"
                {...attributes('data3')}
                placeholder="data3에 전송할 데이터"
              />
            </li>
          </ul>
        </section>

        <footer>
          <div className="btn_wrap">
            <button onClick={close}>취소</button>
            <button onClick={() => emit(form)}>등록</button>
          </div>
        </footer>
      </main>
    </aside>
  )
}
