import { useState } from 'react'
import Column from './Column'
import './kanban.css'

const initial = [
    {
        id: 1,
        title: 'Exemplo: Definir layout',
        description: 'Criar estrutura inicial do kanban',
        assignee: 'Ana',
        dueDate: '2025-12-01',
        status: 'faca',
    },
    {
        id: 2,
        title: 'Exemplo: Implementar API',
        description: 'Conectar a API de backend',
        assignee: 'Bruno',
        dueDate: '2025-12-10',
        status: 'progresso',
    },
    {
        id: 3,
        title: 'Exemplo: Testes',
        description: 'Escrever testes básicos',
        assignee: 'Carla',
        dueDate: '2025-12-20',
        status: 'feito',
    },
]

export default function KanbanBoard() {
    const [cards, setCards] = useState(initial)

    function addCard(data, status) {
        const newCard = {
            id: Date.now() + Math.floor(Math.random() * 1000),
            ...data,
            status,
        }
        setCards((c) => [newCard, ...c])
    }

    function moveCard(id, direction) {
        setCards((prev) =>
            prev.map((card) => {
                if (card.id !== id) return card
                const order = ['faca', 'progresso', 'feito']
                const idx = order.indexOf(card.status)
                const nextIdx = Math.min(order.length - 1, Math.max(0, idx + (direction === 'right' ? 1 : -1)))
                return { ...card, status: order[nextIdx] }
            }),
        )
    }

    function updateCardStatus(id, status) {
        setCards((prev) => prev.map((c) => (c.id === id ? { ...c, status } : c)))
    }

    const columns = [
        { key: 'faca', title: 'A fazer' },
        { key: 'progresso', title: 'Em andamento' },
        { key: 'feito', title: 'Concluído' },
    ]

    return (
        <div className="kanban-root">
            {columns.map((col) => (
                <Column
                    key={col.key}
                    title={col.title}
                    statusKey={col.key}
                    cards={cards.filter((c) => c.status === col.key)}
                    onAdd={(data) => addCard(data, col.key)}
                    onMove={moveCard}
                    onSetStatus={updateCardStatus}
                />
            ))}
        </div>
    )
}
