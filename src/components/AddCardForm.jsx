import { useState } from 'react'

export default function AddCardForm({ onSubmit, onCancel }) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [assignee, setAssignee] = useState('')
    const [dueDate, setDueDate] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        if (!title.trim()) return
        onSubmit({ title, description, assignee, dueDate })
        setTitle('')
        setDescription('')
        setAssignee('')
        setDueDate('')
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <div className="mb-2">
                <input
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Título"
                    required
                />
            </div>
            <div className="mb-2">
                <textarea
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Descrição"
                />
            </div>
            <div className="mb-2 d-flex gap-2">
                <input className="form-control" value={assignee} onChange={(e) => setAssignee(e.target.value)} placeholder="Responsável" />
                <input className="form-control" type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
            </div>
            <div className="form-actions d-flex gap-2">
                <button type="submit" className="btn btn-primary"><i class="bi bi-check-lg"></i></button>
                <button type="button" className="btn btn-outline-secondary" onClick={onCancel}><i class="bi bi-x-lg"></i></button>
            </div>
        </form>
    )
}
