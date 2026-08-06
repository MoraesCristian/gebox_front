import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/teste')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Teste</h1>

      <input
        type="text"
        placeholder="Digite aqui"
        style={{
          border: '1px solid black',
          padding: '10px',
        }}
      />

      <button>
        Botão
      </button>
    </div>
  )
}