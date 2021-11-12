export default function Button({ customClassName, actionFunc, children }) {
  return (
    <button
      className={customClassName}
      onClick={actionFunc}>
      {children}
    </button>
  )
}