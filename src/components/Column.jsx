import { useState } from 'react'
import Card from './Card'
import AddCardForm from './AddCardForm'
import "bootstrap-icons/font/bootstrap-icons";

export default function Column({ title, cards, onAdd, onMove, statusKey, onSetStatus }) {
    const [showForm, setShowForm] = useState(false)

    return (
        <div className="kanban-column card text-bg-dark border-secondary mb-3">
            <div className="card-header d-flex align-items-center justify-content-between text-align-center">
                <h5 className="mb-0">{title}</h5>
                <tr></tr>
            </div>

            <div className="card-body d-flex flex-column p-2">
                <div className="cards-list flex-grow-1">
                    {cards.map((c) => (
                        <Card key={c.id} card={c} onMove={onMove} onSetStatus={onSetStatus} />
                    ))}
                    {cards.length === 0 && <div className="empty  text-bg-dark">Sem tarefas</div>}
                </div>

                <div className="column-action mt-2">
                    {!showForm ? (
                        <button className="btn btn-secondary w-100" onClick={() => setShowForm(true)}>
                            <i class="bi bi-plus-lg"></i>
                        </button>
                    ) : (
                        <AddCardForm
                            onCancel={() => setShowForm(false)}
                            onSubmit={(data) => {
                                onAdd(data)
                                setShowForm(false)
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}
