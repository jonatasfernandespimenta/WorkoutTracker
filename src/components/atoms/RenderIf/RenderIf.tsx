export default function RenderIf({ children, condition }: any) {
  return condition ? children : null
}
