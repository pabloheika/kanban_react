export default function Card({ card, onMove, onSetStatus }) {
    const { id, title, description, assignee, dueDate, status } = card

    return (
        <div className={`kanban-card card mb-2 ${status === 'faca' ? 'text-bg-warning' :
            status === 'progresso' ? 'text-bg-primary' :
                'text-bg-success'
            }`}>
            <div className="card-body p-2">
                <h6 className="card-title mb-1">{title}</h6>
                <hr></hr>

                <div class="row align-items-start">
                    <div className="col small card-text">
                        <span><i class="bi bi-person-circle"></i> {assignee || '—'}</span><br></br>
                        <span><i class="bi bi-calendar3"></i> {dueDate || '—'}</span>
                    </div>
                    <p className="col card-text small  mb-2">{description}</p>
                </div>
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    {status !== 'faca' && <button type="button"
                        className="btn  btn-outline-light"
                        onClick={() => onMove(id, 'left')}
                    >
                        <i class="bi bi-arrow-left-short"></i>
                    </button>}
                    {status !== 'feito' && <button type="button"
                        className={`btn  btn-outline-light ${status === 'faca' ? 'btn-outline-dark' : ''}`}
                        onClick={() => onMove(id, 'right')}
                    >
                        <i class="bi bi-arrow-right-short"></i>
                    </button>}
                </div>
            </div>
        </div>
    )
}
