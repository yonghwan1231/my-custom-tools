import { useModalHandler } from '@hooks'

type TModalData = {
  data1: string
  data2: string
  data3: string
}

export const ModalHandlerTest = () => {
  const { Modal, ...modal } = useModalHandler<TModalData>()

  return (
    <main id="modalTest" className="container">
      <Modal />
      <section>
        <dl>
          <dt>data1 : </dt>
          <dd>
            <input type="text" disabled value={modal.data?.data1} />
          </dd>
        </dl>
        <dl>
          <dt>data2 : </dt>
          <dd>
            <input type="text" disabled value={modal.data?.data2} />
          </dd>
        </dl>
        <dl>
          <dt>data3 : </dt>
          <dd>
            <input type="text" disabled value={modal.data?.data3} />
          </dd>
        </dl>
      </section>

      <button
        className="mt_12"
        onClick={() => modal.open({ name: 'TestModal', data: modal.data })}
      >
        모달 열기
      </button>
    </main>
  )
}
